
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import AudioPlayer from './components/AudioPlayer';
import PdfViewer from './components/PdfViewer';
import AcceptanceSection from './components/AcceptanceSection';
import ConfirmationScreen from './components/ConfirmationScreen';
import Section from './components/Section';
import { VideoIcon, AudioIcon, DocumentIcon } from './assets/icons';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
  };
  
  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
  }

  if (isAccepted) {
    return <ConfirmationScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-500">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <Section icon={<VideoIcon />} title="Resumen en Video">
            <VideoPlayer videoId="dQw4w9WgXcQ" />
          </Section>

          <Section icon={<AudioIcon />} title="Resumen en Audio">
            {/* Using a placeholder URL for the audio file */}
            <AudioPlayer audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          </Section>

          <Section icon={<DocumentIcon />} title="Documento Completo">
             {/* Using a placeholder URL for the PDF file */}
            <PdfViewer pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
          </Section>
          
          <AcceptanceSection onAccept={handleAccept} />
        </div>
      </main>
      <footer className="text-center py-6 mt-12 text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        <p>Plataforma de Consentimiento Digital</p>
      </footer>
    </div>
  );
};

export default App;
