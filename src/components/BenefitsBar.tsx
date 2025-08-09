import React from 'react';
import { FaShippingFast, FaCreditCard } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const BenefitsBar = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Beneficio 1: Medios de envío */}
          <div className="flex flex-col items-center">
            <FaShippingFast className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medios de envío</h3>
            <p className="text-gray-600">Envios a todo el pais</p>
          </div>

          {/* Beneficio 2: Cuotas con débito y crédito */}
          <div className="flex flex-col items-center">
            <FaCreditCard className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cuotas con débito y crédito</h3>
            <p className="text-gray-600">3 y 6 sin interés - 4 sin interés Go Cuotas</p>
          </div>

          {/* Beneficio 3: Whatsapp */}
          <div className="flex flex-col items-center">
            <BsWhatsapp className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Whatsapp</h3>
            <p className="text-gray-600">Estamos para ayudarte! Escribinos</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsBar;