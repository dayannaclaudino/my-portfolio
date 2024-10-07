import { Button, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from '@mui/material/Grid2';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
          backgroundColor: "black",
          height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))
 
    return (

      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src={Avatar}/>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign="center">Dayanna Claudino</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Eu sou Analista de Sistemas e Suporte </Typography>
                    <Grid container display="flex" justifyContent="center"> 
                        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                            <Button variant="outlined">
                            <FileDownloadIcon/>
                            Download CV</Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                            <Button variant="outlined">
                            <EmailIcon/>
                            Contate-me</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>  
            </Container>
        </StyledHero>
                  
      </>
    )
  }
  
  export default Hero