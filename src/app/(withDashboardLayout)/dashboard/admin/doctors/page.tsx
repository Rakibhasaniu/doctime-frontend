"use client"
import { Box, Button, Stack, TextField,IconButton } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useGetAllDoctorQuery,useDeleteDoctorMutation } from "@/redux/api/doctorsApi";
import { DataGrid ,GridColDef} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { toast } from "sonner";
import { IDoctor } from "@/types/doctor";
import { useDebounced } from "@/redux/hooks";




const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const query:Record<string,any>={}
    const [searchTerm,setSearchTerm] = useState<string>("")
    // console.log(searchTerm)

   const debouncedTerm = useDebounced({
    searchQuery:searchTerm,
    delay:600,
   })
   if(!!debouncedTerm){
    query["searchTerm"]=searchTerm

   }

    // query["searchTerm"]=searchTerm

    const {data,isLoading} = useGetAllDoctorQuery({...query});
    const [deleteDoctor] = useDeleteDoctorMutation();

    // console.log(data)
    const doctors = data?.doctors;
    
    const meta = data?.meta;
    // console.log(doctors)

    const handleDelete = async (id: string) => {
        // console.log(id);
        try {
          const res = await deleteDoctor(id).unwrap();
          // console.log(res);
          if (res?.id) {
            toast.success("Doctor deleted successfully!!!");
          }
        } catch (err: any) {
          console.error(err.message);
        }
      };

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "contactNumber", headerName: "Contact Number", flex: 1 },
        { field: "gender", headerName: "Gender", flex: 1 },
        { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
        {
          field: "action",
          headerName: "Action",
          flex: 1,
          headerAlign: "center",
          align: "center",
          renderCell: ({ row }) => {
            return (
              <Box>
                <IconButton
                  onClick={() => handleDelete(row.id)}
                  aria-label="delete"
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
                <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
                  <IconButton aria-label="delete">
                    <EditIcon />
                  </IconButton>
                </Link>
              </Box>
            );
          },
        },
      ];
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={()=>setIsModalOpen(true)}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField onChange={(e)=>setSearchTerm(e.target.value)} size="small" placeholder="Search doctors" />
            </Stack>
            {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
        </Box>
    );
};

export default DoctorsPage;