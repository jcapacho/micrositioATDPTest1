
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div>
      <p className="mb-4 text-slate-600">
        Hemos preparado un video corto que explica de manera clara y sencilla cómo manejamos tus datos.
      </p>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-md border">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
