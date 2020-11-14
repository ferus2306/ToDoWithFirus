import './App.css';
import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

//=============== Todo =============
function Todo({ todo, index, deleteTodo, editTodo }) {
  console.log(index);
  return (
    <Row className="todo py-2 px-4 border">
      <Col xs={2}>{index + 1}</Col>
      <Col >{todo.text}</Col>

      <Button
        className="mx-2"
        size="sm"
        variant="danger"
        onClick={() => {
          deleteTodo(index)
        }}>Delete</Button>
      

      <Button
        className="mx-2"
        size="sm"
        variant="warning"

        >Edit</Button>
    </Row>
  );
};


//=============== Form =============
function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        {/* <Form.Label>Add Item</Form.Label> */}
        <Form.Control
          
          type="text"
          placeholder="Enter To Do Item" 
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>

        <Button variant="primary" size="sm" type="submit">
            Add
        </Button>
    </Form>
  );
}

//=============== MAIN =============
function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn React" },
    { text: "Participate in CodeCamp" },
    { text: "Prepare dinner" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index != todoIndex);
    setTodos(newTodos);
  }



  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Row className="app d-flex justify-content-center">
            <Col xs={12} className="text-center py-4">TO DO LIST</Col>
            <Col className="todo-list">
              {todos.map((todo, index) => {
                console.log(index);
                return (
                  <Todo deleteTodo={deleteTodo} key={index} index={index} todo={todo}
                  />
                )
              })}
            </Col>
          </Row>
          <Row className="py-4">
            <Col><TodoForm addTodo={addTodo} /></Col>
          </Row>
        
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
