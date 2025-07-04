import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { translateWords } from "../utils/feature";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getWordsFail, getWordsReqeust, getWordsSuccess } from "../redux/slices";
import Loader from "./Loader";

const Learning = () => {
    const [count, setCount] = useState<number>(0);
    const params = useSearchParams()[0].get('language') as LangType;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, words } = useSelector((state: { root: StateType }) => state.root);

    const nextHandler = (): void => {
        setCount((prev) => prev+1);
    }

    useEffect(() => {
        dispatch(getWordsReqeust());
        translateWords(params || 'hi')
            .then((arr) => {
                dispatch(getWordsSuccess(arr));
            })
            .catch(err => {
                dispatch(getWordsFail(err))
            });

        if(error) {
            alert(error);
            dispatch(clearState());
        }
    }, []);

    if (loading) return <Loader />;

  return (
    <Container maxWidth='sm' sx={{
        padding: '1rem'
    }}>
        <Button onClick={count === 0 ? () => navigate('/') : () => setCount(prev => prev-1)}>
            <ArrowBack />
        </Button>

        <Typography m='2rem 0'>Learning Made Easy</Typography>
        <Stack direction={'row'} spacing='1rem'>
            <Typography variant='h4'>{ count + 1 } - {words[count]?.word}</Typography>
            <Typography variant='h4' color='blue'> : {words[count]?.meaning}</Typography>
            <Button
                sx={{
                    borderRadius: '50%'
                }}
            >
                <VolumeUp />
            </Button>
        </Stack>

        <Button
            sx={{
                margin: '3rem 0'
            }}
            variant='contained'
            fullWidth
            onClick={count === 7 ? () => navigate('/quiz') : nextHandler}
        >
            {count === 7 ? 'Test' : 'Next'}
        </Button>
    </Container>
  )
}

export default Learning