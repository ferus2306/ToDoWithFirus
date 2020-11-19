import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import TodoForm from './TodoForm'


function Todo({ todos, deleteTodo, completeTodo, updateTodo }) {


  const [edit, setEdit] = useState({
    id: null,
    task: ''
  })

  const submitUpdate = task => {
    updateTodo(edit.id, task)
    setEdit({
      id: null,
      task: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }


  return todos.map((todo, index) => (
    <Row className="todo py-2 px-4 border" key={index}>
  
      <Col className={todo.isComplete ? 
      'todo-row complete' : 'todo-row'}>{todo.task}</Col>
      
      
      <Col className="d-flex justify-content-end">
        <Button className="mx-2"
          size="sm"
          variant="success"
          onClick={() => {
            completeTodo(todo.id)
          }}>Complete
        </Button>

        <Button
          className="mx-2"
          size="sm"
          variant="warning"
          onClick={() => {
            setEdit({ id: todo.id, value: todo.task })}}>Edit
        </Button>

        <Button
          className="mx-2"
          size="sm"
          variant="danger"
          onClick={() => {
            deleteTodo(index)
          }}>Delete
        </Button>     
      </Col>
    </Row>
  ));
};


export default Todo

