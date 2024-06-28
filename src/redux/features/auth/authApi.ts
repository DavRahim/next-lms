import { apiSlice } from "../api/apiSlice";
import { useRegistration } from "./authSlice";



type RegistrationResponse = {
    data: any;
    message: string;
    activationToken: string
}

type RegistrationData = {};


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "/users/register",
                method: "POST",
                body: data,
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result?.data?.data?.activationToken);
                    dispatch(
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useRegistration({
                            token: result?.data?.data?.activationToken
                        })
                    )
                } catch (error: any) {
                    console.log(error)
                }
            }
        }),
        activation: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url: "/users/active-user",
                method: "POST",
                body: {
                    activation_token, activation_code
                }
            }),
        }),
    })
})


export const { useRegistrationMutation, useActivationMutation} = authApi


