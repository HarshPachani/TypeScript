import { Button, Container, Stack, Typography } from "@mui/material"
import { String } from "lodash"
import { useNavigate } from "react-router-dom"

const languages = [
    {
        name: 'Japanese',
        code: 'ja'
    }, 
    {
        name: 'Hindi',
        code: 'hi'
    }, 
    {
        name: 'Spanish',
        code: 'es'
    }, 
    {
        name: 'French',
        code: 'fr'
    }, 
]

const Home = () => {
    const navigate = useNavigate();

    const languageSelectHandler = (language: string): void => {
        navigate(`/learn?language=${language}`);
    }
  return (
    <Container maxWidth={'sm'}>
        <Typography variant='h3' p='2rem' textAlign='center' >
            Welcome, Begin your journey of learning.
        </Typography>

        <Stack 
            direction={'row'} 
            spacing={'2rem'} 
            p='2rem' 
            alignItems='center' 
            justifyContent='center'
        >
            {languages.map(language => (
                <Button 
                    key={language.code} 
                    variant='contained'
                    onClick={() => languageSelectHandler(language.code)}
                >
                    {language.name}
                </Button>
            ))}
        </Stack>
        <Typography textAlign='center'>
            Choose one language from above
        </Typography>
    </Container>
  )
}

export default Home