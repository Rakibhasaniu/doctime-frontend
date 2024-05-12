"use client"

import DtForm from "@/components/forms/DtForm";
import DtInput from "@/components/forms/DtInput";
import DtSelectField from "@/components/forms/DtSelectedFields";
import DtFullScreenModal from "@/components/shared/Modal/DtFullScreenModal";
import { useGetDoctorQuery } from "@/redux/api/doctorsApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayloads";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";



type TParams = {
    params:{
        doctorId:string;
    }
}

const UpdateDoctor = ({params}:TParams) => {
    // console.log(params?.doctorId)
    const id =params?.doctorId
    const {data,isLoading} = useGetDoctorQuery(id)
    console.log(data)
    const handleFormSubmit = async (values: FieldValues) => {
      // console.log(values);
      
      try {
        
      } catch (err:any) {
        console.log(err)
      }
    };


    const defaultValues = {
        
          email: "",
          name: "",
          contactNumber: "",
          address: "",
          registrationNumber: "",
          gender: "",
          experience: 0,
          apointmentFee: 0,
          qualification: "",
          currentWorkingPlace: "",
          designation: "",
          profilePhoto: "",
        
       
      };
    return (
      // <Typography component="h5" variant="h5" >Update doctor info</Typography>
        <Box>
            <Typography component="h5" variant="h5" >Update doctor info</Typography>
        <DtForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

        

          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DtInput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update Doctor</Button>
      </DtForm>
        </Box>
    );
};

export default UpdateDoctor