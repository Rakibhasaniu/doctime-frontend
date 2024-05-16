"use client"

import { useGetMYProfileQuery } from '@/redux/api/myProfileApi';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import React from 'react';
import DoctorInformation from './components/DoctorInformations';

const Profile = () => {
    const { data, isLoading } = useGetMYProfileQuery(undefined);
    // console.log(data)

    if (isLoading) {
        <p>Loading...</p>;
     }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid xs={4}>
                    <Box
                    sx={{
                        height: 500,
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: 1,
                     }}
                    >
                    <Image
                        height={300}
                        width={400}
                        src={data?.profilePhoto}
                        alt='User Photo'
                     />
                    </Box>
                </Grid>
                <Grid xs={8}>
                <DoctorInformation data={data} />
                </Grid>
            </Grid>
        </Container>                
    );
};

export default Profile;