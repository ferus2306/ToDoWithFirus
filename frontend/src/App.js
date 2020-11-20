import './App.css';
import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import TodoList from './components/TodoList.js'




function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">        
        <Container>
          <Row className="app d-flex justify-content-center">
            <Col xs={12} className="text-center py-4">TO DO LIST</Col>
            <Col className="todo-list">
                <TodoList />
            </Col>







          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
