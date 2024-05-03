import { Box, Container, Grid, Typography } from "@mui/material";
import femaleDoctor from "@/assets/how-it-works-img.png";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <Container>
      <Box my={10}>
        <Box mb={5}>
          <Typography component="p" color="#1586FD" mb={2}>
            How it works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={600}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities right here.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Image src={femaleDoctor} alt="how-it-works" />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item sx={6}>
                    <bo
                </Grid>
                <Grid item sx={6}></Grid>
                <Grid item sx={6}></Grid>
                <Grid item sx={6}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
