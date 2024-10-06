import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { CustomWindowCard } from '../components/CustomWindowCard';
import { CustomModal } from '../components/CustomModal';

export const Section3 = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleShow = (item) => {
    setShow(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItem({});
  };

  const data = [

{
  title: "Accesibilidad",
  title1: "Definición",
  title2: "Importancia",
  title3: "Aspectos Clave",
  title4: "Desafíos",
  title5: "Mejoras",
  text: "La accesibilidad en la seguridad de la información se refiere a garantizar que los usuarios autorizados puedan acceder a los datos y sistemas cuando lo necesiten. Este principio es fundamental para el funcionamiento efectivo de las organizaciones.",
  text1: "La accesibilidad es el principio que asegura que la información y los recursos estén disponibles para aquellos que tienen el derecho de acceder a ellos. Esto significa que, además de proteger la información de accesos no autorizados, las organizaciones deben implementar mecanismos que permitan a los usuarios autorizados acceder a la información necesaria sin barreras innecesarias.",
  text2: "La importancia de la accesibilidad radica en que, si bien es crucial proteger la información, también es vital que los usuarios puedan acceder a ella para llevar a cabo sus funciones. Sin accesibilidad, la información se convierte en un recurso inservible, lo que puede afectar la productividad y la toma de decisiones en las organizaciones.",
  text3: "Aspectos clave de la accesibilidad incluyen la usabilidad de los sistemas, la formación de los usuarios para que sepan cómo acceder a la información, y la implementación de tecnologías que faciliten el acceso, como accesos remotos y herramientas de búsqueda. La accesibilidad también debe considerarse en el diseño de políticas de seguridad y en la arquitectura de los sistemas.",
  text4: "Los desafíos para mantener la accesibilidad incluyen la necesidad de equilibrar el acceso con la seguridad, ya que un acceso excesivo puede conducir a vulnerabilidades. Además, las interrupciones en los servicios o problemas técnicos pueden afectar la accesibilidad de los datos y sistemas, impidiendo que los usuarios cumplan con sus tareas.",
  text5: "Para mejorar la accesibilidad, las organizaciones deben realizar evaluaciones regulares de sus sistemas y procesos, asegurando que sean intuitivos y fáciles de usar. También es importante proporcionar formación y apoyo a los usuarios, así como implementar redundancias y planes de recuperación ante desastres que aseguren que la información esté siempre disponible cuando se necesite.",
  im1: "https://edudigital.tech/pluginfile.php/1/local_mb2builder/images/App%20development.gif",
  im2: "https://mundocontact.com/wp-content/uploads/2019/08/cia.jpg"
},

{
  title: "Confidencialidad",
  title1: "Definición",
  title2: "Importancia",
  title3: "Métodos de Protección",
  title4: "Regulaciones",
  title5: "Desafíos",
  text: "La confidencialidad es un principio fundamental de la seguridad de la información que se refiere a proteger la información sensible de accesos no autorizados, garantizando que solo las personas autorizadas puedan acceder a ella.",
  text1: "La confidencialidad implica asegurar que la información se mantenga oculta y accesible solo para aquellos que tienen permiso para verla. Esto es esencial en entornos donde se maneja información sensible, como datos personales, financieros o estratégicos, ya que una violación de la confidencialidad puede tener consecuencias legales y reputacionales graves.",
  text2: "La importancia de la confidencialidad radica en su capacidad para proteger la privacidad de individuos y organizaciones. La violación de la confidencialidad no solo puede resultar en la pérdida de confianza por parte de los clientes y socios, sino que también puede acarrear sanciones legales en virtud de diversas normativas y regulaciones que protegen la información personal.",
  text3: "Los métodos de protección de la confidencialidad incluyen el cifrado de datos, que convierte la información en un formato ilegible para usuarios no autorizados, y el uso de controles de acceso que restringen quién puede ver qué información. Además, se deben implementar políticas y procedimientos que definan claramente quién tiene acceso a qué datos y cómo se pueden manejar.",
  text4: "Las regulaciones, como la Ley General de Protección de Datos Personales en México y el Reglamento General de Protección de Datos de la Unión Europea, establecen requisitos claros para garantizar la confidencialidad de la información personal. Cumplir con estas normativas es esencial para evitar sanciones y proteger la reputación de la organización.",
  text5: "Los desafíos en la protección de la confidencialidad incluyen la evolución de las amenazas cibernéticas, como el phishing y el malware, que buscan obtener acceso no autorizado a la información. Además, los empleados pueden ser un riesgo, ya que el manejo inadecuado de datos sensibles puede dar lugar a violaciones de la confidencialidad. Por lo tanto, es crucial realizar capacitaciones continuas y auditorías de seguridad para garantizar el cumplimiento de las políticas.",
  im1: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnF2NnJobWhieXZ4dzBpeHRmM3hhcTNwMGZ3bTJqbmduYXFtdXhwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1XGRazAbrOJnNu9i/giphy.webp",
  im2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihMT0SZbmRHzO0hkVwiHlLHQ10gzx6VwwuT_NaC8DG9WKeRRc7OWrFL-Zn-nEPvbvT6tNB75q64GPAOUATxYGysQE-eHV5AYVy1WW4bef8t6tYhai8BAME3uTiomtSaBJADnlha36TbDT_/s1600/confidencial.png"
},

{
  title: "Disponibilidad",
  title1: "Definición",
  title2: "Importancia",
  title3: "Aspectos Técnicos",
  title4: "Estrategias de Mantenimiento",
  title5: "Desafíos",
  text: "La disponibilidad se refiere a la garantía de que la información y los sistemas estén accesibles y operativos cuando los usuarios autorizados lo necesiten. Es esencial para el funcionamiento continuo de las organizaciones.",
  text1: "La disponibilidad es un principio fundamental de la seguridad de la información que garantiza que los sistemas y datos estén siempre accesibles para los usuarios autorizados. Esto incluye la protección contra fallos de hardware, software y otros eventos que puedan interrumpir el acceso a la información necesaria para llevar a cabo las operaciones diarias.",
  text2: "La importancia de la disponibilidad radica en su impacto directo en la productividad y eficiencia de las organizaciones. Si los sistemas no están disponibles, las operaciones pueden verse interrumpidas, lo que podría resultar en pérdidas económicas y afectar la confianza de los clientes. Por lo tanto, es vital garantizar que la información y los servicios estén disponibles en todo momento.",
  text3: "Aspectos técnicos de la disponibilidad incluyen la implementación de infraestructura redundante, que asegura que existan copias de los sistemas y datos críticos en caso de fallos. Además, la realización de copias de seguridad regulares y el uso de soluciones de recuperación ante desastres son esenciales para garantizar la disponibilidad de los datos.",
  text4: "Las estrategias de mantenimiento, como el monitoreo continuo de sistemas, la actualización de software y hardware, y la planificación de mantenimiento preventivo, son vitales para asegurar que los sistemas permanezcan operativos. Asimismo, es importante establecer un plan de respuesta a incidentes que permita reaccionar rápidamente ante cualquier interrupción.",
  text5: "Los desafíos para mantener la disponibilidad incluyen desastres naturales, ciberataques y fallos técnicos. Las organizaciones deben estar preparadas para enfrentar estos riesgos mediante la creación de un plan de continuidad del negocio que detalle cómo se gestionarán las interrupciones y se restaurarán los servicios lo más rápido posible.",
  im1: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTE5NzVjczdkYm9vamMwZ3p5bG9jbjcyeG0wdW9kdTk2cWY0djB4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bKj0qEKTVBdF2o5Dgn/giphy.webp",
  im2: "https://i0.wp.com/www.altadisponibilidadlogitek.com/wp-content/uploads/alta_disponibilidad_y_ciberseguridad.png"
},

{
  title: "Autenticación",
  title1: "Definición",
  title2: "Importancia",
  title3: "Métodos de Autenticación",
  title4: "Desafíos",
  title5: "Mejoras",
  text: "La autenticación es el proceso mediante el cual se verifica la identidad de un usuario, dispositivo o sistema antes de concederle acceso a los recursos. Es un componente clave de la seguridad de la información.",
  text1: "La autenticación se define como el mecanismo utilizado para confirmar la identidad de un usuario o entidad antes de permitirles acceder a un sistema o a información sensible. Este proceso puede incluir el uso de contraseñas, tarjetas inteligentes, biometría, y otros métodos que aseguran que solo las personas autorizadas puedan acceder a los recursos.",
  text2: "La importancia de la autenticación radica en su capacidad para prevenir accesos no autorizados a sistemas y datos sensibles. Sin un proceso de autenticación robusto, las organizaciones están en riesgo de sufrir violaciones de seguridad que pueden comprometer la confidencialidad, integridad y disponibilidad de la información.",
  text3: "Los métodos de autenticación incluyen la autenticación de un solo factor, que normalmente implica el uso de contraseñas; la autenticación de múltiples factores (MFA), que combina dos o más métodos de verificación para aumentar la seguridad; y la autenticación biométrica, que utiliza características físicas del usuario, como huellas dactilares o reconocimiento facial, para confirmar su identidad.",
  text4: "Los desafíos en el proceso de autenticación incluyen la gestión de contraseñas, que a menudo son débiles o reutilizadas, así como la resistencia de los usuarios a adoptar métodos de autenticación más seguros, como la MFA. Además, los ataques de phishing y malware están diseñados para eludir la autenticación, lo que representa un riesgo constante.",
  text5: "Para mejorar la autenticación, las organizaciones deben implementar políticas de contraseñas sólidas, fomentar el uso de la autenticación de múltiples factores y proporcionar formación a los usuarios sobre la importancia de mantener seguras sus credenciales. Además, es crucial realizar auditorías regulares para identificar y mitigar vulnerabilidades en el proceso de autenticación.",
  im1: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJvYjU0M3Fkdm1nZzB0azdjdHkwODRyMDhwcXQ4MTluMjN5ZDdnMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdQ1IynzclJldUQ/giphy.webp",
  im2: "https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/hubfs/New_Avast_Academy/how_does_2fa_two_factor_authentication_work_academy/Academy-2FA.png?width=1320&name=Academy-2FA.png"
},

{
  title: "Integridad",
  title1: "Definición",
  title2: "Importancia",
  title3: "Métodos de Protección",
  title4: "Desafíos",
  title5: "Mejoras",
  text: "La integridad se refiere a la protección de la información contra modificaciones no autorizadas, asegurando que los datos se mantengan precisos y confiables a lo largo del tiempo.",
  text1: "La integridad se define como la propiedad de la información que garantiza que los datos sean precisos y no hayan sido alterados de manera no autorizada. Esto es crucial en la gestión de información, ya que cualquier cambio no autorizado puede comprometer la validez de los datos y afectar la toma de decisiones basada en ellos.",
  text2: "La importancia de la integridad radica en su papel fundamental en la confianza de los sistemas de información. Los datos que han sido comprometidos o alterados pueden llevar a errores graves, problemas legales y pérdidas financieras. Por lo tanto, garantizar la integridad de la información es esencial para mantener la confianza de los usuarios y la reputación de la organización.",
  text3: "Los métodos de protección de la integridad incluyen el uso de sumas de verificación y hashes, que permiten detectar modificaciones en los datos, así como controles de acceso que limitan quién puede modificar la información. También es importante implementar políticas y procedimientos que definan cómo se debe manejar la información para preservar su integridad.",
  text4: "Los desafíos para mantener la integridad de la información incluyen el riesgo de ataques cibernéticos que buscan alterar datos, errores humanos que pueden resultar en modificaciones accidentales, y problemas en el software que pueden afectar el manejo de los datos. Además, la falta de formación en el manejo de la información puede llevar a un compromiso de la integridad.",
  text5: "Para mejorar la integridad, las organizaciones deben establecer políticas claras sobre el manejo de datos, realizar auditorías regulares para detectar anomalías y fomentar una cultura de responsabilidad en la gestión de la información. La implementación de tecnologías que proporcionen seguimiento y control sobre los cambios en los datos también puede contribuir a mantener su integridad.",
  im1: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWp5NmMyc3F4eG92Z3Q4aGcyZTMyano0bTZobGR3YjRhb2c2YnppZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11kEuHSQAXXiGQ/giphy.webp",
  im2: "https://static.wikia.nocookie.net/sistemadeinformacionadministrativa/images/a/ab/Integridad.png/revision/latest?cb=20181004165956&path-prefix=es"
},

{
  title: "Control de Acceso",
  title1: "Definición",
  title2: "Importancia",
  title3: "Tipos de Control de Acceso",
  title4: "Mejores Prácticas",
  title5: "Desafíos",
  text: "El control de acceso se refiere a las políticas y tecnologías utilizadas para limitar y gestionar el acceso a información y sistemas, asegurando que solo los usuarios autorizados puedan acceder a recursos específicos.",
  text1: "El control de acceso es un componente crítico de la seguridad de la información que establece quién puede acceder a qué recursos y bajo qué condiciones. Esto implica definir roles y permisos de usuarios, así como establecer procedimientos para la autenticación y autorización de acceso.",
  text2: "La importancia del control de acceso radica en su capacidad para proteger los activos de información sensibles y garantizar que solo las personas adecuadas tengan acceso a los recursos necesarios para realizar sus funciones. Sin un control de acceso adecuado, las organizaciones se exponen a riesgos significativos, incluidas violaciones de datos y daños a la reputación.",
  text3: "Los tipos de control de acceso incluyen el control de acceso discrecional (DAC), donde los propietarios de los datos deciden quién tiene acceso; el control de acceso basado en roles (RBAC), que asigna permisos basados en los roles de los usuarios dentro de la organización; y el control de acceso basado en atributos (ABAC), que utiliza atributos de usuario y recursos para determinar el acceso.",
  text4: "Las mejores prácticas en el control de acceso incluyen la implementación de políticas de menor privilegio, donde los usuarios solo reciben los permisos necesarios para realizar su trabajo, la revisión regular de permisos de acceso para asegurar que sean apropiados, y la capacitación de los usuarios sobre la importancia del control de acceso y las políticas de seguridad de la información.",
  text5: "Los desafíos en la implementación de un control de acceso efectivo incluyen la gestión de usuarios y permisos a medida que las organizaciones crecen y cambian, la resistencia de los usuarios a los controles que perciben como restrictivos, y la evolución de las amenazas que buscan eludir los mecanismos de control de acceso. Es fundamental contar con un enfoque proactivo para adaptar y mejorar continuamente las políticas y tecnologías de control de acceso.",
  im1: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZ0b21xajQ3NThjZHNkY3gxejRwdWRxOGdkaWl2d3BubGQyNjkzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G4E2L5v6y32jNLcIAM/giphy.webp",
  im2: "https://ita.tech/wp-content/uploads/2024/03/Componentes-de-control-de-acceso-fisico-1-1.webp"
}
  ];

  const chunkedData = Array(Math.ceil(data.length / 3))
    .fill()
    .map((_, index) => data.slice(index * 3, index * 3 + 3));

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <CustomModal show={show} handleClose={handleClose} window={selectedItem} />
          {chunkedData.map((dataChunk, index) => (
            <CardGroup key={index}>
              {dataChunk.map((item, index) => (
                <CustomWindowCard
                  key={index}
                  handleShow={() => handleShow(item)}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </CardGroup>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
