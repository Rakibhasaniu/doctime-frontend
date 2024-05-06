import Modal from '@/components/shared/Modal/Modal';
import { TextField } from '@mui/material';
import React from 'react';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialTiesModal = ({open,setOpen}:TProps) => {
    return <Modal open={open} setOpen={setOpen} title="Create Specialties" >
        <TextField />
    </Modal>
};

export default SpecialTiesModal;