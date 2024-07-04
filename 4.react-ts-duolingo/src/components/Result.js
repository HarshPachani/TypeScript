"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const slices_1 = require("../redux/slices");
const feature_1 = require("../utils/feature");
const Result = () => {
    const { words, result } = (0, react_redux_1.useSelector)((state) => state.root);
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const correctAns = (0, feature_1.countMatchingElements)(result, words.map((i) => i.meaning));
    const percentage = (correctAns / words.length) * 100;
    const resetHandler = () => {
        navigate("/");
        dispatch((0, slices_1.clearState)());
    };
    return (<material_1.Container maxWidth={"sm"}>
      <material_1.Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </material_1.Typography>
      <material_1.Typography m={"1rem"} variant="h6">
        You got {correctAns} right out of {words === null || words === void 0 ? void 0 : words.length}
      </material_1.Typography>

      <material_1.Stack direction={"row"} justifyContent={"space-evenly"}>
        <material_1.Stack>
          <material_1.Typography m={"1rem 0"} variant="h5">
            Your Ans
          </material_1.Typography>
          <material_1.List>
            {result.map((i, idx) => (<material_1.ListItem key={idx}>
                {idx + 1} - {i}
              </material_1.ListItem>))}
          </material_1.List>
        </material_1.Stack>
        <material_1.Stack>
          <material_1.Typography m={"1rem 0"} variant="h5">
            Correct Ans
          </material_1.Typography>
          <material_1.List>
            {words === null || words === void 0 ? void 0 : words.map((i, idx) => (<material_1.ListItem key={idx}>
                {idx + 1} - {i.meaning}
              </material_1.ListItem>))}
          </material_1.List>
        </material_1.Stack>
      </material_1.Stack>

      <material_1.Typography m={"1rem"} variant="h5" color={percentage > 50 ? "green" : "red"}>
        {percentage > 50 ? "Pass" : "Fail"}
      </material_1.Typography>

      <material_1.Button onClick={resetHandler} sx={{ margin: "1rem" }} variant="contained">
        Reset
      </material_1.Button>
    </material_1.Container>);
};
exports.default = Result;
