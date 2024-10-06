import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { CustomWindowCard } from '../components/CustomWindowCard';
import { CustomModal } from '../components/CustomModal';

export const Section2 = () => {
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
  title: "Ley General de Protección de Datos Personales de México",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Derechos de los Titulares",
  title5: "Sanciones",
  text: "La Ley General de Protección de Datos Personales de México establece el marco normativo para la protección de datos personales en posesión de entidades públicas y privadas, asegurando la privacidad y el derecho de los individuos sobre su información personal.",
  text1: "La Ley General de Protección de Datos Personales de México tiene como objetivo fundamental proteger los datos personales de los individuos en el ámbito digital y físico. Esta ley regula la recolección, uso, almacenamiento y difusión de la información personal, buscando garantizar el respeto a la privacidad de los ciudadanos y a su autodeterminación informativa. La ley se aplica a todas las entidades que manejen datos personales, tanto del sector público como del privado, estableciendo obligaciones claras para su tratamiento.",
  text2: "El principal objetivo de esta ley es asegurar que los datos personales sean tratados de manera lícita y transparente, proporcionando a los titulares control sobre su información. Esto incluye el derecho a conocer qué datos se recogen, cómo se utilizan y con quién se comparten. Además, busca fomentar la cultura de la protección de datos en la sociedad, promoviendo prácticas de manejo de información que respeten la privacidad de los individuos y prevengan abusos.",
  text3: "El alcance de esta ley es amplio, ya que se aplica a cualquier entidad que recolecte o maneje datos personales, independientemente de su forma jurídica. Esto incluye tanto a empresas privadas como a organismos públicos, y abarca una variedad de datos, desde información básica como nombres y direcciones hasta datos sensibles como información financiera o de salud. Asimismo, establece directrices para la transferencia de datos personales a terceros, asegurando que se mantengan los mismos estándares de protección.",
  text4: "Los derechos de los titulares son fundamentales en esta ley, incluyendo el derecho a acceder a sus datos, rectificarlos si son inexactos, cancelarlos cuando ya no sean necesarios, y oponerse a su tratamiento en ciertas circunstancias. Además, se establece la obligación de las entidades de informar a los titulares sobre el tratamiento de sus datos y de obtener su consentimiento previo en la mayoría de los casos. Esto otorga a los individuos un mayor control sobre su información personal y fomenta la transparencia en su manejo.",
  text5: "El incumplimiento de la ley puede resultar en sanciones severas para las entidades responsables. Estas sanciones pueden variar desde multas económicas significativas hasta la suspensión de actividades relacionadas con el tratamiento de datos personales. En los casos más graves, como el tratamiento indebido de datos sensibles o la falta de medidas de seguridad adecuadas, las consecuencias pueden incluir la inhabilitación de los responsables y acciones legales adicionales. Esta disposición busca incentivar el cumplimiento y garantizar la protección efectiva de los datos personales en México.",
  im1: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG53Z3pld3V3NmNoc2FzdnZtdm8yNHA5bTkwbHdreHNkcTJ2MTZzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.webp",
  im2: "https://todopdp.com/wp-content/uploads/2021/04/TodoPDP_OficialPDPMx.png"
},

{
  title: "Ley de Propiedad Industrial",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Derechos de los Titulares",
  title5: "Sanciones",
  text: "La Ley de Propiedad Industrial regula la protección de las invenciones, marcas y diseños industriales en México, promoviendo la innovación y el desarrollo económico.",
  text1: "La Ley de Propiedad Industrial es una normativa que tiene como objetivo proteger los derechos de los inventores y creadores en relación a sus obras y descubrimientos. Esta ley abarca diversas áreas de la propiedad industrial, como patentes, marcas, diseños industriales y secretos comerciales, estableciendo un marco legal que permite a los titulares de estos derechos beneficiarse económicamente de sus innovaciones. La protección otorgada por la ley es fundamental para fomentar un ambiente propicio para la inversión en investigación y desarrollo.",
  text2: "El objetivo principal de esta ley es incentivar la creatividad y la competencia leal en el mercado, asegurando que los creadores tengan el derecho exclusivo de explotar sus invenciones y marcas. Esto no solo beneficia a los inventores, sino que también impulsa el crecimiento económico del país al fomentar la inversión en nuevas tecnologías y productos. La ley busca equilibrar los intereses de los creadores y el acceso del público a la innovación, promoviendo la divulgación de información técnica para el desarrollo industrial.",
  text3: "El alcance de la Ley de Propiedad Industrial es extenso, ya que se aplica a todas las personas y entidades que desarrollen o utilicen invenciones, marcas o diseños en territorio mexicano. Esto incluye tanto a nacionales como a extranjeros, y abarca cualquier tipo de invención, desde productos y procesos industriales hasta marcas comerciales y signos distintivos. La ley también establece procedimientos para el registro de patentes y marcas, asegurando que los derechos sean reconocidos y protegidos adecuadamente.",
  text4: "Los derechos de los titulares de patentes y marcas son esenciales para la protección de la propiedad industrial. Los titulares tienen el derecho exclusivo de utilizar, comercializar y explotar sus invenciones y marcas, y pueden otorgar licencias a terceros para su uso. Esto les proporciona una ventaja competitiva en el mercado y les permite recuperar la inversión realizada en investigación y desarrollo. Además, la ley protege a los titulares contra la competencia desleal y el uso no autorizado de sus derechos.",
  text5: "Las sanciones por incumplimiento de la Ley de Propiedad Industrial pueden ser severas. Las infracciones pueden dar lugar a multas económicas, así como a la obligación de indemnizar a los titulares de derechos afectados. En casos de violaciones graves, como la falsificación de marcas o la utilización indebida de patentes, se pueden imponer penas de cárcel a los infractores. Estas sanciones están diseñadas para disuadir las violaciones a la ley y proteger los derechos de los creadores e innovadores en México.",
  im1: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBxOGZrOWZ2dGVzZnJiaXpmcHRjcGptbDl2OWxjcGh5Ym94MDYwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYwJIOZEbRbx4ha/giphy.webp",
  im2: "https://lh4.googleusercontent.com/proxy/EJ3o-qA7gdjzVsymoN75LLqnk9Zo-EVV2BRQQzPhI-moIIeSZHXy7QyoeV-41gWmDlcQu_dFQz5qdQWU4bOagdw6aSzCpQGdcHK5q5ETN9Hvt3C5aw8l_lzlpsFPctkQFooVgF76hWffkYkd7g"
},

{
  title: "Ley Federal de Derechos de Autor",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Derechos de los Autores",
  title5: "Sanciones",
  text: "La Ley Federal de Derechos de Autor protege las obras literarias, artísticas y científicas en México, asegurando los derechos de los creadores sobre sus obras.",
  text1: "La Ley Federal de Derechos de Autor es una legislación que protege las obras originales de autores en diversos campos, como la literatura, la música, el cine y las artes visuales. Su objetivo es salvaguardar los derechos morales y patrimoniales de los creadores, otorgándoles el reconocimiento y la remuneración que merecen por su trabajo. La ley busca fomentar la creación artística y cultural, asegurando que los autores tengan control sobre la difusión y explotación de sus obras.",
  text2: "El objetivo principal de esta ley es garantizar que los autores mantengan el derecho exclusivo sobre la reproducción, distribución y comunicación pública de sus obras. Esto significa que los creadores pueden decidir cómo y cuándo se utilizan sus obras, evitando que otros las utilicen sin su permiso. La ley también establece procedimientos para la cesión de derechos y la protección de las obras frente a usos no autorizados, fomentando un entorno en el que la creatividad puede prosperar.",
  text3: "El alcance de la Ley Federal de Derechos de Autor es amplio, abarcando todas las obras que sean originales y expresadas en cualquier forma, incluyendo libros, música, películas, software y obras de arte. La ley protege tanto a los autores nacionales como a los extranjeros que publiquen sus obras en México, garantizando que se respete su derecho de autor en el país. Además, la ley establece excepciones y limitaciones para el uso de obras, permitiendo ciertos usos sin la necesidad de autorización previa, como la cita de obras o el uso educativo.",
  text4: "Los derechos de los autores son fundamentales para esta ley. Los creadores tienen derechos morales, que incluyen el derecho a ser reconocidos como autores de sus obras y a oponerse a modificaciones que puedan perjudicar su honor o reputación. También tienen derechos patrimoniales, que les permiten obtener beneficios económicos por la explotación de sus obras. Estos derechos son transferibles y pueden ser objeto de licencias, asegurando que los autores puedan negociar los términos de uso de sus obras.",
  text5: "El incumplimiento de la Ley Federal de Derechos de Autor puede acarrear sanciones severas. Las infracciones pueden resultar en multas económicas significativas y en la obligación de indemnizar a los titulares de derechos afectados. En casos de infracción deliberada, como la piratería o la reproducción no autorizada de obras, se pueden imponer penas de cárcel a los infractores. Estas sanciones buscan proteger los derechos de los autores y garantizar que se respete su trabajo creativo en México.",
  im1: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHg0dTI5bzZsMGFkNnRlbW1ocm95MHg5d3o0MW9xYWd2Z2gwMThsZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PKciromaKecxy/giphy.webp",
  im2: "https://static.wixstatic.com/media/770026_66b530e617884a189776f623774d8e90~mv2.png/v1/fill/w_505,h_194,al_c,lg_1,q_85,enc_auto/770026_66b530e617884a189776f623774d8e90~mv2.png",
},

{
  title: "Ley Federal de Datos Personales en Posesión de Particulares",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Derechos de los Titulares",
  title5: "Sanciones",
  text: "La Ley Federal de Datos Personales en Posesión de Particulares regula el tratamiento de datos personales por parte de entidades privadas en México, promoviendo la transparencia y la protección de la información.",
  text1: "La Ley Federal de Datos Personales en Posesión de Particulares es una normativa que tiene como objetivo regular el tratamiento de datos personales que realizan las personas físicas o morales en su calidad de particulares. Esta ley establece principios y obligaciones para la recolección, uso, almacenamiento y protección de datos personales, asegurando que los titulares de la información tengan control sobre sus datos y sean informados sobre cómo se utilizan. La ley busca promover la confianza en el uso de datos personales en el ámbito privado.",
  text2: "El objetivo principal de esta ley es garantizar la protección de los datos personales de los individuos y fomentar la transparencia en su tratamiento por parte de las entidades privadas. Esto implica que las organizaciones deben obtener el consentimiento de los titulares antes de recopilar y utilizar sus datos, así como informarles sobre los fines del tratamiento. La ley también establece medidas de seguridad para proteger los datos personales de accesos no autorizados y de usos indebidos.",
  text3: "El alcance de la Ley Federal de Datos Personales en Posesión de Particulares es extenso, aplicándose a todas las entidades privadas que manejan datos personales de individuos en México. Esto incluye empresas de todos los tamaños y sectores, así como organizaciones sin fines de lucro. La ley protege una amplia gama de datos personales, desde información básica como nombre y dirección hasta datos sensibles como información de salud o datos financieros. Además, establece procedimientos claros para la transferencia de datos personales a terceros.",
  text4: "Los derechos de los titulares son fundamentales en esta ley. Los individuos tienen derecho a acceder a sus datos personales, rectificarlos si son inexactos, cancelarlos cuando ya no sean necesarios, y oponerse a su tratamiento en ciertas circunstancias. La ley también garantiza el derecho a la portabilidad de los datos, permitiendo a los titulares trasladar su información entre diferentes proveedores de servicios. Estas disposiciones otorgan a los individuos un mayor control sobre su información personal y promueven la transparencia en su manejo.",
  text5: "Las sanciones por incumplimiento de la Ley Federal de Datos Personales en Posesión de Particulares pueden ser significativas. Las infracciones pueden resultar en multas económicas y en la obligación de indemnizar a los titulares de derechos afectados. En casos graves, como el tratamiento indebido de datos sensibles o la falta de medidas de seguridad adecuadas, las sanciones pueden incluir la inhabilitación de los responsables y acciones legales adicionales. Estas disposiciones buscan garantizar el cumplimiento de la ley y proteger los derechos de los titulares en el manejo de su información.",
  im1: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczMzc281YTY1cnlxcXpwcXNza3h3eGJianY4Y2s5d3kyczJqOG9xeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/110YfuwtzXGaaI/giphy.webp",
  im2: "https://blog.maatai.com/wp-content/uploads/2020/04/LFPPD.png"
},

{
  title: "Código Penal Federal",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Delitos",
  title5: "Sanciones",
  text: "El Código Penal Federal establece las normas que regulan los delitos y las penas en México, buscando la justicia y la protección de la sociedad.",
  text1: "El Código Penal Federal es la legislación que define los delitos y las penas que se aplican a quienes los cometen. Esta normativa establece un marco legal que busca proteger a los ciudadanos y garantizar la justicia. A través de sus disposiciones, se regula la conducta delictiva, estableciendo qué actos son considerados delitos y qué consecuencias legales enfrentan quienes los cometen.",
  text2: "El objetivo del Código Penal es mantener el orden y la seguridad en la sociedad, al mismo tiempo que se protege a las víctimas de delitos. Busca prevenir la criminalidad y asegurar que quienes violen la ley enfrenten sanciones apropiadas. Además, promueve la rehabilitación de los infractores para evitar la reincidencia y facilitar su reintegración a la sociedad.",
  text3: "El alcance del Código Penal Federal se extiende a todo el territorio mexicano y aplica a todas las personas, independientemente de su nacionalidad. Incluye disposiciones sobre delitos comunes, delitos graves y delitos especiales, así como el procedimiento penal a seguir en cada caso. Este código también establece la posibilidad de que ciertos delitos sean juzgados en tribunales militares en situaciones específicas.",
  text4: "Los delitos tipificados en el Código Penal abarcan una amplia variedad de conductas, desde delitos contra la vida y la integridad física, hasta delitos patrimoniales y delitos contra la administración pública. Cada delito está acompañado de una descripción clara de sus elementos constitutivos y de las penas aplicables, lo que permite a las autoridades judiciales aplicar la ley de manera justa y equitativa.",
  text5: "Las sanciones establecidas en el Código Penal pueden incluir penas de prisión, multas y otras medidas de seguridad, dependiendo de la gravedad del delito. Las penas pueden ser privativas de libertad, que van desde unos días hasta varios años, así como sanciones económicas. Además, el código contempla la posibilidad de penas accesorias, como la inhabilitación para ejercer ciertos derechos o funciones.",
  im1: "https://segucorpblog.wordpress.com/wp-content/uploads/2017/06/giphy-61.gif?w=1086",
  im2: "https://cdn.kobo.com/book-images/a0ff83f4-6bbc-423c-8a01-3ff8ee54b579/1200/1200/False/codigo-penal-federal-1.jpg"
},

{
  title: "Ley General de Transparencia y Acceso a la Información",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Alcance",
  title4: "Derechos de los Ciudadanos",
  title5: "Sanciones",
  text: "La Ley General de Transparencia y Acceso a la Información regula el derecho de acceso a la información pública en México, promoviendo la transparencia en la administración pública.",
  text1: "La Ley General de Transparencia y Acceso a la Información es una normativa que establece las bases para garantizar el acceso a la información pública a todos los ciudadanos. Esta ley busca promover la transparencia en el ejercicio de la función pública y garantizar que los ciudadanos tengan acceso a la información que generan las entidades gubernamentales. Su objetivo es fomentar la rendición de cuentas y combatir la corrupción.",
  text2: "El objetivo principal de esta ley es garantizar que la información en poder de las autoridades sea pública, accesible y transparente. Esto incluye la obligación de las instituciones públicas de publicar información relevante sobre su gestión, recursos y decisiones. La ley también establece procedimientos claros para que los ciudadanos puedan solicitar información y recibir respuestas oportunas por parte de las autoridades.",
  text3: "El alcance de la Ley General de Transparencia se extiende a todas las entidades de la administración pública, tanto federal como estatal y municipal. También aplica a organismos autónomos, partidos políticos y fideicomisos. La ley establece criterios específicos sobre qué información debe ser considerada pública y cuáles son las excepciones a este principio, como información que pudiera poner en riesgo la seguridad nacional o la privacidad de los ciudadanos.",
  text4: "Los derechos de los ciudadanos bajo esta ley incluyen el derecho a solicitar y recibir información pública de manera gratuita y sin necesidad de justificar su solicitud. Además, se establece el derecho a impugnar respuestas negativas a solicitudes de información y a recibir información clara y comprensible. Estos derechos promueven la participación ciudadana y el control social sobre la gestión pública.",
  text5: "Las sanciones por incumplimiento de la Ley General de Transparencia pueden incluir multas económicas y otras medidas administrativas para las entidades que no cumplan con las obligaciones de transparencia. Los funcionarios responsables de la falta de transparencia también pueden enfrentar sanciones, que van desde amonestaciones hasta inhabilitación para ejercer cargos públicos. Estas sanciones buscan asegurar que las instituciones cumplan con su obligación de ser transparentes ante la ciudadanía.",
  im1: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3dqcWtiMDcwcGFmMWIzdnVtOW5xdm1vMTlrMWYxOHNnZnp6bmpvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i6uRamLvdwrXarK855/giphy.webp",
  im2: "https://idaip.org.mx/bibliotecadigital/wp-content/uploads/2021/10/Ley_General_de_Transparencia_Comentada.jpg"
},

{
  title: "Criptografía Simétrica",
  title1: "Definición",
  title2: "Principio de Funcionamiento",
  title3: "Ventajas",
  title4: "Desventajas",
  title5: "Aplicaciones",
  text: "La criptografía simétrica utiliza la misma clave para cifrar y descifrar la información, garantizando la confidencialidad de los datos.",
  text1: "La criptografía simétrica es un método de cifrado donde la misma clave es utilizada tanto para cifrar como para descifrar información. Este tipo de criptografía es fundamental en la protección de datos, ya que permite asegurar que solo aquellas partes que poseen la clave correcta puedan acceder a la información original. La clave debe ser mantenida en secreto entre las partes que desean comunicarse de forma segura.",
  text2: "El principio de funcionamiento de la criptografía simétrica se basa en algoritmos matemáticos que transforman la información legible (texto plano) en un formato ilegible (texto cifrado) utilizando una clave. El proceso de cifrado asegura que, sin la clave, los datos sean prácticamente imposibles de recuperar. Los algoritmos comunes utilizados en criptografía simétrica incluyen AES (Advanced Encryption Standard) y DES (Data Encryption Standard).",
  text3: "Entre las ventajas de la criptografía simétrica se encuentran su velocidad de procesamiento y su eficiencia en comparación con la criptografía asimétrica. Dado que se utiliza la misma clave para cifrar y descifrar, el proceso es rápido y consume menos recursos, lo que la hace adecuada para el cifrado de grandes volúmenes de datos. Además, es relativamente fácil de implementar y utilizar en diversas aplicaciones.",
  text4: "Sin embargo, la criptografía simétrica también presenta desventajas. La principal es la necesidad de que la clave se comparta de manera segura entre las partes involucradas. Si la clave es interceptada o comprometida, la seguridad de la comunicación se ve en peligro. Además, la gestión de claves puede ser complicada en sistemas donde se requiere una comunicación segura entre múltiples usuarios, ya que cada par de usuarios necesita una clave única.",
  text5: "Las aplicaciones de la criptografía simétrica son diversas e incluyen la protección de datos en redes, el cifrado de archivos y la seguridad en sistemas de mensajería. También se utiliza en protocolos de seguridad, como SSL/TLS, para asegurar las comunicaciones en Internet. Su rapidez y eficiencia la convierten en una opción popular en entornos donde la seguridad y la velocidad son esenciales.",
  im1: "https://lh3.googleusercontent.com/proxy/yt3QVrYUAm6p5qWYM2361BhkTjsfNFh9Iz7j5d0lsbRftBxuUj5c60M3juZwJx1maUbkxK4uKYZNGHMiJro",
  im2: "https://juncotic.com/wp-content/uploads/2022/08/criptosystem.jpg"
},

{
  title: "Criptografía Asimétrica",
  title1: "Definición",
  title2: "Principio de Funcionamiento",
  title3: "Ventajas",
  title4: "Desventajas",
  title5: "Aplicaciones",
  text: "La criptografía asimétrica utiliza un par de claves, una pública y otra privada, para cifrar y descifrar información, facilitando la comunicación segura.",
  text1: "La criptografía asimétrica es un método de cifrado que utiliza dos claves diferentes: una clave pública y una clave privada. La clave pública se utiliza para cifrar la información, mientras que la clave privada se utiliza para descifrarla. Este enfoque permite que cualquier persona pueda enviar información segura a un destinatario específico, sin necesidad de compartir previamente una clave secreta, lo que facilita la comunicación segura en entornos abiertos.",
  text2: "El principio de funcionamiento de la criptografía asimétrica se basa en algoritmos matemáticos complejos que generan un par de claves interrelacionadas. La seguridad de este método radica en la dificultad de calcular la clave privada a partir de la clave pública. Algoritmos como RSA (Rivest-Shamir-Adleman) y ECC (Elliptic Curve Cryptography) son ejemplos populares de criptografía asimétrica, ampliamente utilizados para la transmisión segura de datos.",
  text3: "Las ventajas de la criptografía asimétrica incluyen la eliminación de la necesidad de compartir claves secretas, lo que reduce el riesgo de interceptación durante la transmisión. También permite la autenticación de los remitentes mediante el uso de firmas digitales, garantizando la integridad y la autenticidad de los mensajes. Además, la criptografía asimétrica es especialmente útil en aplicaciones donde se requiere seguridad a largo plazo, como en el almacenamiento de datos sensibles.",
  text4: "Por otro lado, la criptografía asimétrica presenta desventajas, principalmente su lentitud en comparación con la criptografía simétrica. Los algoritmos asimétricos requieren más tiempo y recursos computacionales para procesar datos, lo que puede ser un inconveniente en aplicaciones que requieren un cifrado rápido. Además, la gestión de claves públicas y privadas puede ser compleja y requerir sistemas adicionales para garantizar su seguridad.",
  text5: "Las aplicaciones de la criptografía asimétrica son variadas e incluyen el cifrado de correos electrónicos, la autenticación de usuarios en redes y la protección de comunicaciones en línea. También es fundamental en el funcionamiento de protocolos de seguridad como SSL/TLS, que aseguran las conexiones en Internet. Su capacidad para proporcionar autenticación y confidencialidad la convierte en una herramienta esencial en la seguridad digital.",
  im1: "https://mantimantilla.github.io/Theory-of-Computation-Encryption/_images/Animacion-7.gif",
  im2: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Firma_Digital_Asim%C3%A9trica.png"
},

{
  title: "Cifrado por Bloques",
  title1: "Definición",
  title2: "Principio de Funcionamiento",
  title3: "Ventajas",
  title4: "Desventajas",
  title5: "Aplicaciones",
  text: "El cifrado por bloques transforma datos en bloques de tamaño fijo, aplicando un algoritmo de cifrado a cada bloque de manera individual.",
  text1: "El cifrado por bloques es un método de criptografía que divide la información en bloques de tamaño fijo antes de aplicar un algoritmo de cifrado. Cada bloque se cifra de manera independiente utilizando una clave específica, lo que proporciona una capa adicional de seguridad. Los algoritmos de cifrado por bloques suelen trabajar con bloques de 64 o 128 bits, y son ampliamente utilizados en diversas aplicaciones de seguridad.",
  text2: "El principio de funcionamiento del cifrado por bloques consiste en tomar un bloque de datos, aplicar una serie de transformaciones y sustituciones, y generar un bloque cifrado. Este proceso se repite para cada bloque de datos hasta que toda la información se ha cifrado. Algunos de los algoritmos más conocidos en este tipo de cifrado incluyen AES (Advanced Encryption Standard), DES (Data Encryption Standard) y Blowfish.",
  text3: "Las ventajas del cifrado por bloques incluyen su robustez en la protección de datos, ya que cada bloque se cifra por separado, lo que dificulta el análisis y la recuperación de la información original sin la clave. Además, permite la implementación de técnicas de cifrado paralelo, mejorando la velocidad de cifrado en sistemas de alto rendimiento. También es flexible en cuanto a los tamaños de bloque, adaptándose a diferentes necesidades.",
  text4: "Sin embargo, el cifrado por bloques también tiene desventajas. Uno de los principales problemas es la posibilidad de patrones en los datos cifrados, que podrían ser explotados en ataques de criptoanálisis. Además, si se utilizan modos de operación inadecuados, puede haber riesgos de seguridad, como el ataque de repetición. La gestión de claves también puede volverse compleja en sistemas donde se manejan múltiples claves y algoritmos.",
  text5: "Las aplicaciones del cifrado por bloques son numerosas e incluyen la protección de datos en redes, el cifrado de archivos y la seguridad en sistemas de mensajería. Es utilizado en protocolos de seguridad, como SSL/TLS, para asegurar las comunicaciones en Internet. Su eficacia y robustez lo convierten en una opción popular para la protección de información sensible.",
  im1: "https://juncotic.com/wp-content/uploads/2022/09/ctr.jpg",
  im2: "https://iberasync.es/wp-content/uploads/2022/04/image.png"
},

{
  title: "Cifrado por Flujo",
  title1: "Definición",
  title2: "Principio de Funcionamiento",
  title3: "Ventajas",
  title4: "Desventajas",
  title5: "Aplicaciones",
  text: "El cifrado por flujo cifra los datos de manera continua, transformando flujos de información en tiempo real utilizando un algoritmo de cifrado.",
  text1: "El cifrado por flujo es un método de criptografía que cifra los datos de manera continua, en lugar de procesarlos en bloques. Este enfoque permite que la información sea cifrada en tiempo real a medida que se recibe, lo que resulta ideal para aplicaciones que requieren comunicación en vivo, como la transmisión de datos en redes. Los algoritmos de cifrado por flujo generan un flujo de claves que se combinan con los datos originales para producir el texto cifrado.",
  text2: "El principio de funcionamiento del cifrado por flujo se basa en el uso de un generador de claves que produce una secuencia de bits clave que se combinan con el flujo de datos. Esta combinación se realiza mediante operaciones de XOR, lo que permite que cada bit de datos sea cifrado de forma individual. Algunos de los algoritmos de cifrado por flujo más conocidos incluyen RC4 y Salsa20.",
  text3: "Las ventajas del cifrado por flujo incluyen su alta velocidad y eficiencia, ya que permite cifrar y descifrar datos en tiempo real sin necesidad de esperar a que se acumulen bloques completos de información. También es menos susceptible a ciertos tipos de ataques que pueden afectar a los cifrados por bloques. Esta naturaleza continua lo hace adecuado para aplicaciones en streaming y comunicaciones en vivo.",
  text4: "Sin embargo, el cifrado por flujo presenta desventajas, como su vulnerabilidad a ataques si no se utilizan técnicas adecuadas de gestión de claves. Un error en la clave puede comprometer todo el flujo de datos, lo que hace que la seguridad sea crítica en su implementación. Además, el cifrado por flujo generalmente no ofrece la misma robustez que los algoritmos de cifrado por bloques, lo que puede ser un inconveniente en ciertos contextos de seguridad.",
  text5: "Las aplicaciones del cifrado por flujo son variadas e incluyen la protección de datos en tiempo real, como en la transmisión de audio y video, así como en protocolos de comunicación segura. Es utilizado en sistemas de mensajería instantánea y en entornos donde la latencia es crítica, ya que permite la transmisión rápida y segura de información.",
  im1: "https://www.researchgate.net/publication/333701648/figure/fig2/AS:999683044429825@1615354419373/Figura-1-Esquema-general-del-Cifrado-de-Flujo.ppm",
  im2: "https://upload.wikimedia.org/wikipedia/commons/5/5e/A5-1_GSM_cipher.svg"
},

{
  title: "Criptoanálisis",
  title1: "Definición",
  title2: "Objetivo",
  title3: "Métodos",
  title4: "Importancia",
  title5: "Desafíos",
  text: "El criptoanálisis es el estudio de técnicas para descifrar mensajes sin conocer la clave de cifrado. Se utiliza para evaluar la seguridad de los sistemas criptográficos y encontrar vulnerabilidades que puedan ser explotadas por atacantes.",
  text1: "El criptoanálisis se define como la ciencia que se encarga de analizar y romper los sistemas criptográficos. A través de diversas técnicas, los criptoanalistas buscan obtener información confidencial que ha sido cifrada, sin tener acceso a la clave de cifrado utilizada para proteger dicha información. Esto es fundamental en el ámbito de la seguridad informática, donde la protección de datos sensibles es primordial.",
  text2: "El objetivo del criptoanálisis es evaluar la fortaleza de los algoritmos criptográficos y encontrar debilidades que puedan ser aprovechadas por un atacante. Al identificar estas vulnerabilidades, se pueden realizar mejoras en la criptografía utilizada, asegurando así una mayor protección de los datos. Además, el criptoanálisis es esencial para la defensa en situaciones de ciberseguridad, ya que permite anticipar posibles ataques.",
  text3: "Los métodos de criptoanálisis pueden clasificarse en varias categorías, que incluyen el criptoanálisis de clave pública, donde se explotan debilidades en el algoritmo de cifrado, y el análisis estadístico, que examina patrones en los datos cifrados. También existen técnicas de fuerza bruta, que implican probar todas las combinaciones posibles de claves hasta encontrar la correcta. Otros métodos incluyen el ataque de texto plano conocido, que utiliza fragmentos de texto en claro para deducir la clave.",
  text4: "La importancia del criptoanálisis radica en su capacidad para garantizar la seguridad de las comunicaciones y los datos en un mundo cada vez más digital. Al identificar y abordar vulnerabilidades en los sistemas criptográficos, se protege la integridad y confidencialidad de la información, lo cual es esencial para la confianza en servicios digitales como la banca en línea, el comercio electrónico y las comunicaciones personales.",
  text5: "Los desafíos en el criptoanálisis son numerosos, incluyendo la constante evolución de los algoritmos criptográficos y la sofisticación de las técnicas utilizadas por los atacantes. A medida que la tecnología avanza, también lo hacen las estrategias de cifrado y criptoanálisis, lo que requiere que los expertos en seguridad se mantengan actualizados sobre las últimas tendencias y desarrollos. Además, el uso de criptografía cuántica presenta nuevos retos, ya que esta tecnología tiene el potencial de desdibujar las líneas entre la criptografía clásica y los métodos de criptoanálisis.",
  im1: "https://iberasync.es/wp-content/uploads/2022/01/pexels-nothing-ahead-3729557-edited-scaled.jpg",
  im2: "https://cienciadedatos.weebly.com/uploads/1/9/1/8/19187949/ameyalli1_orig.png"
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
