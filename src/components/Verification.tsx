"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { z } from "zod";



const FormSchema = z.object({
    pin: z.string().min(4, {
        message: "Your one-time password must be 6 characters.",
    }),
})
type Props = {
    successData: any
};

const Verification = ({ successData }: Props) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    const { token } = useSelector((state: any) => state.auth);
    const [activation, { isSuccess, error }] = useActivationMutation()

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        use is successfully register
                    </pre>
                ),
            })
        }
        if (error) {
            toast({
                title: "You submitted the following values:",
                description: "code is error"
            })
            console.log(error);
        }
    }, [isSuccess, error])

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        await activation({
            activation_token: token,
            activation_code: data.pin,
        })
    }
    return (
        <div className="py-10">
            <div className="w-full space-y-8 mb-8">
                <div>
                    <h1 className="text-center text-gray-900 text-4xl font-semibold">
                        <span className="text-green-600">Email Verification</span> RsLms
                    </h1>
                    <p className="subtitle mx-auto w-full text-center">{successData?.message}</p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem className="mx-auto">
                                <FormLabel>One-Time Password</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={4} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Please enter the one-time password sent to your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>

    );
};

export default Verification;
