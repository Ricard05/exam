import { Container, Row, Col } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import {CustomWindowCard} from '../components/CustomWindowCard';
export const Home = () => {
  return (
    <>
 <Container fluid className="banner">
      <Row className="align-items-center">
        <Col md={6} className="text-center pl-2"> {/* Ajusta el tamaño de la columna según sea necesario */}
          <h1 className="display-4 mb-4" style={{ fontWeight: 'bold', color: '#ff7edb'}}>Seguridad de la Información</h1>
          <p className="lead">
            La seguridad de la información <span style={{ color: '#ff8b39', fontWeight: 'bold'}}>protege los datos contra accesos no autorizados,
            alteraciones o pérdidas</span>, garantizando su confidencialidad, integridad y disponibilidad.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://res.cloudinary.com/dko2qqtae/image/upload/v1728111817/arhwp5ivuhilj3nvwadu.png" 
            alt="Banner" 
            className="img-fluid" // Para que la imagen sea responsiva
          />
        </Col>
      </Row>
    </Container>
<CardGroup>
  <CustomWindowCard title="Sección 1: Ataques ciberneticos" text="Los ataques cibernéticos tienen como objetivo comprometer sistemas y redes, afectando tanto a individuos como a organizaciones. Ejemplos comunes incluyen ataques DDoS, que sobrecargan servidores, y el uso de botnets controladas por botmasters. El ransomware, como Wannacry y Petya, cifra datos y exige rescates. Ataques históricos como Stuxnet, diseñado para sabotear sistemas industriales, y Moonlight Maze, un caso de ciberespionaje, marcaron hitos importantes. Más recientemente, empresas como Equifax y Cam4 han sido víctimas de graves filtraciones de datos."  />
  <CustomWindowCard title="Sección 2: Confidencialidad de la informacion" text="La confidencialidad de la información se protege en México mediante leyes como la Ley General de Protección de Datos Personales y la Ley Federal de Datos Personales en Posesión de Particulares, que regulan el uso de datos. La Ley de Propiedad Industrial y la Ley Federal de Derechos de Autor protegen la propiedad intelectual. A nivel técnico, la criptografía simétrica y asimétrica, junto con el cifrado por bloques y flujo, aseguran los datos, mientras que el criptoanálisis busca vulnerar estos métodos."/>
  <CustomWindowCard title="Sección 3: Principios de seguridad de la información" text="Los principios de seguridad de la información garantizan la protección de los datos. La confidencialidad asegura que solo las personas autorizadas accedan a la información. La disponibilidad garantiza que los datos estén accesibles cuando se necesiten. La integridad protege la exactitud y consistencia de los datos. La autenticación verifica la identidad de los usuarios, y el control de acceso regula quién puede acceder a los recursos. La accesibilidad se enfoca en que los sistemas sean utilizables por todos los usuarios autorizados." />
</CardGroup>
    </>
  );
};
