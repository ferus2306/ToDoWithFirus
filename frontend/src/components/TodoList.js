import React, { useState } from 'react'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import { Container, Col, Row, Form } from 'react-bootstrap'


function TodoList() {

    const [todos, setTodos] = useState([
        {id: 8, task: "Read Peace and War by Leo Tolstoy", completed: false },
        {id: 9, task: "Participate in CodeCamp", completed: true },
        {id: 10, task: "Prepare dinner", completed: false }
    ]);

    const [checked, setCheckedComplete] = useState();
    const toggle = () => setCheckedComplete(!checked);



    const updateTodo = (todoId, newValue) => {
        console.log('update to do function')
        if (!newValue.task || /^\s*$/.test(newValue.task)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }



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
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const changeCheckComplete = id => {
        setCheckedComplete(true)
        console.log({checked})
        
    }


    return (
        <Container>
          <Row className="app d-flex justify-content-center">
                <Col className="todo-list">
                    <TodoForm className="" onSubmit={addTodo} />

                    <div className="d-flex justify-content-center py-4">
                        <Form.Check
                            checked={checked} onChange={toggle}
                            className="mx-2"
                            type="checkbox" label="Filter by Pending" 
                            onChange={toggle}                
                        />
                
                    </div>
                    
                    {todos.length < 1 &&
                        <h3 className="text-center">You have no items in To Do List.</h3>
                    }

                    <Todo
                        todos={todos}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        updateTodo={updateTodo}
                        checked={checked}
                     
                    />



                </Col>

                
          </Row>
        </Container>
    )
}

export default TodoList;

