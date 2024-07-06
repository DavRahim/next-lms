"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};
const FormSchema = z.object({
    email: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),

})

const Page = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });
    const onSubmit = async (data: z.infer<typeof FormSchema>) => { }
    return (
        <div className="col-span-10">
            <div className="">
                <h2 className="text-[25px] font-semibold">Change password</h2>
                <h5>Do not share your password with anyone</h5>
            </div>
            <Separator className="mt-4 mb-8" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="space-y-0 mb-4 w-1/2">
                                <FormLabel>Enter Your Email</FormLabel>
                                <FormDescription>
                                    All communications will be made to this email address & this will be your login username. Yahoo email is not acceptable!
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
                        name="email"
                        render={({ field }) => (
                            <FormItem className="space-y-0 mb-4 w-1/2">
                                <FormLabel>Enter Your Email</FormLabel>
                                <FormDescription>
                                    All communications will be made to this email address & this will be your login username. Yahoo email is not acceptable!
                                </FormDescription>
                                <FormControl>
                                    <Input placeholder="Jhno@gamil.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="mt-9" type="submit">Submit information <ArrowRight className="h-4 w-6 text-white fill-white" /> </Button>
                </form>
            </Form>

           
        </div>
    );
};

export default Page;
