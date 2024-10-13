import {  Button, Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import projectPortfolioImage from "../../../../assets/images/project-portfolio.jpg";
import projectWebImage from "../../../../assets/images/project-associacao.jpg";
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: "50px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }));

    const ProjectCard = styled(Card)(({ theme }) => ({
        maxWidth: 345,
        margin: "15px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[3],
        transition: "background-color 0.3s ease",
        '&:hover': {
            backgroundColor: theme.palette.grey[800],    
        },   
    }));

    const projectList = [
        {
            title: "Meu Portfólio",
            period: "Out 2024 - Out 2024",
            image: projectPortfolioImage,
            description: "Portfólio desenvolvido com React + Typescript para disciplina de Front End.",
            githubLink: "https://github.com/dayannaclaudino/my-portfolio"
        },
        {
            title: "Sistema Web Associação",
            period: "Nov 2023 - Set 2024",
            image: projectWebImage, 
            description: "Sistema web para Associação Quilombola do Castainho, desenvolvido em Java e Spring Boot.",
            githubLink: "https://github.com/dayannaclaudino/gestaoassociacao"
        }
    ];

    return (
        <StyledProjects>
            <Container maxWidth="lg" id="projects-section">
                <Typography variant="h3" textAlign="center" color="primary.contrastText" gutterBottom>
                    Projetos
                </Typography>
                <Grid container justifyContent="center" spacing={3}>
                    {projectList.map((project, index) => (
                        <Grid key={index}>
                            <ProjectCard>
                                <CardContent>
                                    <Typography variant="h6" component="div" color="primary.contrastText">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="primary.contrastText">
                                        {project.period}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    alt={project.title}
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="primary.contrastText">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <Grid container display="flex" justifyContent="center" spacing={1} pb={2}> 
                                <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<GitHubIcon />}
                                        href={project.githubLink}
                                        target="_blank"
                                        sx={{ mt: 2 }}>
                                        Ver no GitHub
                                    </Button>
                                </Grid>
                            </Grid>
                            </ProjectCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
