import DtForm from '@/components/forms/DtForm';
import DtInput from '@/components/forms/DtInput';
import FileUploader from '@/components/forms/FileUploader';
import Modal from '@/components/shared/Modal/Modal';
import { useCreateSpecialtiesMutation } from '@/redux/api/specialitiesApi';
import { modifyPayload } from '@/utils/modifyPayloads';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialTiesModal = ({open,setOpen}:TProps) => {

    const [createSpecialties] = useCreateSpecialtiesMutation();

    const handleCreateSpecialties =async(values:FieldValues) => {
        // console.log(values)
        const data = modifyPayload(values);
        try{
            const res = await createSpecialties(data);
            console.log(res)
        }catch(err:any){
            console.log(err?.message)
        }
    }

    return <Modal open={open} setOpen={setOpen} title="Create A New Specialties" >
        <DtForm onSubmit={handleCreateSpecialties}>
            <Grid container spacing={2}>
                    <Grid item md={6}>
                    <DtInput name="title" label="title" />
                    </Grid>
                    <Grid item md={6}>
                    <FileUploader name="file" label="Upload File" />
                    </Grid>
            </Grid>
            <Button sx={{mt:1}} type="submit" >Create Specialties</Button>
        </DtForm>
    </Modal>
};

export default SpecialTiesModal;