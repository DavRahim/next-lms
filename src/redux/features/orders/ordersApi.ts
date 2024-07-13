import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStripePublishAbleKey: builder.query({
            query: () => ({
                url: `/order/payment/stripepublishablekey`,
                method: "GET",
                credentials: "include" as const,

            })
        }),
        createPaymentIntent: builder.mutation({
            query: (amount) => ({
                url: `/order/payment`,
                method: "POST",
                body: {
                    amount
                },
                credentials: "include" as const,

            })
        }),
        createOrder: builder.mutation({
            query: ({ courseId, payment_info }) => ({
                url: `/order/create-order`,
                method: "POST",
                body: {
                    courseId,
                    payment_info
                },
                credentials: "include" as const,

            })
        }),
    })

})


export const { useGetStripePublishAbleKeyQuery, useCreatePaymentIntentMutation,useCreateOrderMutation} = ordersApi