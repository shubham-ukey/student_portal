import React from 'react';

interface NotificationProps {
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
      onClick={handleOutsideClick}
    >
      {/* Notification Bar positioned 10px above the Modal Box */}
      <div className="relative w-full max-w-md mx-4 flex flex-col items-center">
        {/* Notification Bar */}
        <div className="bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md flex items-center mb-2">
          <span>🔔</span>
          <span className="ml-2">Class / Math is starting in 1 hour, 34 minutes.</span>
        </div>

        {/* Modal Box */}
        <div className="bg-white w-full p-8 rounded-lg shadow-lg text-center mt-2">
          {/* Main Notification Text */}
          <p className="text-blue-700 font-semibold text-lg">
            You can join the live class 5 minutes before it starts. Please wait.
          </p>

          {/* Okay Button */}
          <button
            onClick={onClose}
            className="mt-6 bg-blue-600 text-white py-2 px-8 rounded-full hover:bg-blue-500 transition duration-300 text-sm font-semibold"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
