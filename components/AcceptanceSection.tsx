
import React from 'react';

interface AcceptanceSectionProps {
  onAccept: () => void;
}

const AcceptanceSection: React.FC<AcceptanceSectionProps> = ({ onAccept }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Declaración de Consentimiento</h2>
      <p className="text-slate-600 mb-6">
        Al hacer clic en "Acepto", declaro que he sido informado y autorizo de manera voluntaria, previa, explícita e inequívoca a <strong>Tu Empresa</strong> para el tratamiento de mis datos personales de acuerdo con la política presentada.
      </p>
      <button
        onClick={onAccept}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Acepto el tratamiento de datos personales
      </button>
    </div>
  );
};

export default AcceptanceSection;
