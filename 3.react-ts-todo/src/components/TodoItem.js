"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const react_1 = require("react");
const TodoItem = ({ todo, completeHandler, deleteHandler, editHandler }) => {
    const [editActive, setEditActive] = (0, react_1.useState)(false);
    const [textVal, setTextVal] = (0, react_1.useState)(todo.title);
    return (<material_1.Paper sx={{ padding: '1rem' }}>
        <material_1.Stack direction={'row'} alignItems={'center'}>
            {editActive ?
            <material_1.TextField value={textVal} onChange={(e) => setTextVal(e.target.value)} onKeyDown={(e) => {
                    if (e.key === 'Enter' && textVal !== '') {
                        editHandler(todo.id, textVal);
                        setEditActive(false);
                    }
                }}/>
            :
                <material_1.Typography marginRight={'auto'}>{todo.title}</material_1.Typography>}
            <material_1.Checkbox onChange={() => completeHandler(todo.id)} checked={todo.isCompleted}/>
            <material_1.Button>
                {editActive ?
            <icons_material_1.Done onClick={() => {
                    if (textVal !== '') {
                        editHandler(todo.id, textVal);
                        setEditActive(false);
                    }
                }}/>
            :
                <icons_material_1.Edit onClick={() => setEditActive(prev => !prev)}/>}
            </material_1.Button>
            <material_1.Button onClick={() => deleteHandler(todo.id)}><icons_material_1.Delete /></material_1.Button>
        </material_1.Stack>
    </material_1.Paper>);
};
exports.default = TodoItem;
