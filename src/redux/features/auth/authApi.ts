import { apiSlice } from "../api/apiSlice";



type RegistrationResponse = {
    message: string;
    success: boolean;
    data: any
}

type RegistrationData = {};


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "register",
                method: "POST",
                body: data,
                credentials: "include" as const
            }),
        })
    })
})



