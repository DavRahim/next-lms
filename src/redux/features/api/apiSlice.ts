import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // TODO: process.env.NEXT_PUBLIC_SERVER_URI
        baseUrl: "http://localhost:8000/api/v1",
    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: (data) => ({
                url: "/users/refresh-token",
                method: "POST",
                credentials: "include" as const
            }),
        }),
        loadUser: builder.query({
            query: () => ({
                url: "/users/current-user",
                method: "GET",
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        userLoggedIn({
                            accessToken: result.data.data.accessToken,
                            user: result.data.data
                        })
                    )
                } catch (error: any) {
                    console.log(error)
                }
            }
        }),
    }),
})

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice




