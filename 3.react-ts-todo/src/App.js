"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const TodoItem_1 = __importDefault(require("./components/TodoItem"));
const react_1 = require("react");
const App = () => {
    // const [todos, setTodos] = useState<Array<TodoItemType>>([]);
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [title, setTitle] = (0, react_1.useState)('');
    const completeHandler = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    const deleteHandler = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };
    const editHandler = (id, newTitle) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.title = newTitle;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    const submitHandler = () => {
        const newTodo = {
            title,
            isCompleted: false,
            id: String(Math.random() * 1000),
        };
        setTodos(prev => ([...prev, newTodo]));
        setTitle('');
    };
    return (<material_1.Container maxWidth='sm' sx={{ height: '100vh' }}>
      <material_1.AppBar position='static'>
        <material_1.Toolbar>
          <material_1.Typography>
            Todo App
          </material_1.Typography>
        </material_1.Toolbar>
      </material_1.AppBar>


    <material_1.Stack height={'80%'} direction={'column'} spacing={'1rem'} p={'1rem'}>
      {todos.map(i => (<TodoItem_1.default key={i.id} todo={i} completeHandler={completeHandler} deleteHandler={deleteHandler} editHandler={editHandler}/>))}
    </material_1.Stack>
    <material_1.TextField fullWidth label='New Task' value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter' && title !== '')
                submitHandler();
        }}/>
    <material_1.Button variant='contained' fullWidth sx={{ margin: '1rem 0' }} onClick={submitHandler} disabled={title === ''}>Add</material_1.Button>
    </material_1.Container>);
};
exports.default = App;
