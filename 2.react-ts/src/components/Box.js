"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Box = ({ label, value, setter }) => {
    return (<form>
        <label>{label}</label>
        <input type="text" value={value} onChange={(e) => setter(e.target.value)}/>
        <button>Submit</button>
    </form>);
};
exports.default = Box;
