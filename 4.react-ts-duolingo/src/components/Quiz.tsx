import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../redux/slices";

const Quiz = () => {
    const [result, setResult] = useState<Array<string>>([]);

    const [count, setCount] = useState<number>(0);
    
    const [ans, setAns] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { words } = useSelector((state: { root: StateType }) => state.root);


    const nextHandler = (): void => {
        setResult((prev) => ([...prev, ans]));
        setCount(prev => prev+1);
        setAns('');
    }

    useEffect(() => {
        if(count+1 > words.length) navigate('/result');
        dispatch(saveResult(result));
    }, [result]);
  
  return (
    <Container
        maxWidth='sm'
        sx={{
            padding: '1rem'
        }}
    >
        <Typography m={'2rem 0'}>Quiz</Typography>

        <Typography variant={'h3'}>
            { count + 1 } - {words[count]?.word}
        </Typography>

        <FormControl>
            <FormLabel
                sx={{
                    mt: '2rem',
                    mb: '1rem'
                }}
            >
                Meaning
            </FormLabel>
            <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
            {
                words[count]?.options.map((i, idx) => (
                    <FormControlLabel
                        value={i}
                        control={<Radio />}
                        label={i}
                        key={idx}
                    />
                ))
            }
            </RadioGroup>
        </FormControl>

        <Button
            sx={{
                margin: '3rem 0'
            }}
            variant='contained'
            fullWidth
            onClick={nextHandler}
            disabled={ans === ''}
        >
            {count === 7 ? 'Submit' : 'Next'}
        </Button>
    </Container>
  )
}

export default Quiz