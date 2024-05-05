"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayloads";
import { registerPatient } from "@/service/actions/registerPatient";
import { userLogin } from "@/service/actions/userLogin";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { storeUserInfo } from "@/service/auth.service";
import DtForm from "@/components/forms/DtForm";
import DtInput from "@/components/forms/DtInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// interface IPatientData {
//   name: string;
//   email: string;
//   contactNumber: string;
//   address: string;
// }
// interface IPatientRegisterFormData {
//   password: string;
//   patient: IPatientData;
// }

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
const RegisterPage = () => {
  const router = useRouter();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<IPatientRegisterFormData>();
  const handleRegister= async (values:FieldValues) => {
    // console.log(data);
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        // router.push("/login");
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
            }}
          >
            <Box>
              <Image
                src={assets.svgs.logo}
                width={50}
                height={50}
                alt="background-image"
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <DtForm onSubmit={handleRegister} resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <DtInput
                    name="patient.name"
                    label="Name"
                    type="name"
                    // variant="outlined"
                    // size="small"
                    fullWidth={true}
                    // {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <DtInput
                  name="patient.email"
                    label="Email"
                    type="email"
                    // variant="outlined"
                    // size="small"
                    fullWidth={true}
                    // {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <DtInput
                  name="password"
                    label="Password"
                    type="password"
                    // variant="outlined"
                    // size="small"
                    fullWidth={true}
                    // {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <DtInput
                  name="patient.contactNumber"
                    label="Contact Number"
                    type="tel"
                    // variant="outlined"
                    // size="small"
                    fullWidth={true}
                    // {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <DtInput
                  name="patient.address"
                    label="Address"
                    type="text"
                    // variant="outlined"
                    // size="small"
                    fullWidth={true}
                    // {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ margin: "10px 0px" }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </DtForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
