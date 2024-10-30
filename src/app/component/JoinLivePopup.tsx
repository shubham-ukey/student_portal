// components/JoinLivePopup.tsx
import React from 'react';
import { FaUserFriends } from 'react-icons/fa'; // Use the same icon as the Join Live Class button

interface JoinLivePopupProps {
  onClose: () => void;
}

const JoinLivePopup: React.FC<JoinLivePopupProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={onClose} // Close on background click
    >
      <div 
        className="bg-gray-700 w-[346px] h-[170px] rounded-lg shadow-lg" 
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
      >
        <div className="flex flex-col justify-center items-center h-full p-4">
          <FaUserFriends size={30} className="text-gray-300 mb-3" /> {/* Updated icon */}
          <h3 className="text-lg font-bold text-white">No Live Classes</h3>
          <p className="text-sm text-gray-300 text-center">You have no live classes scheduled for today.</p>
        </div>
      </div>
    </div>
  );
};

export default JoinLivePopup;
