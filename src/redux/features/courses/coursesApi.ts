import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsersAllCourses: builder.query({
            query: () => ({
                url: "/course/get-courses",
                method: "GET",
                credentials: "include" as const
            })
        }),
        getCourseContent: builder.query({
            query: (id) => ({
                url: `/course/get-course-content/${id}`,
                method: "GET",
                credentials: "include" as const
            })
        }),
    })
})


export const { useGetUsersAllCoursesQuery, useGetCourseContentQuery } = courseApi