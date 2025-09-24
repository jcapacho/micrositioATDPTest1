
import React from 'react';
import { ShieldCheckIcon } from '../assets/icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <ShieldCheckIcon />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Autorización de Tratamiento de Datos Personales
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Por favor, revisa la siguiente información antes de dar tu consentimiento.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
