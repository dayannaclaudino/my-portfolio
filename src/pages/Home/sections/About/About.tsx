import { Box, Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: "50px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }));

    const InfoBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: theme.shadows[2],
        textAlign: "center",
        minWidth: "200px",
        cursor: "pointer",
        margin: "10px",
        textTransform: "none",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            border: `1px solid ${theme.palette.primary.main}`,
        },
        
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg" id="about-section">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Sobre mim
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <InfoBox>
                            <WorkspacePremiumIcon/>
                            <Typography variant="h6">Experiência</Typography>
                            <Typography>4+ anos</Typography>
                            <Typography>Analista de Sistemas e Suporte</Typography>
                        </InfoBox>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <InfoBox>
                            <SchoolIcon/>
                            <Typography variant="h6">Educação</Typography>
                            <Typography>Superior</Typography>
                            <Typography>Análise e Desenvolvimento de Sistemas</Typography>
                        </InfoBox>
                    </Grid>
                </Grid>
                <Box pt={5} maxWidth="md" textAlign="center" mx="auto">
                    <Typography variant="body1" color="textSecondary" >
                    Analista de Sistemas com experiência em Suporte a Usuários e Acesso remoto,
                    atuando na Manutenção de Sistemas de TI. Especialista em bancos de dados como
                    SQL Server e MySQL, com sólidos conhecimentos em SQL e Modelagem de dados.
                    Experiência na Instalação e Configuração de ERPs, além de desenvolvimento em
                    Java. Forte atuação em Análise e Desenvolvimento de soluções empresariais e
                    otimização de bancos de dados.
                    </Typography>
                </Box>
            </Container>
        </StyledAbout>
    );
};

export default About;
