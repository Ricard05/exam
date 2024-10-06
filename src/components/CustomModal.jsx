import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

export const CustomModal = ({show, handleClose, window}) => {
  return (
      <Modal show={show} fullscreen={true} onHide={handleClose} >
        <Modal.Header style={{color: '#fff', backgroundColor: '#171520', borderColor: '#333'}}>
          <Modal.Title style={{color: '#f7d85c'}}>{window.title}</Modal.Title>
          
        <button onClick={handleClose} style={{
          border: 'none',
          backgroundColor: 'transparent',
          padding: '3px',
          borderRadius: '50%',
          marginRight: '5px'
        }}>

<svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#f7d85c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
        </button>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#262233'}}>

    <Container className="p-1">

 <Container fluid className="banner p-4" style={{backgroundColor: '#171520', borderRadius: '20px',}}>
      <Row className="align-items-center">
        <Col md={6} className="text-center"> {/* Ajusta el tamaño de la columna según sea necesario */}
          <h1 className="display-3 mb-4" style={{ fontWeight: 'bold', color: '#ff7edb'}}>{window.title1}</h1>
          <p className="lead">{window.text1}</p>
        </Col>
        <Col md={6}>
          <img
            src={window.im1}
            alt="Banner" 
            className="img-fluid" // Para que la imagen sea responsiva
          />
        </Col>
      </Row>
    </Container>
          <h2 className="display-6 mb-4 mt-5" style={{ fontWeight: 'bold', color: '#61ff39'}}>{window.title2}</h2>
          <p className="lead mb-4">{window.text2}</p>
          <img
            src={window.im2}
            alt="DDOS" 
            className="img-fluid" // Para que la imagen sea responsiva
          />

          <h2 className="display-6 mb-4 mt-5" style={{ fontWeight: 'bold', color: '#f3414e'}}>{window.title3}</h2>
          <p className="lead">{window.text3}</p>
          <h2 className="display-6 mb-4 mt-5" style={{ fontWeight: 'bold', color: '#5ccdf7'}}>{window.title4}</h2>
          <p className="lead">{window.text4}</p>
          <h2 className="display-6 mb-4 mt-5" style={{ fontWeight: 'bold', color: '#aa5cf7'}}>{window.title5}</h2>
          <p className="lead">{window.text5}</p>
    </Container>
        </Modal.Body>
      </Modal>
  );
};
