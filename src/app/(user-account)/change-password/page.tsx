"use client"
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Heading from "@/lib/Heading";

type Props = {};

const FormSchema = z.object({
    oldPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    newPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const Page = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: ""
        },
    });
    const { toast } = useToast();
    const [changePassword, { isLoading, error, isSuccess }] = useChangePasswordMutation();
    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        await changePassword({ oldPassword: data.oldPassword, newPassword: data.newPassword })
    }
    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Password Change Successfully !",
            })
            form.reset();
        }
        if (error) {
            if ("data" in error) {
                toast({
                    variant: "destructive",
                    title: "Password Change Unsuccessfully.",
                    description: "There was a problem with your request.",
                });
                form.reset();
            }
        }
    }, [isSuccess, toast, error, form])
    return (
        <div className="col-span-10">
            <Heading title="Change Password"
                description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming, Redux" />
            <div className="">
                <h2 className="text-[25px] font-semibold">Change password</h2>
                <h5>Do not share your password with anyone</h5>
            </div>
            <Separator className="mt-4 mb-8" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => (
                            <FormItem className="space-y-0 mb-4 w-1/2">
                                <FormLabel>Enter Your Old Password</FormLabel>
                                <FormDescription>
                                    The password with which the account was opened !
                                </FormDescription>
                                <FormControl>
                                    <Input type="password" placeholder="OldPass19971@!" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="space-y-0 mb-4 w-1/2">
                                <FormLabel>Enter Your New Password</FormLabel>
                                <FormDescription>
                                    Enter you new password as your wish !
                                </FormDescription>
                                <FormControl>
                                    <Input type="password" placeholder="AnyPass19971@!" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        isLoading ? (<Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>) : (<Button className="mt-9" type="submit">Submit information <ArrowRight className="h-4 w-6 text-white fill-white" /> </Button>)
                    }

                </form>
            </Form>
        </div>
    );
};

export default Page;
