"use client"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import Verification from "@/components/Verification";
import { useRouter } from "next/navigation";
type Props = {};

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    gender: z.enum(["male", "woman",], {
        required_error: "You need to select a notification type.",
    }),
    email: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
    phonNumber: z.string().min(11, {
        message: "Password must be at least 6 characters."
    }),
    discordUsername: z.string().min(3, {
        message: "Password must be at least 6 characters."
    }),
    address: z.string().min(3, {
        message: "Password must be at least 6 characters."
    }),
    avatar: z
        .any(),

})

const Page = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            gender: "male",
            email: "",
            password: "",
            confirmPassword: "",
            phonNumber: "",
            discordUsername: "",
            address: "",
            avatar: new File([""], "avatar")
        },
    });
    const { toast } = useToast()
    const [register, { data, error, isSuccess }] = useRegistrationMutation();
    const { user } = useSelector((state: any) => state.auth)
    const [verify, setVerify] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
            if (data?.data?.activationToken) {
                setVerify(true)
            }

            console.log(data);
        } else if (error) {
            toast({
                title: "You submitted the following values:",
                description: "code is error"
            })
        }
    }, [isSuccess, error, data, toast])
    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("gender", data.gender)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("phonNumber", data.phonNumber)
        formData.append("discordUsername", data.discordUsername)
        formData.append("address", data.address)
        formData.append("avatar", data.avatar)
        await register(formData)
    }
    if (user) return router.push('/');
    return (
        <>
            {verify ?
                <>
                    <Verification />
                </> :
                <>
                    <div className="py-10">
                        <div className="w-full space-y-8 mb-8">
                            <div>
                                <h1 className="text-center text-gray-900 text-4xl font-semibold">
                                    <span className="text-green-600">register</span> RsLms
                                </h1>
                                <p className="subtitle mx-auto w-full text-center">Provide correct information to open account. This information will be required later during login.</p>
                            </div>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <div className="flex flex-col gap-4 lg:flex-row lg:gap-20">
                                    <div className="w-full lg:w-1/2">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
                                                    <FormLabel>Your full name</FormLabel>
                                                    <FormDescription>
                                                        This name will be used in all communications. So provide correct name. Please do not use any pseudonyms.
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
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
                                                    <FormLabel>Select your gender </FormLabel>
                                                    <FormDescription>
                                                        Appropriate address will be used in all communications.
                                                    </FormDescription>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex mt-2"
                                                        >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="male" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    male
                                                                </FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="woman" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    woman
                                                                </FormLabel>
                                                            </FormItem>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
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
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
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
                                            name="confirmPassword"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
                                                    <FormLabel>Enter the same password again</FormLabel>
                                                    <FormDescription>
                                                        This password must match the password above
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
                                            name="avatar"
                                            render={({ field }) => (
                                                <FormItem className="flex gap-4">
                                                    <Avatar>
                                                        <AvatarImage src={"https://res.cloudinary.com/ds4wulbab/image/upload/v1719505881/scytljamvcvcls2boxzu.png"} alt="@shadcn" />
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>
                                                    <div className="grid items-center gap-1.5">
                                                        <Label htmlFor="picture">Add a profile picture of yourself</Label>
                                                        <FormDescription>
                                                            Photo size must be less than 0.5MB or 500KB and only .jpg, .jpeg or .png format images are acceptable. This image we can use in our website course student list
                                                        </FormDescription>
                                                        <Input accept="image/*" type="file" name="avatar" onChange={(event) => {
                                                            if (!event.target.files) return
                                                            field.onChange(event.target.files[0])
                                                        }} />
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        {/* <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src={"https://res.cloudinary.com/ds4wulbab/image/upload/v1719505881/scytljamvcvcls2boxzu.png"} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid items-center gap-1.5">
                                        <Label htmlFor="picture">Add a profile picture of yourself</Label>
                                        <FormDescription>
                                            Photo size must be less than 0.5MB or 500KB and only .jpg, .jpeg or .png format images are acceptable. This image we can use in our website course student list
                                        </FormDescription>
                                        <Input onChange={imageHandler} accept="image/*" name="avatar" type="file" />
                                    </div>
                                </div> */}
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <FormField
                                            control={form.control}
                                            name="phonNumber"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
                                                    <FormLabel>Your mobile number</FormLabel>
                                                    <FormDescription>
                                                        Verification will be done by sending OTP. If you use a mobile number other than a Bangladeshi mobile number, the course fee will be Tk 1,200 .
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
                                            name="discordUsername"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0 mb-4">
                                                    <FormLabel>Your Discord username</FormLabel>
                                                    <FormDescription>
                                                        This username will be given access to the courses Discord support channel. If you cant find your Discord username, check out the guide here
                                                    </FormDescription>
                                                    <FormControl>
                                                        <Input required placeholder="Jhno@gamil.com" {...field} />
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
                                                        Necessary documents can be sent to this address through courier service. So provide correct address.
                                                    </FormDescription>
                                                    <FormControl>
                                                        <Textarea placeholder="7,Mohakhali, AK Khandakar Rd" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                I accept all terms , privacy policy and refund policy of Learn with RS Learning platform .
                                            </label>
                                        </div>
                                        <Button type="submit">Submit information <ArrowRight className="h-4 w-6 text-white fill-white" /> </Button>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                </>}


        </>
    );
    
};

export default Page;
