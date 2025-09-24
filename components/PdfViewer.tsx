
import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <div>
      <p className="mb-4 text-slate-600">
        Para conocer todos los detalles, puedes consultar el documento completo de nuestra política de tratamiento de datos personales en formato PDF.
      </p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
      >
        Ver Documento Completo (PDF)
      </a>
    </div>
  );
};

export default PdfViewer;
