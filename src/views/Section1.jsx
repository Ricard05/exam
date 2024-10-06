import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { CustomWindowCard } from '../components/CustomWindowCard';
import { CustomModal } from '../components/CustomModal';

export const Section1 = () => {
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
      title: "DDoS",
      text: "Un ataque DDoS intenta interrumpir la disponibilidad de un servicio o red abrumándolo con un tráfico masivo desde una red de computadoras comprometidas. Esto provoca que el objetivo se vuelva inaccesible para los usuarios legítimos, generando pérdidas económicas y daños a la reputación. La mitigación incluye el uso de firewalls y servicios especializados.",
      title1: "Definición",
      title2: "Método",
      title3: "Tipos de ataques",
      title4: "Impacto financiero",
      title5: "Medidas de defensa",
      text1: "Un ataque DDoS es un intento malicioso de interrumpir el funcionamiento normal de un servicio, servidor o red, haciéndolos inaccesibles para los usuarios legítimos. Este tipo de ataque se basa en la saturación de la capacidad de respuesta del sistema objetivo, lo que impide que pueda atender solicitudes válidas. La naturaleza distribuida del ataque, donde múltiples sistemas (bots) participan en la generación del tráfico malicioso, lo hace más difícil de mitigar.",
      text2: "El ataque DDoS se lleva a cabo mediante una red de computadoras comprometidas, conocidas como bots o zombies. Estas máquinas pueden ser dispositivos personales, servidores o cualquier otro equipo conectado a Internet que haya sido infectado con malware. Los atacantes suelen utilizar un botmaster para controlar esta red de bots y coordinar el ataque. Al emitir un comando desde una ubicación central, los bots inundan el sistema objetivo con una avalancha de tráfico, lo que consume su ancho de banda y recursos de procesamiento.",
      text3: "Existen varios tipos de ataques DDoS, cada uno utilizando diferentes métodos para sobrecargar los recursos del objetivo. Algunos de los más comunes incluyen ataques de inundación de TCP, que envían grandes cantidades de paquetes TCP SYN para agotar las conexiones disponibles del servidor, impidiendo que maneje solicitudes legítimas; ataques de inundación UDP, donde los atacantes envían paquetes UDP a puertos aleatorios, provocando que el servidor objetivo intente responder a cada paquete, consumiendo recursos y ancho de banda; ataques SYN flood, que son un tipo específico de ataque TCP que envía un número masivo de paquetes SYN para iniciar conexiones, dejando el servidor esperando respuestas que nunca llegan, lo que puede agotar su capacidad de manejo de conexiones; y ataques de amplificación, en los cuales los atacantes envían solicitudes pequeñas a un servidor vulnerable, que a su vez responde con respuestas mucho más grandes a la dirección IP del objetivo, amplificando así el tráfico que se dirige al mismo. Estos métodos pueden ser devastadores para los sistemas afectados, ya que consumen recursos, saturan el ancho de banda y dificultan la capacidad del servidor para manejar solicitudes legítimas.",
      text4: "Los ataques DDoS pueden tener consecuencias financieras devastadoras para las empresas. La interrupción del servicio no solo provoca la pérdida de ingresos debido a la inactividad del sitio web o servicio, sino que también afecta la reputación de la marca y la confianza del cliente. Las empresas pueden enfrentar gastos adicionales relacionados con la mitigación del ataque, como la implementación de soluciones de seguridad avanzadas y la contratación de expertos en ciberseguridad. Además, los costos relacionados con la pérdida de clientes y el daño a la reputación pueden persistir mucho después de que se haya mitigado el ataque.",
      text5: "Para protegerse contra los ataques DDoS, las organizaciones implementan diversas estrategias y tecnologías. Algunas de las medidas más efectivas incluyen sistemas de detección de intrusiones (IDS), que son herramientas que monitorizan el tráfico de red en tiempo real y pueden identificar patrones de ataque, permitiendo a los administradores reaccionar rápidamente; soluciones de mitigación en la nube, como los servicios de Cloudflare o Akamai, que ofrecen protección DDoS a través de sus redes distribuidas, lo que permite filtrar el tráfico malicioso antes de que alcance el servidor de la empresa; redes de entrega de contenido (CDN), que almacenan en caché contenido en múltiples ubicaciones geográficas, dispersando el tráfico y reduciendo la carga en el servidor original; y análisis y respuesta proactiva, donde las organizaciones realizan análisis de tráfico para identificar comportamientos inusuales y establecen planes de respuesta a incidentes específicos para ataques DDoS. Implementar estas estrategias ayuda a las empresas a fortalecer su infraestructura y minimizar el impacto de posibles ataques.",
      im1: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-03/4_4_what-is-ddos_application-layer-attacks.png",
      im2: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/1FIBEeoyzoa64lVGlWKaRV/3b878bb03df1729b48cd3f667cdfe3de/amplification_ddos_example.png"
    },
    { title: "Ordenador Zombie",
      title1: "Definición",
      title2: "Función",
      title3: "Síntomas de infección",
      title4: "Métodos de infección",
      title5: "Prevención",
      text: "Un ordenador zombie es un dispositivo infectado con malware que opera bajo el control de un ciberdelincuente. Estos dispositivos son utilizados en actividades ilegales, como el envío de spam o ataques DDoS, sin que sus propietarios lo sepan. La detección puede ser difícil, ya que a menudo el malware se oculta en el sistema.",
      text1: "Un ordenador zombie es una computadora que ha sido infectada por malware y está bajo el control de un atacante, a menudo sin el conocimiento del usuario. Estos dispositivos comprometidos pueden ser utilizados como parte de una botnet, que es una red de computadoras controladas por un atacante con el fin de realizar diversas actividades maliciosas.",
      text2: "Las funciones más comunes de un ordenador zombie incluyen la participación en ataques DDoS, el envío de spam a través de correos electrónicos no deseados, la distribución de más malware y la realización de fraudes en línea. Al estar bajo el control de un atacante, estos ordenadores pueden ser utilizados para llevar a cabo operaciones coordinadas sin que sus propietarios lo sepan.",
      text3: "Los síntomas de una infección por malware en un ordenador zombie pueden manifestarse de varias maneras, incluyendo un rendimiento lento y ineficiente del sistema, comportamiento inusual como la aparición de aplicaciones desconocidas o cambios en la configuración del sistema, y conexiones de red inesperadas que pueden indicar que el ordenador está comunicándose con servidores de comando y control del atacante. Sin embargo, estos síntomas a menudo son ignorados por los usuarios, lo que permite que el malware opere sin ser detectado.",
      text4: "Los métodos de infección de un ordenador zombie son variados. Los atacantes pueden utilizar técnicas de phishing, donde se envían correos electrónicos engañosos que inducen a los usuarios a proporcionar información confidencial o a descargar software malicioso. Además, los ordenadores pueden convertirse en zombies a través de descargas de software malicioso de sitios web no seguros o la explotación de vulnerabilidades en el software que no ha sido actualizado.",
      text5: "Para prevenir que un ordenador se convierta en un zombie, es crucial adoptar medidas de seguridad efectivas. Mantener el software actualizado es fundamental, ya que muchas vulnerabilidades son corregidas por los desarrolladores en nuevas versiones. Además, el uso de software antivirus confiable puede ayudar a detectar y eliminar malware antes de que cause daños significativos. Por último, ser cauteloso con los correos electrónicos y enlaces sospechosos, evitando abrir archivos adjuntos de remitentes desconocidos o haciendo clic en enlaces dudosos, es una estrategia clave para reducir el riesgo de infección. Con estas medidas preventivas, los usuarios pueden proteger sus dispositivos y contribuir a un entorno en línea más seguro.",
      im1: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTVibnR5a3p2Y3o2ZmUxaDN4dzdvNHcxaW8wNWNtM3ZjNHR0YTRqMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b2mYLTxIbMirEmy9I3/giphy.webp",
      im2: "https://upload.wikimedia.org/wikipedia/commons/0/08/Circle_of_spam.svg"
    },

{
  title: "Ciberdelincuente",
  title1: "Definición",
  title2: "Tipos de ciberdelincuentes",
  title3: "Métodos de operación",
  title4: "Impacto social",
  title5: "Consecuencias legales",
  text: "Un ciberdelincuente es una persona que comete delitos cibernéticos utilizando computadoras o redes para obtener beneficios ilegales o causar daño. Sus acciones abarcan desde el robo de información personal hasta ataques de ransomware, y a menudo operan de forma anónima, lo que les permite evadir la detección y las consecuencias legales.",
  text1: "Los ciberdelincuentes se clasifican en varias categorías, incluidos hackers maliciosos, estafadores en línea y hacktivistas. Los hackers maliciosos explotan vulnerabilidades en sistemas, los estafadores utilizan tácticas engañosas como el phishing para robar información, y los hacktivistas realizan ataques motivados por causas políticas o sociales.",
  text2: "Emplean herramientas sofisticadas como malware, phishing e ingeniería social. El malware es software diseñado para infiltrarse y dañar sistemas, mientras que el phishing engaña a las víctimas para que revelen información sensible a través de correos electrónicos o sitios web falsos. La ingeniería social manipula a las personas para que comprometan su seguridad.",
  text3: "Las actividades de los ciberdelincuentes impactan negativamente en la privacidad, la seguridad financiera y la confianza en las plataformas digitales. Robos de identidad y fraudes pueden resultar en pérdidas económicas y daños a la reputación, afectando la adopción de tecnologías digitales y el crecimiento económico.",
  text4: "Si son atrapados, los ciberdelincuentes enfrentan graves consecuencias legales, que incluyen penas de prisión, multas y confiscación de bienes. Las leyes sobre delitos cibernéticos varían según el país, pero muchas naciones han implementado legislación específica para combatir estos delitos, con colaboración internacional entre fuerzas del orden para investigar y enjuiciar a los culpables.",
  text5: "Las penas por delitos cibernéticos pueden ser severas, y el tiempo en prisión varía según la gravedad del delito y las leyes locales. Además, los ciberdelincuentes pueden perder su capacidad de obtener empleo en el futuro debido a antecedentes penales. La pérdida de bienes puede incluir cuentas bancarias y activos relacionados con los crímenes cometidos, lo que añade una capa adicional de sanción económica a sus actividades delictivas.",
  im1: "https://media2.giphy.com/media/YRMb6dd7zprS00JdGZ/giphy.gif?cid=a267dfa30nsgtel539iqcz0hqh2yrpcln0qgwrmbzsplgiye&ep=v1_stickers_search&rid=giphy.gif&ct=s",
  im2: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/estratagemas-mas-comunes-ciberdelincuentes.jpg",
},

{
  title: "Botmaster",
  title1: "Definición",
  title2: "Responsabilidades",
  title3: "Perfil técnico",
  title4: "Métodos de reclutamiento",
  title5: "Riesgos legales",
  text: "Un botmaster es quien controla una botnet, una red de dispositivos infectados. Utiliza un servidor de comando y control para enviar instrucciones a los bots y ejecutar ataques cibernéticos. Su trabajo conlleva grandes riesgos legales, y su actividad representa una amenaza significativa en el ámbito de la ciberseguridad.",
  text1: "Las responsabilidades de un botmaster son variadas y complejas. Entre sus tareas se incluye la creación y distribución de malware para infectar nuevos dispositivos, así como la administración y mantenimiento de la botnet. También deben coordinar los ataques, eligiendo objetivos y estableciendo estrategias para maximizar el impacto y la efectividad de sus operaciones. En algunos casos, los botmasters pueden alquilar su botnet a otros ciberdelincuentes, generando así ingresos adicionales.",
  text2: "El perfil técnico de un botmaster suele ser el de un hacker altamente capacitado. Estos individuos poseen un profundo conocimiento en programación, redes y seguridad informática, lo que les permite desarrollar herramientas sofisticadas para evadir sistemas de defensa y llevar a cabo ataques sin ser detectados. Además, suelen estar al tanto de las últimas tendencias en seguridad cibernética y vulnerabilidades de software, lo que les ayuda a adaptar sus métodos y mantenerse un paso adelante de las autoridades.",
  text3: "Para reclutar dispositivos y convertirlos en bots, los botmasters utilizan métodos variados y engañosos. Uno de los más comunes es la explotación de vulnerabilidades en software, donde buscan sistemas desactualizados o mal configurados. También emplean técnicas de phishing para engañar a los usuarios, haciéndoles creer que están interactuando con servicios legítimos, lo que les permite introducir malware en sus dispositivos. La ingeniería social es otra herramienta que utilizan para manipular a las personas y facilitar la infección de sus dispositivos.",
  text4: "Los riesgos legales para los botmasters son significativos. Si son capturados por las autoridades, pueden enfrentar severas consecuencias, que incluyen largas penas de prisión y multas considerables. Las leyes en muchos países han sido endurecidas para combatir el cibercrimen, y los botmasters a menudo son objeto de investigaciones exhaustivas y cooperación internacional entre fuerzas del orden. Además, un historial criminal por actividades de hacking puede afectar su capacidad para conseguir empleo o integrarse en la sociedad en el futuro.",
  text5: "Además de las consecuencias legales, ser un botmaster también implica un constante riesgo de ser víctima de otros ciberdelincuentes. El ecosistema del cibercrimen es competitivo y violento, y los botmasters pueden ser atacados o traicionados por sus propios asociados. La naturaleza anónima de las actividades en línea significa que incluso los más astutos pueden encontrar dificultades para proteger sus identidades y sus botnets. Esto puede llevar a un ciclo de desconfianza y violencia entre los delincuentes cibernéticos.",
  im1: "https://cdn.dribbble.com/users/1304577/screenshots/4032985/kiiwik-app-_03.gif",
  im2: "https://as2.ftcdn.net/v2/jpg/01/82/01/75/1000_F_182017585_LIfNIz5sL2iBItSsouo9LefB1RBpDhRO.jpg"
},

{
  title: "Botnet",
  title1: "Definición",
  title2: "Crecimiento",
  title3: "Aplicaciones maliciosas",
  title4: "Tipos de botnets",
  title5: "Detección y mitigación",
  text: "Una botnet es una red de dispositivos comprometidos controlados por un botmaster para realizar actividades ilícitas, como ataques DDoS y envío de spam. La escalabilidad de las botnets las convierte en herramientas poderosas para los ciberdelincuentes, pero su desmantelamiento es complicado debido a su naturaleza descentralizada.",
  text1: "Las botnets se forman cuando dispositivos, como computadoras, routers y dispositivos IoT, son infectados con malware y se convierten en 'bots'. Estos dispositivos son controlados de forma remota por un botmaster, quien envía comandos a la red para ejecutar actividades maliciosas. A menudo, los usuarios de los dispositivos comprometidos no tienen idea de que están participando en una botnet.",
  text2: "El crecimiento de las botnets puede ser exponencial. Los ciberdelincuentes emplean técnicas de propagación que les permiten infectar rápidamente nuevos dispositivos. Esto incluye el uso de vulnerabilidades en software, ataques de phishing y la explotación de redes inseguras. A medida que se incorporan más dispositivos a la botnet, su capacidad de ataque aumenta, lo que las hace más efectivas para llevar a cabo ataques a gran escala.",
  text3: "Las botnets tienen múltiples aplicaciones maliciosas. Son comúnmente utilizadas para realizar ataques DDoS, donde miles de bots envían tráfico simultáneo a un servidor objetivo, sobrecargándolo y causando interrupciones en el servicio. También se utilizan para enviar correos electrónicos de spam, robando credenciales de usuarios y difundiendo malware adicional en la red. Esto puede resultar en violaciones de datos y pérdidas financieras significativas para las víctimas.",
  text4: "Existen diferentes tipos de botnets, cada una con su propia estructura y metodología de operación. Las botnets de tipo 'peer-to-peer' operan de forma descentralizada, donde cada bot puede actuar como un nodo de control, lo que las hace más resistentes a la detección y eliminación. Por otro lado, las botnets centralizadas dependen de un servidor de control que envía instrucciones a los bots, lo que puede ser un punto único de fallo que facilita su desmantelamiento si se identifica.",
  text5: "La detección y mitigación de botnets es un desafío constante para las organizaciones. Se implementan soluciones de seguridad avanzadas que incluyen la monitorización del tráfico de red para identificar patrones inusuales y el análisis del comportamiento de los dispositivos conectados. Las organizaciones también utilizan herramientas de inteligencia de amenazas para identificar y bloquear actividades maliciosas antes de que se materialicen. Sin embargo, la naturaleza dinámica de las botnets requiere una respuesta continua y proactiva para mitigar sus efectos.",
  im1: "https://static.swhosting.com/blog/wp-content/uploads/2017/04/Anim-Botnet-800x480-1.gif",
  im2: "https://saynet.com.mx/wp-content/uploads/brizy/imgs/botnet-838x419x70x0x698x419x1604346303.png"
},

{
  title: "Ransomware",
  title1: "Definición",
  title2: "Método de infección",
  title3: "Variantes",
  title4: "Impacto en las víctimas",
  title5: "Prevención y recuperación",
  text: "El ransomware es un malware que cifra los datos de la víctima y exige un rescate para desbloquearlos. Este tipo de ataque puede tener consecuencias devastadoras, incluyendo pérdida de acceso a datos críticos y daño a la reputación de las empresas. La prevención incluye actualizaciones de software y educación sobre seguridad.",
  text1: "El ransomware es un tipo de malware que ha ganado notoriedad en los últimos años debido a su capacidad para cifrar los archivos de un usuario y exigir un rescate para restaurar el acceso a estos datos. Una vez que el malware infecta un sistema, se encripta el contenido de los archivos, haciendo que sean inaccesibles hasta que se pague un rescate al atacante, quien proporciona una clave de descifrado.",
  text2: "Los métodos de infección son variados, pero generalmente el ransomware se propaga a través de correos electrónicos de phishing que contienen enlaces o archivos adjuntos maliciosos. También puede instalarse mediante descargas de software malicioso desde sitios web no seguros o a través de la explotación de vulnerabilidades en el software, permitiendo a los atacantes infiltrarse en redes y sistemas de forma silenciosa.",
  text3: "Existen numerosas variantes de ransomware, algunas de las cuales pueden propagarse automáticamente a través de redes, infectando otros dispositivos conectados. Ejemplos notables incluyen WannaCry, que explotó una vulnerabilidad en Windows para cifrar datos en miles de computadoras en todo el mundo, y Ryuk, que se enfoca en objetivos empresariales y es conocido por exigir rescates muy altos.",
  text4: "El impacto en las víctimas puede ser devastador. Las personas o empresas que son atacadas pueden enfrentar la pérdida permanente de datos si no cuentan con copias de seguridad adecuadas. Además, pueden verse obligadas a pagar rescates significativos para recuperar su información, lo que no solo representa un costo financiero, sino que también puede afectar la confianza de los clientes y la reputación de la empresa.",
  text5: "Para prevenir y recuperarse de ataques de ransomware, las empresas deben implementar medidas de seguridad efectivas. Esto incluye realizar copias de seguridad regulares de datos críticos, asegurándose de que estas copias estén almacenadas de manera segura y separada de la red principal. La formación sobre ciberseguridad es crucial para educar a los empleados sobre cómo identificar correos electrónicos de phishing y otros vectores de ataque. Mantener el software y los sistemas operativos actualizados también es fundamental para reducir la vulnerabilidad a infecciones de ransomware.",
  im1: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/43BNHMZ7XFCMVAQOB37COONEFA.gif&w=800",
  im2: "https://latam.kaspersky.com/content/es-mx/images/repository/isc/2021/ransomware.jpg"
},

{
  title: "Disclaimer",
  title1: "Definición",
  title2: "Propósito",
  title3: "Contexto legal",
  title4: "Tipos de disclaimers",
  title5: "Importancia",
  text: "Un disclaimer es una declaración que limita la responsabilidad de una organización sobre el uso de su información o servicios. Su propósito es proteger legalmente a la organización y clarificar los límites de responsabilidad, informando a los usuarios sobre los riesgos asociados con el uso de la información proporcionada.",
  text1: "Un disclaimer es un aviso que limita la responsabilidad de una persona o entidad en relación con el uso de su información o servicios. Este tipo de declaración es fundamental para establecer un marco claro que defina hasta dónde llega la responsabilidad de la organización, especialmente en situaciones donde la información puede ser interpretada o utilizada de manera inapropiada.",
  text2: "El propósito principal de un disclaimer es aclarar la intención detrás de la información proporcionada y establecer límites en la responsabilidad legal por cualquier daño o pérdida resultante del uso indebido. Esto es crucial para que los usuarios comprendan que, aunque la información pueda ser útil, no debe ser considerada como asesoría profesional o garantizada.",
  text3: "En el contexto legal, los disclaimers se incluyen comúnmente en sitios web, contratos y documentos legales. En estos entornos, la claridad en la comunicación es esencial para evitar malentendidos que puedan llevar a litigios o reclamaciones legales. Un disclaimer bien formulado puede servir como una primera línea de defensa en caso de disputas legales.",
  text4: "Existen varios tipos de disclaimers, incluidos disclaimers de responsabilidad, que limitan la responsabilidad de una entidad por daños; disclaimers de derechos de autor, que protegen el contenido original; y disclaimers de no garantía, que informan a los usuarios que no se ofrecen garantías sobre la precisión o efectividad de la información presentada.",
  text5: "La importancia de un disclaimer bien redactado radica en su capacidad para proteger a una entidad frente a reclamaciones legales y ayudar a gestionar las expectativas de los usuarios o clientes. Al establecer límites claros sobre lo que se puede esperar del uso de la información o servicios, se minimizan los riesgos legales y se fomenta una relación más transparente entre la organización y sus usuarios.",
  im1: "https://i.pinimg.com/originals/6d/0b/35/6d0b35aaa3378482e946550c5ed30586.gif",
  im2: "https://www.shutterstock.com/image-vector/illustration-vector-graphic-disclaimer-symbol-260nw-2024025857.jpg"
},

{
  title: "The Morris Worm",
  title1: "Definición",
  title2: "Impacto inicial",
  title3: "Método de propagación",
  title4: "Consecuencias",
  title5: "Legado",
  text: "El Morris Worm, creado en 1988, fue uno de los primeros gusanos de Internet y afectó a miles de computadoras. Se propagó a través de vulnerabilidades en el software y causó interrupciones significativas en las redes. Este incidente destacó la necesidad de mejorar la seguridad en línea y llevó a una mayor conciencia sobre ciberseguridad.",
  text1: "El Morris Worm, creado por Robert Tappan Morris en 1988, es uno de los primeros gusanos de internet que se propagó de forma autónoma. Su creación marcó un hito en la historia de la ciberseguridad y puso de relieve las vulnerabilidades en los sistemas de computación de la época.",
  text2: "El impacto inicial del gusano fue devastador, infectando alrededor de 6,000 computadoras, lo que representaba aproximadamente el 10% de todas las computadoras conectadas a Internet en ese momento. Este número destaca la magnitud de la propagación y el daño que pudo causar en una red emergente.",
  text3: "El Morris Worm se propagó aprovechándose de vulnerabilidades en sistemas UNIX y utilizó técnicas de fuerza bruta para adivinar contraseñas. Esto mostró la importancia de contar con medidas de seguridad robustas, así como de mantener el software actualizado para mitigar el riesgo de infecciones.",
  text4: "Las consecuencias del Morris Worm fueron significativas, ya que provocó un colapso en muchos sistemas, lo que llevó a un aumento en la conciencia sobre la seguridad cibernética. Como resultado, se iniciaron esfuerzos para crear leyes sobre delitos informáticos y mejorar las prácticas de seguridad en línea.",
  text5: "El legado del Morris Worm es recordado no solo por su impacto inmediato, sino también por el debate que generó sobre la ética en la programación y la ciberseguridad. Este incidente sentó las bases para la evolución de la seguridad informática y la creación de políticas más estrictas para proteger las redes de futuros ataques.",
  im1: "https://i.pinimg.com/originals/a8/53/f0/a853f001dc269d94b79ce3f72b7fcd23.gif",
  im2: "https://www.overtsoftware.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-29-at-2.47.16-PM-1024x401.png",
},

{
  title: "Ciberwarfare",
  title1: "Definición",
  title2: "Objetivos",
  title3: "Ejemplos históricos",
  title4: "Consecuencias globales",
  title5: "Defensas necesarias",
  text: "La ciberwarfare se refiere a las actividades hostiles en el ciberespacio entre naciones, utilizando herramientas digitales para dañar o desestabilizar a un adversario. Esto puede incluir ataques a infraestructuras críticas y robo de información confidencial. La creciente dependencia de la tecnología hace que la ciberseguridad sea una prioridad en la defensa nacional.",
  text1: "La ciberwarfare se refiere al uso de ciberataques por parte de un estado o grupo organizado para atacar o desestabilizar a otro estado o sus infraestructuras. Este concepto ha cobrado importancia a medida que la tecnología ha avanzado y se ha convertido en una parte integral de la estrategia de defensa de los países. La ciberwarfare se diferencia de otras formas de conflicto en que se lleva a cabo en un entorno virtual, lo que plantea desafíos únicos para la detección y respuesta.",
  text2: "Los objetivos de estos ataques pueden incluir infraestructuras críticas, redes gubernamentales y sistemas financieros, con el fin de causar daños, robar información o sembrar el caos. Al dirigirse a estas áreas estratégicas, los atacantes buscan debilitar la capacidad operativa y la estabilidad de la nación adversaria. Estos ataques pueden tener consecuencias devastadoras, afectando no solo a las instituciones gubernamentales, sino también a la vida cotidiana de los ciudadanos.",
  text3: "Ejemplos históricos notables de ciberwarfare incluyen el ataque Stuxnet contra Irán, que se centró en las instalaciones nucleares del país, y la interferencia rusa en las elecciones estadounidenses de 2016, que puso de relieve el potencial de los ciberataques para influir en los procesos democráticos. Estos incidentes han demostrado cómo las herramientas digitales pueden ser utilizadas como armas de guerra en la era moderna, transformando la forma en que los países llevan a cabo operaciones militares y estrategias de espionaje.",
  text4: "Las consecuencias globales de la ciberwarfare plantean nuevos desafíos en la seguridad nacional y la diplomacia. Dado que los ataques son difíciles de atribuir, pueden llevar a conflictos internacionales y tensiones entre naciones. Esto subraya la necesidad de establecer normas y acuerdos internacionales que regulen el comportamiento de los estados en el ciberespacio, así como la importancia de la cooperación entre naciones para abordar estas amenazas emergentes.",
  text5: "Para enfrentar estas amenazas, los gobiernos están invirtiendo en mejorar su ciberseguridad, estableciendo protocolos de respuesta y fomentando la colaboración internacional. Estas medidas son esenciales para proteger las infraestructuras críticas y salvaguardar la información confidencial frente a ataques hostiles. Además, la educación y la capacitación en ciberseguridad son cruciales para preparar a las fuerzas de defensa y a la población en general para afrontar los retos del ciberespacio.",
  im1: "https://magazine.columbia.edu/sites/default/files/2019-06/Columbia_SPY__Final_Tinker2_0.gif",
  im2: "https://www.stormshield.com/wp-content/uploads/shutterstock-253890409-scaled.jpg"
},

{
  title: "Stuxnet",
  title1: "Definición",
  title2: "Origen",
  title3: "Método de ataque",
  title4: "Innovación",
  title5: "Impacto a largo plazo",
  text: "Stuxnet es un malware diseñado específicamente para atacar sistemas de control industrial, como los utilizados en centrales nucleares. Fue descubierto en 2010 y se cree que fue creado por una nación estado para sabotear el programa nuclear de Irán. Stuxnet es considerado uno de los primeros ejemplos de ciberarma.",
  text1: "Stuxnet es un gusano informático descubierto en 2010, diseñado específicamente para atacar sistemas de control industrial, particularmente aquellos utilizados en plantas nucleares. Este malware se destacó por su enfoque en la infraestructura crítica, convirtiéndose en un referente en el ámbito de la ciberseguridad. Su sofisticación técnica y objetivos específicos lo han convertido en un caso de estudio para expertos en la materia.",
  text2: "Se cree que Stuxnet fue creado por una colaboración entre agencias de inteligencia de EE. UU. e Israel para sabotear el programa nuclear de Irán. Este origen ha llevado a especulaciones sobre las capacidades cibernéticas de los estados y su disposición a utilizar malware como herramienta de guerra. El desarrollo de Stuxnet marcó un cambio en la manera en que las naciones consideran la guerra cibernética y el uso de tecnologías emergentes.",
  text3: "Stuxnet se infiltró en sistemas SCADA, alterando el funcionamiento de las centrifugadoras de uranio, lo que provocó daños significativos en la infraestructura. Este método de ataque subraya la vulnerabilidad de los sistemas industriales a los ciberataques y el potencial destructivo del malware. La habilidad de Stuxnet para causar daños físicos a través de una intrusión digital es un aspecto innovador que ha redefinido las estrategias de defensa cibernética.",
  text4: "Stuxnet representa una de las primeras instancias de un ciberataque que tiene un efecto físico en el mundo real, lo que llevó a una nueva era de guerra cibernética. Esta innovación ha inspirado a otras naciones a considerar el desarrollo de sus propias ciberarmas, ampliando el campo de batalla a un entorno digital. Las implicaciones de este cambio son significativas, ya que la guerra ya no se limita a conflictos convencionales.",
  text5: "El impacto a largo plazo de Stuxnet ha influido en el desarrollo de ciberarmas y ha generado debates sobre las implicaciones éticas de utilizar malware con fines geopolíticos. Los especialistas están cada vez más preocupados por la posibilidad de que este tipo de ataques se conviertan en la norma en conflictos futuros, planteando preguntas sobre la responsabilidad, la seguridad y la moralidad en el uso de tecnologías cibernéticas en la guerra.",
  im1: "https://media.tenor.com/dHk-LfzHrtwAAAAj/linux-computer.gif",
  im2: "https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/hubfs/New_Avast_Academy/what_is_the_stuxnet_virus_academy_a1/Stuxnet-Virus-01.png?width=1320&name=Stuxnet-Virus-01.png"
},

{
  title: "Moonlight Maze",
  title1: "Definición",
  title2: "Método de ataque",
  title3: "Descubrimiento",
  title4: "Dificultades de atribución",
  title5: "Lecciones aprendidas",
  text: "Moonlight Maze fue un ataque cibernético masivo en la década de 1990 que comprometió redes de defensa y otros sistemas gubernamentales en EE. UU. Este ataque evidenció la vulnerabilidad de las infraestructuras críticas y llevó a un aumento en la inversión en ciberseguridad y en la cooperación entre agencias de seguridad.",
  text1: "Moonlight Maze fue un ataque cibernético a gran escala que tuvo lugar a finales de la década de 1990, dirigido principalmente a las redes gubernamentales y de defensa de EE. UU. Este evento marcó un hito en la historia de la ciberseguridad, ya que puso de manifiesto las vulnerabilidades que existían en las infraestructuras críticas del país y cómo estas podían ser explotadas por actores maliciosos.",
  text2: "Los atacantes utilizaron técnicas sofisticadas de intrusión para infiltrarse en sistemas de múltiples agencias gubernamentales, robando datos sensibles. La complejidad del ataque, que abarcó varias entidades, mostró la necesidad de un enfoque más integral en la defensa cibernética, ya que los atacantes podían moverse lateralmente entre diferentes redes sin ser detectados.",
  text3: "Moonlight Maze fue descubierto por el FBI y otras agencias de seguridad que notaron actividad inusual en la red de defensa de EE. UU. Este descubrimiento resaltó la importancia de la vigilancia constante y el monitoreo de las redes para detectar posibles intrusiones, además de subrayar la necesidad de contar con mejores mecanismos de alerta temprana.",
  text4: "La naturaleza del ataque y el uso de múltiples puntos de origen dificultaron la identificación de los atacantes, lo que planteó interrogantes sobre la seguridad nacional. La dificultad para atribuir el ataque a un único autor o grupo condujo a un debate sobre la protección de la soberanía digital y la necesidad de fortalecer las capacidades de respuesta ante ciberamenazas.",
  text5: "Moonlight Maze destacó la necesidad de una mejor ciberseguridad y una mayor colaboración entre agencias para proteger la infraestructura crítica. Las lecciones aprendidas llevaron a un aumento en la inversión en ciberseguridad, así como a la creación de protocolos de colaboración interagenciales para compartir información y recursos, sentando las bases para un enfoque más robusto en la defensa cibernética.",
  im1: "https://i.giphy.com/BDqTOfUM8nfFdxTdpY.webp",    
  im2: "https://c.files.bbci.co.uk/4BB9/production/_116158391_gettyimages-874176436.jpg"
},

{
  title: "WannaCry",
  title1: "Definición",
  title2: "Método de propagación",
  title3: "Impacto global",
  title4: "Respuesta",
  title5: "Consecuencias a largo plazo",
  text: "Wannacry es un ransomware que explotó una vulnerabilidad en el sistema operativo Windows en 2017, cifrando archivos y exigiendo un rescate en Bitcoin. Afectó a miles de organizaciones en todo el mundo, incluidas instituciones de salud y empresas, subrayando la importancia de las actualizaciones de seguridad y la protección contra ransomware.",
  text1: "WannaCry es un ransomware que se propagó rápidamente en mayo de 2017, infectando miles de computadoras en todo el mundo en cuestión de días. Este ataque cibernético destacó la vulnerabilidad de los sistemas informáticos y la rapidez con que pueden ser comprometidos por malware, lo que llevó a una revisión exhaustiva de las medidas de seguridad implementadas en diversas organizaciones.",
  text2: "Se aprovechó de una vulnerabilidad en el sistema operativo Windows, utilizando un exploit conocido como EternalBlue, desarrollado por la NSA. Esta técnica permitió que el ransomware se propagara de manera autónoma entre las computadoras conectadas a la misma red, exacerbando su alcance y impacto, y demostrando la peligrosidad de las vulnerabilidades no parcheadas.",
  text3: "WannaCry afectó a organizaciones de todo tipo, incluidas empresas, hospitales y gobiernos, causando pérdidas financieras estimadas en millones de dólares. En particular, el sistema de salud británico fue severamente golpeado, lo que resultó en la cancelación de citas y la interrupción de servicios críticos, lo que mostró las graves repercusiones que un ataque de ransomware puede tener en sectores vitales.",
  text4: "Microsoft lanzó actualizaciones de seguridad para mitigar la vulnerabilidad, y la comunidad de ciberseguridad trabajó para ayudar a las víctimas a recuperar sus datos. La rápida respuesta de Microsoft y el esfuerzo conjunto de expertos en ciberseguridad subrayaron la importancia de la colaboración en la lucha contra el malware y la recuperación ante incidentes.",
  text5: "El ataque resaltó la importancia de mantener el software actualizado y la necesidad de una mayor concienciación sobre la seguridad cibernética. Las lecciones aprendidas de WannaCry llevaron a muchas organizaciones a reevaluar sus políticas de seguridad y a invertir en educación para sus empleados, asegurando que estén mejor preparados para identificar y prevenir futuros ataques de ransomware.",
  im1: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNms0ZGFwbHRmZzJjMnE1b2U2dnRoYnk3dmR1d2doeXJpamNjeDBkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rNZ0TDqT12TzVMLKHR/giphy.webp",
  im2: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9117/production/_96034173_cryptor3.png.webp"
},

{
  title: "Petya",
  title1: "Definición",
  title2: "Método de infección",
  title3: "Cifrado de archivos",
  title4: "Objetivo y alcance",
  title5: "Respuesta y mitigación",
  text: "Petya es un ransomware que se hizo famoso en 2016 por su capacidad para cifrar no solo los archivos del sistema, sino también la tabla de particiones, lo que hacía que los sistemas afectados fueran prácticamente inoperables. A diferencia de otros ransomware que se enfocan solo en los archivos del usuario, Petya comprometía el proceso de inicio del sistema, lo que dificultaba enormemente la recuperación de los datos sin la clave de descifrado.",
  text1: "Se propagó principalmente a través de correos electrónicos de phishing y mediante la explotación de vulnerabilidades en el software, utilizando un exploit conocido como EternalBlue. Este método de infección permitió que Petya se difundiera rápidamente entre sistemas vulnerables, afectando a una gran cantidad de usuarios y organizaciones en un corto período de tiempo.",
  text2: "El cifrado de archivos por parte de Petya es particularmente destructivo, ya que toma el control del proceso de inicio del sistema operativo. Esto significa que, incluso si un usuario puede acceder a sus archivos, no podrá iniciarlos ni utilizar el sistema sin desinfectar primero el ransomware. Esto lo diferencia de otros ransomware que solo cifran archivos individuales y permiten alguna forma de recuperación.",
  text3: "El ransomware Petya fue diseñado principalmente para atacar a organizaciones grandes, causando interrupciones masivas en las operaciones de múltiples entidades en todo el mundo, siendo uno de los ataques más notorios el dirigido a empresas en Ucrania. Este enfoque dirigido destacó su potencial para causar daños significativos y pérdidas financieras a gran escala.",
  text4: "Ante la propagación de Petya, las organizaciones afectadas tuvieron que restablecer sus sistemas desde copias de seguridad, lo que a menudo resultó en pérdida de datos recientes. La comunidad de ciberseguridad trabajó rápidamente para desarrollar herramientas de descifrado, aunque la recuperación de datos fue extremadamente difícil para muchas víctimas debido a la naturaleza del cifrado de Petya. Esto resaltó la gravedad del problema del ransomware y la urgente necesidad de implementar medidas de prevención más efectivas.",
  text5: "Para prevenir infecciones por ransomware como Petya, es esencial mantener prácticas de seguridad cibernética sólidas. Esto incluye la actualización regular de software y sistemas operativos, el uso de soluciones antivirus confiables, y la capacitación de los empleados para reconocer correos electrónicos de phishing y otras tácticas de ingeniería social. Implementar copias de seguridad regulares y asegurar que estén desconectadas de la red principal también puede ser una estrategia efectiva para mitigar el impacto de futuros ataques de ransomware.",
  im1: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTBpbHI2MGF2M21odjBoaXd3bnhoM3NhNXgxN2w4ZnVrMW1wdGI0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vrfYWzuTAYViOUqBRP/giphy.webp",
  im2: "https://www.shutterstock.com/shutterstock/photos/668145079/display_1500/stock-photo-petya-ransomware-computer-virus-cyber-attack-screen-cool-illustration-668145079.jpg"
},

{
  title: "Equifax (ataque)",
  title1: "Definición",
  title2: "Método de ataque",
  title3: "Datos comprometidos",
  title4: "Consecuencias legales",
  title5: "Impacto en la ciberseguridad",
  text: "El ataque a Equifax, uno de los mayores robos de datos en la historia, ocurrió en 2017, comprometiendo la información personal de aproximadamente 147 millones de personas. Este incidente no solo afectó a las víctimas individuales, sino que también planteó preocupaciones serias sobre la seguridad de los datos a nivel empresarial y regulatorio.",
  text1: "Los atacantes explotaron una vulnerabilidad en el software Apache Struts, que no había sido parcheada adecuadamente. Esto les permitió acceder a la base de datos de la empresa sin autorización, revelando fallos en la gestión de la seguridad informática de Equifax.",
  text2: "Los datos comprometidos incluían información extremadamente sensible, como números de Seguro Social, fechas de nacimiento, direcciones y números de licencia de conducir. Esta información puede ser utilizada para realizar fraudes y robos de identidad, causando graves daños a las víctimas.",
  text3: "Como resultado del ataque, Equifax enfrentó numerosas demandas y sanciones por parte de entidades gubernamentales y particulares, lo que resultó en un costo financiero significativo y un daño reputacional duradero que afectó la confianza de los consumidores.",
  text4: "El ataque a Equifax destacó la importancia de la gestión adecuada de vulnerabilidades y la necesidad de que las empresas mantengan prácticas de seguridad rigurosas. Subrayó que las brechas de datos pueden tener repercusiones significativas no solo para las organizaciones involucradas, sino también para la industria de la ciberseguridad en general.",
  text5: "Para mitigar los riesgos asociados a incidentes de seguridad, es crucial que las empresas implementen un enfoque proactivo en la gestión de vulnerabilidades, incluyendo auditorías de seguridad regulares, capacitación de empleados sobre prácticas seguras y la adopción de tecnologías que fortalezcan la protección de datos. La confianza del consumidor en la gestión de la información personal depende en gran medida de la capacidad de las organizaciones para salvaguardar sus datos.",
  im1: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzFsemMxeTVyMDI3dXJ2YXprZ3djYzhmMnJ6dzNvaDlpZWp2Z3BnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/96i9xgAlPLZxh48i9h/giphy.webp",
  im2: "https://gdb.voanews.com/db0e15b3-c7d1-4725-b5dd-042048b8a7e4_w1200_r1.png"
},

{
  title: "Cam4 (ataque)",
  title1: "Definición",
  title2: "Método de ataque",
  title3: "Datos comprometidos",
  title4: "Impacto en los usuarios",
  title5: "Reacciones y mejoras",
  text: "El ataque a Cam4 en 2020 resultó en la filtración de datos personales de millones de usuarios. Los ciberdelincuentes aprovecharon vulnerabilidades en la plataforma para acceder a información sensible. Este incidente subraya la necesidad de implementar medidas de seguridad robustas y educar a los usuarios sobre la protección de su información en línea.",
  text1: "Los atacantes utilizaron una combinación de vulnerabilidades de seguridad y configuraciones incorrectas del servidor para acceder a la base de datos de la plataforma. Esto demuestra cómo errores en la configuración pueden ser explotados para llevar a cabo ataques significativos.",
  text2: "Se filtraron información confidencial, incluyendo nombres de usuario, direcciones de correo electrónico, contraseñas y datos de tarjetas de crédito de los usuarios. Esta información puede ser utilizada para cometer fraude y robo de identidad.",
  text3: "Las víctimas del ataque se enfrentaron a un riesgo elevado de robo de identidad y fraude financiero, así como a la exposición no deseada de su información personal. Este incidente generó una gran preocupación entre los usuarios sobre la seguridad de sus datos en plataformas en línea.",
  text4: "Cam4 y otras plataformas de contenido para adultos intensificaron sus medidas de seguridad y adoptaron prácticas más robustas para proteger la información de los usuarios, destacando la necesidad de una ciberseguridad efectiva en todos los sectores.",
  text5: "La respuesta de Cam4 incluyó notificar a los usuarios afectados y ofrecerles recursos para proteger su información personal, además de revisar y mejorar sus protocolos de seguridad para prevenir futuros incidentes.",
  im1: "https://miro.medium.com/v2/resize:fit:1280/1*cQqwu3fNS_gEFm0uX2_uPg.gif",
  im2: "https://s1.elespanol.com/2019/12/31/actualidad/actualidad_456214996_141472780_1024x576.jpg"
},

{
  title: "Operation Aurora",
  title1: "Definición",
  title2: "Método de ataque",
  title3: "Origen",
  title4: "Consecuencias para Google",
  title5: "Impacto a largo plazo",
  text: "Operation Aurora fue una serie de ataques cibernéticos altamente sofisticados dirigidos a múltiples empresas, incluyendo Google, en 2009, con el objetivo de robar información confidencial. Este incidente puso de relieve la necesidad de medidas de seguridad robustas en la protección de datos sensibles.",
  text1: "Los atacantes utilizaron un conjunto de técnicas de ingeniería social y malware para comprometer las redes de las empresas, accediendo a bases de datos con información de empleados y clientes. Esto demuestra cómo una combinación de tácticas puede ser efectiva en el acceso no autorizado a información crítica.",
  text2: "Se cree que el ataque fue llevado a cabo por grupos de hackers respaldados por el gobierno chino, lo que lo convirtió en un incidente de ciberespionaje de alto perfil. Esta conexión política subraya la gravedad de las amenazas cibernéticas provenientes de actores estatales.",
  text3: "El ataque llevó a Google a reconsiderar sus operaciones en China y, eventualmente, a modificar su enfoque sobre la seguridad y la privacidad de los datos. Esto resultó en cambios significativos en la forma en que la empresa maneja la información y su relación con los gobiernos.",
  text4: "Operation Aurora destacó la vulnerabilidad de las empresas frente a ataques dirigidos y la importancia de una respuesta rápida y eficaz a incidentes de ciberseguridad. Las lecciones aprendidas impulsaron a muchas organizaciones a fortalecer sus defensas y a estar más alerta ante las amenazas cibernéticas.",
  text5: "El incidente también resaltó la necesidad de colaboración entre el sector privado y las autoridades gubernamentales para combatir el ciberespionaje y mejorar las medidas de protección a nivel nacional e internacional.",
  im1: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2p2MXo4N2c4NGw5dmJ1aXNlM3Zpbmt5NjZudW8xem1oa2NvdTY2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gPXz4RyODDLZgmYquE/giphy.webp",
  im2: "https://miro.medium.com/v2/resize:fit:1400/1*JMma9W5RPUeJrw63PrImuQ.jpeg"
},

{
  title: "Freeze it into Submission",
  title1: "Definición",
  title2: "Método de ataque",
  title3: "Objetivos de los atacantes",
  title4: "Consecuencias",
  title5: "Medidas de prevención",
  text: "Freeze it into Submission fue una técnica de ataque utilizada por algunos ciberdelincuentes que involucraba la sobrecarga de sistemas críticos hasta que se volvían inoperables. Esta táctica buscaba interrumpir operaciones y causar daños económicos significativos, demostrando la necesidad de resiliencia en la infraestructura tecnológica.",
  text1: "La técnica de 'Freeze it into Submission' consiste en agotar los recursos de un sistema al inundarlo con solicitudes o comandos excesivos. Esto puede incluir ataques de denegación de servicio (DoS), donde el sistema objetivo es abrumado con tráfico malicioso, o técnicas más sofisticadas que explotan vulnerabilidades específicas en la arquitectura del sistema.",
  text2: "Los atacantes que utilizan esta técnica suelen tener como objetivo infraestructuras críticas, como servicios de emergencia, instituciones financieras y plataformas en línea de gran tráfico. Al interrumpir estos servicios, buscan provocar caos, obtener rescates o simplemente demostrar su capacidad de causar daño.",
  text3: "Las consecuencias de un ataque de 'Freeze it into Submission' pueden ser devastadoras. Las organizaciones pueden experimentar interrupciones prolongadas, pérdida de datos y confianza del cliente, así como un daño reputacional considerable. Además, los costos asociados con la recuperación de sistemas y la restauración de operaciones pueden ser significativos, afectando las finanzas de la empresa a largo plazo.",
  text4: "Para prevenir este tipo de ataque, las organizaciones deben implementar medidas de seguridad robustas, como firewalls avanzados y sistemas de detección de intrusos (IDS). También es esencial realizar auditorías de seguridad regulares y pruebas de penetración para identificar y mitigar vulnerabilidades. La educación y la capacitación del personal en la identificación de señales de alerta de ataques son igualmente cruciales para fortalecer la defensa general contra este tipo de amenazas.",
  text5: "Finalmente, establecer un plan de respuesta a incidentes sólido y pruebas de recuperación de desastres puede ayudar a las organizaciones a minimizar el impacto de un ataque exitoso. La resiliencia en la infraestructura tecnológica es vital para garantizar la continuidad del negocio y la protección de la información crítica.",
  im1: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZlaHZqOThiNjhzand4d2d1cDd0aHV0Y3lvYms5cWJpbWUxN3NiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xLaKQP4835SIoOcA01/giphy.webp",
  im2: "https://www.ic3.gov/Content/v2/images/CyberSecurity.png"
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
