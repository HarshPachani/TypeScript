"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
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
];
const Home = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const languageSelectHandler = (language) => {
        navigate(`/learn?language=${language}`);
    };
    return (<material_1.Container maxWidth={'sm'}>
        <material_1.Typography variant='h3' p='2rem' textAlign='center'>
            Welcome, Begin your journey of learning.
        </material_1.Typography>

        <material_1.Stack direction={'row'} spacing={'2rem'} p='2rem' alignItems='center' justifyContent='center'>
            {languages.map(language => (<material_1.Button key={language.code} variant='contained' onClick={() => languageSelectHandler(language.code)}>
                    {language.name}
                </material_1.Button>))}
        </material_1.Stack>
        <material_1.Typography textAlign='center'>
            Choose one language from above
        </material_1.Typography>
    </material_1.Container>);
};
exports.default = Home;
