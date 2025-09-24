
import React from 'react';
import { CheckCircleIcon } from '../assets/icons';

const ConfirmationScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-center">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-md w-full animate-fade-in-up">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <CheckCircleIcon />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          ¡Gracias!
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Has aceptado el tratamiento de tus datos personales. Tu consentimiento ha sido registrado exitosamente.
        </p>
      </div>
       <style>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default ConfirmationScreen;
