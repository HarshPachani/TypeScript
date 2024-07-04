"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const feature_1 = require("../utils/feature");
const react_redux_1 = require("react-redux");
const slices_1 = require("../redux/slices");
const Loader_1 = __importDefault(require("./Loader"));
const Learning = () => {
    var _a, _b;
    const [count, setCount] = (0, react_1.useState)(0);
    const params = (0, react_router_dom_1.useSearchParams)()[0].get('language');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { loading, error, words } = (0, react_redux_1.useSelector)((state) => state.root);
    const nextHandler = () => {
        setCount((prev) => prev + 1);
    };
    (0, react_1.useEffect)(() => {
        dispatch((0, slices_1.getWordsReqeust)());
        (0, feature_1.translateWords)(params || 'hi')
            .then((arr) => {
            dispatch((0, slices_1.getWordsSuccess)(arr));
        })
            .catch(err => {
            dispatch((0, slices_1.getWordsFail)(err));
        });
        if (error) {
            alert(error);
            dispatch((0, slices_1.clearState)());
        }
    }, []);
    if (loading)
        return <Loader_1.default />;
    return (<material_1.Container maxWidth='sm' sx={{
            padding: '1rem'
        }}>
        <material_1.Button onClick={count === 0 ? () => navigate('/') : () => setCount(prev => prev - 1)}>
            <icons_material_1.ArrowBack />
        </material_1.Button>

        <material_1.Typography m='2rem 0'>Learning Made Easy</material_1.Typography>
        <material_1.Stack direction={'row'} spacing='1rem'>
            <material_1.Typography variant='h4'>{count + 1} - {(_a = words[count]) === null || _a === void 0 ? void 0 : _a.word}</material_1.Typography>
            <material_1.Typography variant='h4' color='blue'> : {(_b = words[count]) === null || _b === void 0 ? void 0 : _b.meaning}</material_1.Typography>
            <material_1.Button sx={{
            borderRadius: '50%'
        }}>
                <icons_material_1.VolumeUp />
            </material_1.Button>
        </material_1.Stack>

        <material_1.Button sx={{
            margin: '3rem 0'
        }} variant='contained' fullWidth onClick={count === 7 ? () => navigate('/quiz') : nextHandler}>
            {count === 7 ? 'Test' : 'Next'}
        </material_1.Button>
    </material_1.Container>);
};
exports.default = Learning;
