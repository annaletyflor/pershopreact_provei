  import React, { useState } from 'react';
  import { Form, Button, Container, Row, Col } from 'react-bootstrap';
  import api from '../Services/api.js';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './Clientes.css'

const Clientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Cliente:', formData);
    // Aqui você pode adicionar a lógica de envio de dados para o servidor
    await api.post("/Clientes", formData)
  };



  return (
    <Container>
      <h1 className="my-4">Cadastro de Clientes</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                placeholder="Digite o nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCPF">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
  
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite o email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                placeholder="Digite o telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
  
        {/* Novo campo para Endereço */}
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                name="endereco"
                placeholder="Digite o endereço"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
  
        {/* Novo campo para Verificado */}
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formVerificado" className="mb-3">
              <Form.Check
                type="checkbox"
                name="verificado"
                label="Verificado"
                checked={formData.verificado}
                onChange={(e) => handleChange({ target: { name: 'verificado', value: e.target.checked } })}
              />
            </Form.Group>
          </Col>
        </Row>
  
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
  };
  
  export default Clientes;