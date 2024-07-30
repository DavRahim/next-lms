"use client"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useUpdateAvatarMutation, useUserUpdateMutation } from "@/redux/features/auth/authApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
type Props = {};

const FormSchema = z.object({
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
            discordUsername: "",
            address: "",
            avatar: new File([""], "avatar"),
        },
    });
    const { toast } = useToast();
    const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {});
    const user = !isLoading && userData?.data;
    const router = useRouter();
    const [userUpdate, { error, isSuccess }] = useUserUpdateMutation();
    const [updateAvatar, { error: avatarError, isSuccess: avatarSuccess }] = useUpdateAvatarMutation()
    useEffect(() => {
        if (isSuccess || avatarSuccess) {
            refetch();
            toast({
                description: "user update successfully.",
            })
            form.reset({ address: "", avatar: "", discordUsername: "" });
        }
        if (error) {
            if ("data" in error) {
                toast({
                    variant: "destructive",
                    title: "user update Unsuccessfully.",
                    description: "There was a problem with your request Data",
                })
            }
        }
        if (avatarError) {
            if ("data" in avatarError) {
                toast({
                    variant: "destructive",
                    title: "Avatar Update Unsuccessfully.",
                    description: "There was a problem with your request avatar",
                })
            }
        }

    }, [isSuccess, error, toast, refetch, form, avatarError, avatarSuccess]);

    // image show
    const [imageShow, setImageShow] = useState<any>("");
    const [baseImage, setBaseImage] = useState<any>("");
    useEffect(() => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const avatar = fileReader.result
            if (fileReader.readyState === 2) {
                setBaseImage(avatar)
            }
        }
        if (imageShow) {
            fileReader.readAsDataURL(imageShow.target.files[0]);
        }
    }, [imageShow, baseImage])
    // image show

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        if (data.avatar.size >= 512001) {
            return toast({
                title: "Your Image Is Too Long!",
                description: "Plz Photo size must be less than 0.5MB or 500KB and only .jpg, .jpeg or .png!"
            })
        }
        if (data.avatar.type !== "image/jpeg" &&
            data.avatar.type !== "image/jpg" &&
            data.avatar.type !== "image/png") {
            return toast({
                title: "Your Image Format Is Not Valid!",
                description: "Plz Photo size must be less than 0.5MB or 500KB and only .jpg, .jpeg or .png!"
            })
        }
        const formData = new FormData();
        formData.append("avatar", data.avatar);
        await updateAvatar(formData);
        await userUpdate({ discordUsername: data.discordUsername, address: data.address })
    }
    if (!isLoading && !user) return router.push('/');
    return (
        <>
            <div className="col-span-10">
                <div className="">
                    <h2 className="text-[25px] font-semibold">Profile update</h2>
                    <h5>Update your profile</h5>
                </div>
                <Separator className="mt-4 mb-8" />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:gap-20">
                            <div className="w-full lg:w-1/2">
                                <FormField
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 mb-4">
                                            <FormLabel>Your full name</FormLabel>
                                            <FormDescription>
                                                This name will be used in all communications. So provide correct name. Please do not use any pseudonyms.
                                            </FormDescription>
                                            <FormControl>
                                                <Input value={user?.name} readOnly disabled placeholder="Abdur Rahim" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 mb-4">
                                            <FormLabel>Enter Your Email</FormLabel>
                                            <FormDescription>
                                                All communications will be made to this email address & this will be your login username. Yahoo email is not acceptable!
                                            </FormDescription>
                                            <FormControl>
                                                <Input value={user?.email} readOnly disabled placeholder="Jhno@gamil.com" />
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
                                            <Avatar className="bg-green-300/50">
                                                <AvatarImage src={baseImage ? baseImage : user?.avatar?.url ? user?.avatar?.url : "/girl.png"} alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="grid items-center gap-1.5">
                                                <Label htmlFor="picture">Add a profile picture of yourself</Label>
                                                <FormDescription>
                                                    Photo size must be less than 0.5MB or 500KB and only .jpg, .jpeg or .png format images are acceptable. This image we can use in our website course student list
                                                </FormDescription>
                                                <Input accept="image/*" type="file" name="avatar"
                                                    onChange={(event) => {
                                                        if (!event.target.files) return
                                                        field.onChange(event.target.files[0])
                                                        setImageShow(event);
                                                    }} />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="discordUser"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 mb-4">
                                            <FormLabel>Your Discord username</FormLabel>
                                            <FormDescription>
                                                This username will be given access to the courses Discord support channel. If you cant find your Discord username, check out the guide here
                                            </FormDescription>
                                            <FormControl>
                                                <Input value={user?.discordUsername} readOnly disabled required placeholder="Jhno@gamil.com" />
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
                                            <FormLabel>Your current Discord username</FormLabel>
                                            <FormDescription>
                                                Most of the Discord users have changed their Discord username due to the recent update of Discord. If you have changed your previous Discord username, enter the changed current username here.
                                            </FormDescription>
                                            <FormControl>
                                                <Input required placeholder="current Discord username" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <FormField
                                    name="phonNumber"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 mb-4">
                                            <FormLabel>Your mobile number</FormLabel>
                                            <FormDescription>
                                                Verification will be done by sending OTP. If you use a mobile number other than a Bangladeshi mobile number, the course fee will be Tk 1,200 .
                                            </FormDescription>
                                            <FormControl>
                                                <Input value={user?.phonNumber} readOnly disabled placeholder="Jhno@gamil.com" />
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
                                                <Textarea placeholder={user?.address} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="mt-9" type="submit">Submit information <ArrowRight className="h-4 w-6 text-white fill-white" /> </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    );

};

export default Page;
