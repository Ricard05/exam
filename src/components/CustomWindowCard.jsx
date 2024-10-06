import React from 'react';
import Card from 'react-bootstrap/Card';

import { Button } from 'react-bootstrap';
export const CustomWindowCard = ({title, text, subtitle, handleShow}) => {
  return (

  <Card style={{
    backgroundColor: '#171520',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    color: '#fff'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '2px solid #f7d85c'
    }}>
      <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#f7d85c' }}>
        {title}
      </span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{
          border: 'none',
          backgroundColor: '#ff7edb',
          padding: '5px',
          borderRadius: '50%',
          marginRight: '5px'
        }}>
          <i style={{ color: 'red' }} className="fas fa-circle" />
        </button>
        <button style={{
          border: 'none',
          backgroundColor: '#61ff39',
          padding: '5px',
          borderRadius: '50%',
          marginRight: '5px'
        }}>
          <i style={{ color: 'red' }} className="fas fa-circle" />
        </button>
        <button onClick={handleShow} style={{
          border: 'none',
          backgroundColor: '#ff8b39',
          padding: '5px',
          borderRadius: '50%',
          marginRight: '5px'
        }}>
          <i style={{ color: 'green' }} className="fas fa-circle" />
        </button>
      </div>
    </div>
    <Card.Body>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        
<Button onClick={handleShow} style={{
          border: 'none',
          backgroundColor: '#ff8b39'
        }}>
        Ver mas
      </Button>
    </Card.Footer>
  </Card>
  );
};
