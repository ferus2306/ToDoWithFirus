import React, { useState } from 'react'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import { Container, Col, Row, Form } from 'react-bootstrap'


function TodoList() {

    const [todos, setTodos] = useState([
        // { task: "Read Peace and War by Leo Tolstoy" },
        // { task: "Participate in CodeCamp" },
        // { task: "Prepare dinner" }
    ]);


    const updateTodo = (todoId, newValue) => {
        console.log('update to do function')
        if (!newValue.task || /^\s*$/.test(newValue.task)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }


    // function addTodo(todo) {
    //     setTodos([todo, ...todos]);
    // }


    const addTodo = todo => {
        console.log('Add todo')
        if (!todo.task || /^\s*$/.test(todo.task)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }

    const deleteTodo = (todoIndex) => {
        const newTodos = todos.filter((_, index) => index !== todoIndex);
        setTodos(newTodos);
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };




    return (
        <Container>
          <Row className="app d-flex justify-content-center">
                <Col className="todo-list">
                    <TodoForm className="" onSubmit={addTodo} />

                    <Form.Check type="checkbox" label="Filter by Pending"/>
                    <Form.Check type="checkbox" label="Filter by Complete"/>
                    

                    {todos.length < 1 &&
                        <h3 className="text-center">You have no items in To Do List.</h3>
                    }

                    <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} updateTodo={updateTodo} />
                </Col>
          </Row>
        </Container>
    )
}

export default TodoList;

