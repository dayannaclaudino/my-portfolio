import { Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Button from "@mui/material/Button";

const Skills = () => {

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: "50px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }));

    const SkillButton = styled(Button)(({ theme }) => ({
        margin: "5px",
        padding: "10px 20px",
        borderRadius: "3px",
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textTransform: "none",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
        },
    }));

    const skillsList = [
        "Suporte a Usuários",
        "Manutenção de Sistemas",
        "Implantação",
        "Banco de Dados",
        "SQL",
        "Modelagem de dados",
        "Java",
        "ERP",
        "Spring Boot",
        "Git",
        "CSS",
        "HTML",
        "Resolução de Problemas",
        "Capacidade analítica",
    ];

    return (
        <StyledSkills>
            <Container maxWidth="md" id="skills-section">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Skills
                </Typography>
                <Grid container justifyContent="center">
                    {skillsList.map((skill, index) => (
                        <Grid key={index}>
                            <SkillButton variant="outlined">
                                {skill}
                            </SkillButton>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
