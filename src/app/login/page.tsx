"use client"

import React, { useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { ToastAction } from "@/components/ui/toast";

const FormSchema = z.object({
    email: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    })
})




const Page = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });
    const [login, { data, isSuccess, error }] = useLoginMutation();
    const { toast } = useToast();
    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Uh oh! YOU LOGIN SUCCESSFULLY.",
                description: "There was a problem with your request.",
            })
            console.log(data);
        } else if (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }, [isSuccess, error, data, toast])

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        await login({ email: data.email, password: data.password })
    }
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 py-10">
                <div className="w-full space-y-8">
                    <div>
                        <h1 className="text-center text-gray-900 text-4xl font-semibold">
                            <span className="text-green-600">Login</span> RsLms
                        </h1>
                        <p className="subtitle mx-auto w-full text-center">Do not share your login information with anyone</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Your Email</FormLabel>
                                        <FormDescription>
                                            The email address you registered with.
                                        </FormDescription>
                                        <FormControl>
                                            <Input placeholder="Jhno@gamil.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Your Password</FormLabel>
                                        <FormDescription>
                                            Password must be at least 8 characters long and contain at least 1 letter and 1 number.
                                        </FormDescription>
                                        <FormControl>
                                            <Input placeholder="anyPassword1971" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between items-center">
                                <Button type="submit">Submit</Button>
                                <p className=" hover:underline">Forgot password? </p>
                            </div>
                        </form>
                    </Form>

                </div>
                <div className="w-full">
                    <div className="flex h-full w-full items-center justify-center">
                        <Image
                            src={'/login.png'}
                            className="w-full h-full"
                            alt="login"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>

            </div>
        </MaxWidthWrapper>
    );
};

export default Page;
