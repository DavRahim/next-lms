import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import { useCreatePaymentIntentMutation, useGetStripePublishAbleKeyQuery } from "@/redux/features/orders/ordersApi";
import { loadStripe } from "@stripe/stripe-js";


type Props = {
    id: string
};

const CourseDetailsPage = ({ id }: Props) => {
    const { data, isLoading } = useGetCoursesDetailsQuery(id);
    const courseDetailsData = data?.data
    const { data: config } = useGetStripePublishAbleKeyQuery({});
    const [createPaymentIntent, { data: createPaymentIntentData }] = useCreatePaymentIntentMutation();


    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        if (config) {
            const publishablekey = config?.publishablekey;
            setStripePromise(loadStripe(publishablekey))
        }
        if (courseDetailsData) {
            const amount = Math.round(courseDetailsData.price * 100)
            createPaymentIntent(amount)
        }

    }, [config, courseDetailsData, createPaymentIntent]);

    useEffect(() => {
        if (createPaymentIntentData) {
            setClientSecret(createPaymentIntentData?.client_secret)
        }
    }, [createPaymentIntentData])

    return (
        <>
            {
                isLoading ? (
                    // TODO: Loading components
                    <h1>Loading ...</h1>
                ) : (
                    stripePromise && (
                        <CourseDetails courseDetailsData={courseDetailsData} stripePromise={stripePromise} clientSecret={clientSecret} />
                    )
                )}
        </>);
};

export default CourseDetailsPage;
