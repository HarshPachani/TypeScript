"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const react_1 = require("react");
const Loader_1 = __importDefault(require("./components/Loader"));
const Home = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Home"))));
const Learning = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Learning"))));
const Quiz = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Quiz"))));
const Result = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./components/Result"))));
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
      <Header_1.default />
      <react_1.Suspense fallback={<Loader_1.default />}>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path='/' element={<Home />}/>
          <react_router_dom_1.Route path='/learn' element={<Learning />}/>
          <react_router_dom_1.Route path='/quiz' element={<Quiz />}/>
          <react_router_dom_1.Route path='/result' element={<Result />}/>
        </react_router_dom_1.Routes>
      </react_1.Suspense>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
