"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const styles = {
    color: 'white',
    margin: '0.5rem',
    textDecoration: 'none'
};
const Header = () => {
    return (<material_1.AppBar position="static">
        <material_1.Toolbar>
            <material_1.Typography variant='h5' mr={'auto'} textTransform={'uppercase'}>Luolingo</material_1.Typography>
            <react_router_dom_1.Link to='/' style={styles}>Home</react_router_dom_1.Link>
            <react_router_dom_1.Link to='/login' style={styles}>Login</react_router_dom_1.Link>
        </material_1.Toolbar>
    </material_1.AppBar>);
};
exports.default = Header;
