import React, { useState, useEffect, useRef } from "react";
import { Form, Button, } from 'react-bootstrap'
// import { v4 as uuidv4 } from 'uuid';

function TodoForm( props ) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null)


    useEffect(() => {
        inputRef.current.focus()
    })


        
    function handleTaskInputChange(e) {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            // id: uuidv4(),
            id: Math.floor(Math.random() * 10000),
            task: input
        });

        setInput('')
    }

    return (
        <Form className="my-3" onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
            placeholder="Add a todo"
            name="text"
            type="text"
            value={input}
            onChange={handleTaskInputChange}
            ref={inputRef}
            />
            </Form.Group>
        
            <Button variant="primary" size="sm" type="submit">
                Add
            </Button>
        </Form>
  );
}


export default TodoForm

