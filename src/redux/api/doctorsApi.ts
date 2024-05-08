import { IDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";


const doctorApi = baseApi.injectEndpoints({
    endpoints:(build) => ({
        createDoctor:build.mutation({
            query:(data) => ({
                url:'/user/create-doctor',
                method:'POST',
                contentType:"multipart/form-data",
                data
            }),
            invalidatesTags:[tagTypes.specialties],
            
        }),
        getDoctor:build.query({
            query:() => ({
                url:'/doctor',
                method:'GET',
            }),
            transformResponse:(response:IDoctor ,meta:IMeta) => {
              return{
                doctors:response,
                meta
              }
            },
            providesTags:[tagTypes.doctor]
            
        }),
        deleteDoctor: build.mutation({
            query: (id) => ({
              url: `/doctor/soft/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: [tagTypes.doctor],
          }),
          updateDoctor: build.mutation({
            query: (data) => ({
              url: `/doctor/${data.id}`,
              method: "PATCH",
              data: data.body,
            }),
            invalidatesTags: [tagTypes.doctor],
          })
    })
})

export const { useCreateDoctorMutation, useDeleteDoctorMutation, useGetDoctorQuery,useUpdateDoctorMutation } = doctorApi;