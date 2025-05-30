import React from 'react';

const TermsContent: React.FC = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Términos de servicio</h1>
      
      <div className="prose ">
        <p className="mb-4">
          Bienvenido a Moshipp, una plataforma de hosting y dominios web. Al utilizar nuestros servicios, 
          usted acepta los siguientes términos y condiciones:
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Servicios de Hosting</h2>
        <p className="mb-4">
          Moshipp proporciona servicios de alojamiento de sitios web. Usted acepta que es responsable de 
          todo el contenido que se aloja en nuestros servidores, incluyendo, pero no limitado a, imágenes, 
          videos, archivos y documentos. Además, se compromete a no utilizar nuestros servicios para almacenar, 
          distribuir o difundir cualquier material ilegal, difamatorio, fraudulento, obsceno o que infrinja 
          derechos de autor.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Servicios de Dominio</h2>
        <p className="mb-4">
          Moshipp proporciona servicios de registro de dominios web. Al utilizar nuestros servicios de registro 
          de dominios, usted acepta cumplir con las políticas de registro establecidas por la Corporación de 
          Internet para la Asignación de Nombres y Números (ICANN) y los organismos reguladores de Colombia. 
          Además, se compromete a proporcionar información precisa y actualizada en el proceso de registro y 
          mantenerla actualizada durante la duración del registro.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Servicios de VPS y Hosting Empresarial</h2>
        <p className="mb-4">
          Moshipp ofrece soluciones de hosting empresarial y servidores privados virtuales (VPS) diseñados 
          para satisfacer necesidades específicas de empresas. Usted acepta que es responsable de la configuración, 
          mantenimiento y seguridad de los servidores VPS contratados, así como de garantizar que los datos 
          almacenados en dichos servidores sean gestionados de acuerdo con las leyes y regulaciones aplicables.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">4. Servicios de Email Corporativo</h2>
        <p className="mb-4">
          Los servicios de email corporativo ofrecidos por Moshipp incluyen correo electrónico corporativo con 
          Workspace y Microsoft 365. Usted acepta utilizar estos servicios únicamente para fines legítimos y 
          no para el envío de spam, mensajes no solicitados o cualquier otro tipo de comunicación que infrinja 
          las leyes aplicables de privacidad y protección de datos.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">5. Uso Aceptable</h2>
        <p className="mb-4">
          Usted acepta utilizar nuestros servicios de manera responsable y respetuosa con los derechos de otros 
          usuarios y terceros. Se compromete a no utilizar nuestros servicios para realizar actividades ilegales, 
          fraudulentas o dañinas, tales como la distribución de virus, correo no solicitado, spam, ataques de 
          denegación de servicio (DoS), ataques de fuerza bruta, entre otros.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Suspensión o Cancelación de Servicios</h2>
        <p className="mb-4">
          Moshipp se reserva el derecho de suspender o cancelar sus servicios en caso de violación de estos 
          términos y condiciones. Esto incluye, pero no se limita a, actividades ilegales, uso de los servicios 
          para enviar spam, distribución de material malicioso, o no pago de los servicios contratados.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">7. Copias de Seguridad y Restauración de Datos</h2>
        <p className="mb-4">
          Moshipp no es responsable de la pérdida de datos. Es responsabilidad de cada cliente crear y mantener 
          copias de seguridad externas de sus datos y archivos alojados en nuestros servidores.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">8. Garantías y Limitación de Responsabilidad</h2>
        <p className="mb-4">
          Moshipp no garantiza la disponibilidad ininterrumpida de nuestros servicios. En ningún caso Moshipp 
          será responsable de los daños directos, indirectos, incidentales, consecuentes o especiales que puedan 
          surgir del uso de nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">9. Modificaciones a los Términos y Condiciones</h2>
        <p className="mb-4">
          Moshipp se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
          Cualquier modificación será efectiva inmediatamente después de su publicación en nuestro sitio web.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">10. Protección de Datos Personales</h2>
        <p className="mb-4">
          Moshipp cumple con las leyes de protección de datos aplicables en Colombia y respeta la privacidad 
          de sus usuarios. Al utilizar nuestros servicios, usted acepta que sus datos personales sean 
          procesados de acuerdo con nuestra política de privacidad.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">11. Fuerza Mayor</h2>
        <p className="mb-4">
          Moshipp no será responsable de cualquier fallo o retraso en la prestación de servicios debido a 
          causas fuera de su control, incluyendo pero no limitado a, desastres naturales, fallos en las 
          infraestructuras de telecomunicaciones, interrupciones de energía, conflictos laborales, o 
          cualquier otra causa de fuerza mayor.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">12. Leyes Aplicables y Jurisdicción</h2>
        <p className="mb-4">
          Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia. 
          Cualquier controversia que surja en relación con estos términos y condiciones será sometida a 
          la jurisdicción exclusiva de los tribunales colombianos.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">13. Política de Uso de Recursos del Servidor</h2>
        <p className="mb-4">
          Moshipp tiene políticas para garantizar el buen funcionamiento de sus servidores y recursos. 
          Los clientes que utilicen un uso excesivo de recursos del servidor pueden estar sujetos a 
          restricciones o cargos adicionales.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">14. Licencias y Propiedad Intelectual</h2>
        <p className="mb-4">
          Todos los derechos sobre los servicios proporcionados por Moshipp, incluyendo el software, 
          interfaces, logotipos y materiales relacionados, son propiedad de Moshipp o de los proveedores 
          de licencias correspondientes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">15. Responsabilidad de los Clientes en la Seguridad</h2>
        <p className="mb-4">
          El cliente es responsable de la seguridad de sus credenciales, contraseñas y cuentas en los 
          servicios de Moshipp. Debe tomar medidas razonables para evitar accesos no autorizados.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">16. Política de Reembolsos y Cancelación de Servicios</h2>
        <p className="mb-4">
          Moshipp ofrece un período de reembolso de 10 días para nuevos clientes que no estén satisfechos 
          con los servicios contratados. Las solicitudes de reembolso deben realizarse dentro del período 
          especificado.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">17. Política de Soporte Técnico</h2>
        <p className="mb-4">
          Moshipp proporciona soporte técnico a través de info@moshipp.com o ticket desde el area de 
          clientes, durante las horas laborales.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">18. Restricciones de Uso</h2>
        <p className="mb-4">
          Usted se compromete a no utilizar los servicios de Moshipp para la distribución de material que 
          viole leyes locales, nacionales o internacionales.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">19. Transferencia de Servicios</h2>
        <p className="mb-4">
          El cliente puede solicitar la transferencia de su servicio a otro titular, sujeto a la aprobación 
          de Moshipp.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">20. Suspensión de Servicios por Incumplimiento</h2>
        <p className="mb-4">
          Moshipp se reserva el derecho de suspender temporalmente los servicios del cliente sin previo 
          aviso si se detecta un incumplimiento grave de estos términos.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">21. Notificaciones</h2>
        <p className="mb-4">
          Cualquier notificación o comunicación relacionada con estos términos y condiciones debe enviarse 
          por escrito a las direcciones de contacto proporcionadas por ambas partes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">22. Resolución de Conflictos y Arbitraje</h2>
        <p className="mb-4">
          Cualquier disputa relacionada con estos términos y condiciones será resuelta preferentemente 
          mediante arbitraje en lugar de litigio judicial.
        </p>

        <div className="mt-8 border-t pt-4">
          <p className="text-sm text-gray-600">
            Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, por favor contáctenos en{' '}
            <a href="mailto:info@moshipp.com" className="text-blue-600 hover:underline">
              info@moshipp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;