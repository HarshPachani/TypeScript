import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useState } from "react";

const App = () => {
  // const [todos, setTodos] = useState<Array<TodoItemType>>([]);
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const [title, setTitle] = useState<TodoItemType['title']>('');

  const completeHandler = (id: TodoItemType['id']): void => {
    const newTodos: Array<TodoItemType> = todos.map(todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  
  const deleteHandler = (id: TodoItemType['id']): void => {
    const newTodos: Array<TodoItemType> = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (id: TodoItemType['id'], newTitle: TodoItemType['title']): void => {
    const newTodos: Array<TodoItemType> = todos.map(todo => {
      if(todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title, 
      isCompleted: false,
      id: String(Math.random()*1000),
    };
    setTodos(prev => ([...prev, newTodo]));
    setTitle('');
  };

  return (
    <Container maxWidth='sm' sx={{ height: '100vh' }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>


    <Stack height={'80%'} direction={'column'} spacing={'1rem'} p={'1rem'}>
      {
        todos.map(i => (
          <TodoItem 
            key={i.id} 
            todo={i} 
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))
      }
    </Stack>
    <TextField 
      fullWidth 
      label='New Task' 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === 'Enter' && title !== '')
          submitHandler();   
      }}
    />
    <Button 
      variant='contained' 
      fullWidth 
      sx={{ margin: '1rem 0' }} 
      onClick={submitHandler}
      disabled={title === ''}
    >Add</Button>
    </Container>
  )
}

export default App