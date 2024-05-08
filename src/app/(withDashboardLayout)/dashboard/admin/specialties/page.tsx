"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialTiesModal from "./components/SpecialTiesModal";
import { useState } from "react";
import { useDeleteSpecialtiesMutation, useGetSpecialtiesQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from "next/image";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "sonner";

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const {data,isLoading} = useGetSpecialtiesQuery({ });

    const [deleteSpecialties] = useDeleteSpecialtiesMutation();



    const handleDelete =async (id:string) => {
            try {
                const res = await deleteSpecialties(id).unwrap();
                if(res?.id){
                    toast.success("Specialties deleted successfully")
                }
            } catch (err:any) {
                console.log(err?.message)
            }
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 400 },
        { field: 'icon', headerName: 'Icon', flex:1,renderCell:({row}) => {
                    return <Box>
                        <Image src={row.icon} alt="icon" width={30} height={30} />
                    </Box>
        } },
        { field: 'action', headerName: 'Action', flex:1,headerAlign:"center",align:"center",renderCell:({row}) => {
                    return (
                        <IconButton onClick={()=>handleDelete(row.id)} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    )
        } },
        
      ];

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                <Button onClick={()=> setIsModalOpen(true)} >
                    Create Specialties
                </Button>
                <SpecialTiesModal open={isModalOpen} setOpen={setIsModalOpen} />    
                <TextField size="small" placeholder="Search Specialties" />
            </Stack>
            { !isLoading ?<Box my={2}>
            <DataGrid
        rows={data}
        columns={columns}
        
      />
            </Box>:
            <h1>Loading.....</h1>
            }
        </Box>
    );
};

export default SpecialtiesPage;