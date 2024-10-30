// components/QuickLinks.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaChalkboardTeacher, FaUserFriends, FaEnvelope } from 'react-icons/fa';
import JoinLivePopup from './JoinLivePopup';

const QuickLinks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <h2 className="text-2xl font-bold mt-4 mb-4" style={{ fontFamily: 'Outfit', color: '#3A3A3A' }}>Quick Links</h2>
      <div className="space-y-6">
        
        {/* Canvas LMS */}
        <Link href="/lms" passHref>
          <div className="w-full md:w-[400px] h-[200px] mt-10 rounded-[20px] bg-[#4749B3] text-white flex flex-col justify-center items-center p-4 shadow-lg cursor-pointer transition duration-300 transform hover:bg-white group mb-6">
            <FaChalkboardTeacher size={30} className="mb-2 group-hover:text-[#4749B3]" />
            <span className="text-lg font-bold group-hover:text-[#4749B3]">Canvas LMS</span>
            <span className="text-xs mt-2 text-center group-hover:text-[#4749B3] hidden sm:block">
              Click here to access your LMS portal for assignments, class recordings, and notes.
            </span>
          </div>
        </Link>

        {/* Join Live Class */}
        <div onClick={openPopup} className=" w-full md:w-[400px] h-[200px]  rounded-[20px] bg-[#E66DFF] text-white flex flex-col justify-center items-center p-4 shadow-lg cursor-pointer transition duration-300 transform hover:bg-white group">
          <FaUserFriends size={30} className="mb-2 group-hover:text-[#E66DFF]" />
          <span className="text-lg font-bold group-hover:text-[#E66DFF]">Join Live Class</span>
          <span className="text-xs mt-2 text-center group-hover:text-[#E66DFF] hidden sm:block">
            Click here to join your live class session. Please do not share this link.
          </span>
        </div>

        {/* Contact Teacher */}
        <Link href="/contact-teacher" passHref>
          <div className="w-full mt-6 md:w-[400px] h-[200px] rounded-[20px] bg-[#6669FE] text-white flex flex-col justify-center items-center p-4 shadow-lg cursor-pointer mb-6 transition duration-300 transform hover:bg-white group">
            <FaEnvelope size={30} className="mb-2 group-hover:text-[#6669FE]" />
            <span className="text-lg font-bold group-hover:text-[#6669FE]">Contact Teacher</span>
            <span className="text-xs mt-2 text-center group-hover:text-[#6669FE] hidden sm:block">
              Click here to contact your teacher for any doubts or concerns.
            </span>
          </div>
        </Link>
        
      </div>
      {/* Render the popup when isPopupOpen is true */}
      {isPopupOpen && <JoinLivePopup onClose={closePopup} />}
    </>
  );
};

export default QuickLinks;
