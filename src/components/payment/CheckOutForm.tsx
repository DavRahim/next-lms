

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useCreateOrderMutation } from "@/redux/features/orders/ordersApi";
import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight, Loader2 } from "lucide-react";


type Props = {
    setOpen: any;
    data: any;
    user: any
};

const CheckOutForm = ({ data, user }: Props) => {

    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<any>("");
    const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
    // const [loadUser, setLoadUser] = useState(false);
    const { data: userData, refetch } = useLoadUserQuery({});
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast()
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        setIsLoading(true);
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });
        if (error) {
            setMessage(error.message);
            setIsLoading(false)
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setIsLoading(false)
            createOrder({ courseId: data._id, payment_info: paymentIntent })
        }
    }

    useEffect(() => {
        if (orderData) {
            refetch();
            redirect(`/course-access/${data._id}`)
            // socketId.emit("notification", {
            //     title: "New Order",
            //     message: `You have a new order from ${data.name}`,
            //     userId: user._id
            // });
        }
        if (error) {
            if ("data" in error) {
                toast({
                    variant: "destructive",
                    title: "Your Payment is Wrong.",
                    description: "Plz Enter Your Valid Card Number And CVC.!",

                })
            }
        }
    }, [orderData, error, data, user, toast, refetch])

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement id="link-authentication-element" />
            <PaymentElement id="payment-element" />
            {
                isLoading ? <Button disabled>
                    <Loader2 className="mr-2 h-4 mt-2 w-4 animate-spin" />
                    Please wait
                </Button> : <Button disabled={isLoading || !stripe || !elements} type="submit">Submit information <ArrowRight className="h-4 w-6 mt-2 text-white fill-white" /> </Button>
            }
            {
                message && (
                    <div
                        id="payment-message" className="text-red-600 font-Poppins pt-2">
                        {message}
                    </div>
                )
            }
            {/* <button disabled={isLoading || !stripe || !elements} id="submit"> */}
            {/* <span id="button-text" className={buttonVariants({ variant: "default" })}>
                    {isLoading ? "Paying..." : "Pay Now"}
                </span> */}
            {/* Show any error or success message */}
            {/* {
                    message && (
                        <div
                            id="payment-message" className="text-red-600 font-Poppins pt-2">
                            {message}
                        </div>
                    )
                } */}
            {/* </button> */}


        </form>
    );
};

export default CheckOutForm;
