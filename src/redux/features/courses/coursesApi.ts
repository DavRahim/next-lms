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
        getCoursesDetails: builder.query({
            query: (id) => ({
                url: `/course/get-course/${id}`,
                method: "GET",
                credentials: "include" as const
            })
        }),
        addNewQuestion: builder.mutation({
            query: ({ question, courseId, contentId }) => ({
                url: `/course/add-question`,
                method: "PUT",
                body: { question, courseId, contentId },
                credentials: "include" as const
            })
        }),
        addAnswerInQuestion: builder.mutation({
            query: ({ answer, courseId, contentId, questionId }) => ({
                url: `/course/add-answer`,
                method: "PUT",
                body: { answer, courseId, contentId, questionId },
                credentials: "include" as const
            })
        }),
        addReviewInCourse: builder.mutation({
            query: ({ review, rating, courseId }) => ({
                url: `/course/add-review/${courseId}`,
                method: "PUT",
                body: { review, rating },
                credentials: "include" as const
            })
        }),
        addReplyInReview: builder.mutation({
            query: ({ reviewId, comment, courseId }) => ({
                url: `/course/add-reply`,
                method: "PUT",
                body: { reviewId, comment, courseId },
                credentials: "include" as const
            })
        }),
    })
})


export const { useGetUsersAllCoursesQuery, useGetCourseContentQuery, useGetCoursesDetailsQuery, useAddNewQuestionMutation, useAddAnswerInQuestionMutation, useAddReviewInCourseMutation, useAddReplyInReviewMutation } = courseApi;