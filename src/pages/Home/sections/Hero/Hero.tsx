import { Box, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from '@mui/material/Grid2';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackGround";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
          backgroundColor: theme.palette.primary.main,
          height: "100vh",
          display:"flex",
          alignItems:"center",
          [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "50px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))
 
    return (

      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Dayanna Claudino</Typography>
                        <Typography color="primary.contrastText" variant="h3" textAlign="center">Eu sou Analista de Sistemas </Typography>
                    <Grid container display="flex" justifyContent="center" spacing={3} pt={3}> 
                        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                            <StyledButton onclick={()=> console.log("download")}>
                                <FileDownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                            <StyledButton onclick={()=> console.log("contate-me")}> 
                            <EmailIcon/>
                                <Typography>
                                    Contate-me
                                </Typography>
                            </StyledButton>
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