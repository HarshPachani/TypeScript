"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const slices_1 = require("../redux/slices");
const Quiz = () => {
    var _a, _b;
    const [result, setResult] = (0, react_1.useState)([]);
    const [count, setCount] = (0, react_1.useState)(0);
    const [ans, setAns] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { words } = (0, react_redux_1.useSelector)((state) => state.root);
    const nextHandler = () => {
        setResult((prev) => ([...prev, ans]));
        setCount(prev => prev + 1);
        setAns('');
    };
    (0, react_1.useEffect)(() => {
        if (count + 1 > words.length)
            navigate('/result');
        dispatch((0, slices_1.saveResult)(result));
    }, [result]);
    return (<material_1.Container maxWidth='sm' sx={{
            padding: '1rem'
        }}>
        <material_1.Typography m={'2rem 0'}>Quiz</material_1.Typography>

        <material_1.Typography variant={'h3'}>
            {count + 1} - {(_a = words[count]) === null || _a === void 0 ? void 0 : _a.word}
        </material_1.Typography>

        <material_1.FormControl>
            <material_1.FormLabel sx={{
            mt: '2rem',
            mb: '1rem'
        }}>
                Meaning
            </material_1.FormLabel>
            <material_1.RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
            {(_b = words[count]) === null || _b === void 0 ? void 0 : _b.options.map((i, idx) => (<material_1.FormControlLabel value={i} control={<material_1.Radio />} label={i} key={idx}/>))}
            </material_1.RadioGroup>
        </material_1.FormControl>

        <material_1.Button sx={{
            margin: '3rem 0'
        }} variant='contained' fullWidth onClick={nextHandler} disabled={ans === ''}>
            {count === 7 ? 'Submit' : 'Next'}
        </material_1.Button>
    </material_1.Container>);
};
exports.default = Quiz;
