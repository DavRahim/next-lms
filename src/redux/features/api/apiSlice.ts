import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // TODO: process.env.NEXT_PUBLIC_SERVER_URI
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({}),
})




