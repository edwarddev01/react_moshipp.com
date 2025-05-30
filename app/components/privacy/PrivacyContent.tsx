import React from 'react';

const PrivacyContent: React.FC = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
        
        <p className="mb-6">
          Moshipp respeta su privacidad y se compromete a proteger los datos personales que recopilamos 
          de usted al utilizar nuestros servicios de hosting y registro de dominios web. Esta Política 
          de Privacidad describe cómo recopilamos, utilizamos, procesamos y protegemos su información 
          personal en cumplimiento con las leyes aplicables en Colombia.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Información que recopilamos</h2>
        <p className="mb-4">
          Cuando utiliza nuestros servicios de hosting y registro de dominios web, podemos recopilar 
          información personal, incluyendo su nombre, dirección, número de teléfono, dirección de correo 
          electrónico y detalles de pago. También podemos recopilar información sobre el uso que usted 
          hace de nuestros servicios, incluyendo su dirección IP, tipo de navegador, sistema operativo, 
          páginas visitadas y la fecha y hora de su visita.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Uso de la información</h2>
        <p className="mb-4">
          Utilizamos la información que recopilamos para proporcionar y mejorar nuestros servicios de 
          hosting y registro de dominios web, para procesar sus solicitudes y pagos, para comunicarnos 
          con usted sobre los servicios que ha adquirido y para enviarle información de marketing. 
          Además, utilizamos la información para proteger la seguridad y la integridad de nuestros 
          servicios y para cumplir con las leyes aplicables en Colombia.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Divulgación de información</h2>
        <p className="mb-4">
          Moshipp no divulgará su información personal a terceros sin su consentimiento, excepto cuando 
          sea necesario para cumplir con las leyes aplicables en Colombia, para proteger nuestros derechos 
          y propiedades, o en caso de una emergencia que amenace la seguridad de una persona.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Seguridad de la información</h2>
        <p className="mb-4">
          Moshipp se compromete a proteger la información personal que recopilamos mediante medidas de 
          seguridad físicas, técnicas y administrativas apropiadas. Sin embargo, tenga en cuenta que 
          ningún sistema de seguridad es completamente infalible y que no podemos garantizar la 
          seguridad absoluta de su información personal.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Derechos del titular de la información</h2>
        <p className="mb-4">
          Usted tiene el derecho de acceder, rectificar y eliminar su información personal que hayamos 
          recopilado. Además, puede solicitar que dejemos de utilizar su información personal para fines 
          de marketing. Para ejercer estos derechos, contáctenos en info@moshipp.com.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Modificaciones a la Política de Privacidad</h2>
        <p className="mb-4">
          Moshipp se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. 
          Cualquier modificación será efectiva inmediatamente después de su publicación en nuestro sitio web. 
          Es su responsabilidad revisar periódicamente esta Política de Privacidad para estar al tanto de 
          cualquier cambio.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Leyes Aplicables</h2>
        <p className="mb-4">
          Esta Política de Privacidad se regirá e interpretará de acuerdo con las leyes de Colombia. 
          Cualquier controversia que surja en relación con esta Política de Privacidad será sometida a 
          la jurisdicción exclusiva de los tribunales colombianos.
        </p>

        <div className="mt-8 border-t pt-4">
          <p className="text-sm text-gray-600">
            Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contáctenos en{' '}
            <a href="mailto:info@moshipp.com" className="text-blue-600 hover:underline">
              info@moshipp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;