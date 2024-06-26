"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
type Props = {};
const FormSchema = z.object({
    name: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
    address: z.string().min(1, {
        message: "Password must be at least 6 characters."
    })

})

const Page = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            address: ""
        },
    });
    const { toast } = useToast()

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 py-10">
                <div className="w-full space-y-8">
                    <div>
                        <h1 className="text-center text-gray-900 text-4xl font-semibold">
                            <span className="text-green-600">Sign Up</span> RsLms
                        </h1>
                        <p className="subtitle mx-auto w-full text-center">Do not share your login information with anyone</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <div>
                                <div>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Enter Your Name</FormLabel>
                                                    <FormDescription>
                                                        The name is valid with.
                                                    </FormDescription>
                                                    <FormControl>
                                                        <Input placeholder="Abdur Rahim" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Enter Your Email</FormLabel>
                                                    <FormDescription>
                                                        The email address valid with.
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
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Label htmlFor="address">Your full address </Label>
                                                    <FormDescription>
                                                        Password must be at least 8 characters long and contain at least 1 letter and 1 number.
                                                    </FormDescription>
                                                    <FormControl>
                                                        <Textarea placeholder="7,Mohakhali, AK Khandakar Rd" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        {/* <div className="grid gap-1.5 mb-4">
                                            <Label htmlFor="address">Your full address </Label>
                                            <FormDescription>
                                                Necessary documents can be sent to this address through courier service. So provide correct address.
                                            </FormDescription>
                                            <Textarea placeholder="7,Mohakhali, AK Khandakar Rd" id="address" />
                                        </div> */}
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                I accept all terms , privacy policy and refund policy of Learn with RS Learning platform .
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
