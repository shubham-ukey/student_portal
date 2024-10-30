import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string;
  onClose: () => void;
  subject: string;
  chapter: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoSrc, onClose, subject, chapter }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div
        className="bg-blue-600 relative p-4 rounded-lg"
        style={{
          width: '80%',        // Adjusted to be more responsive
          maxWidth: '1119px',   // Restrict maximum width
          borderRadius: '28px',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold"
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <p className=" font-semibold mb-2 text-center">{subject}</p>
          <h1 className="text-xl font-bold mb-4 text-center">{chapter}</h1>
        </div>
        <iframe
          width="100%"
          height="500"   // Height for the video display
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
