
import React from 'react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, children }) => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200">
      <div className="flex items-center mb-4">
        <div className="text-blue-500">{icon}</div>
        <h2 className="ml-3 text-xl font-semibold text-slate-800">{title}</h2>
      </div>
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
};

export default Section;
