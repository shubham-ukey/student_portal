"use client";
import React, { useState } from 'react';
import Notification from './Notification'; // Adjust the path according to your file structure
import VideoModal from './VideoModal'; // Import the VideoModal component

const ClassRecordings = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentVideoSrc, setCurrentVideoSrc] = useState(""); // State for current video source
  const [currentSubject, setCurrentSubject] = useState(""); // State for current subject
  const [currentChapter, setCurrentChapter] = useState(""); // State for current chapter

  const recordings = [
    {
      subject: "Class 7 Math",
      title: "Algebraic Equations",
      date: "24th October, 2024",
      imageUrl: "/path/to/algebra-image.jpg",
      videoUrl: "https://www.youtube.com/embed/2e5dDI24tsI?si=nLhtTwfO1KK-zsbF", // Add video URL
    },
    {
      subject: "Class 7 Math",
      title: "Differential Maths",
      date: "24th October, 2024",
      imageUrl: "/path/to/differential-image.jpg",
      videoUrl: "https://www.youtube.com/embed/2e5dDI24tsI?si=nLhtTwfO1KK-zsbF", // Add video URL
    },
    {
      subject: "Class 7 Science",
      title: "Fundamentals of Organic Chemistry",
      date: "24th October, 2024",
      imageUrl: "/path/to/chemistry-image.jpg",
      videoUrl: "https://www.youtube.com/embed/2e5dDI24tsI?si=nLhtTwfO1KK-zsbF", // Add video URL
    },
    {
      subject: "Class 7 Math",
      title: "Trigonometry 101",
      date: "24th October, 2024",
      imageUrl: "/path/to/trigonometry-image.jpg",
      videoUrl: "https://www.youtube.com/embed/2e5dDI24tsI?si=nLhtTwfO1KK-zsbF", // Add video URL
    },
  ];

  const handleCloseNotification = () => {
    setShowNotification(false); // Close notification
  };

  const handleOpenModal = (videoUrl: string, subject: string, chapter: string) => {
    setCurrentVideoSrc(videoUrl); // Set the video URL
    setCurrentSubject(subject); // Set the subject
    setCurrentChapter(chapter); // Set the chapter
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentVideoSrc(""); // Clear the video URL
    setCurrentSubject(""); // Clear the subject
    setCurrentChapter(""); // Clear the chapter
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 mt-6" style={{ fontFamily: 'Outfit', color: '#3A3A3A' }}>
        Access Class Recordings
      </h2>

      {/* Notification Component */}
      {showNotification && <Notification onClose={handleCloseNotification} />}

      <div className="bg-white p-4 mt-4 rounded shadow">
        {/* Search bar */}
        <div className="relative mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search for class recordings"
            className="border border-gray-300 p-2 pl-10 rounded w-full"
            style={{ backgroundColor: '#4749B30D' }}
          />
        </div>

        {/* Filter options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <span className="font-medium text-gray-700 mb-1 md:mb-0">Filter by:</span>
          <div className="flex space-x-2">
            <select className="border border-gray-300 p-2 rounded" style={{ backgroundColor: '#4749B30D' }}>
              <option value="">This Week</option>
              <option value="week1">Week 1</option>
              <option value="week2">Week 2</option>
              <option value="week3">Week 3</option>
              <option value="week4">Week 4</option>
            </select>
            <select className="border border-gray-300 p-2 rounded" style={{ backgroundColor: '#4749B30D' }}>
              <option value="">All Subjects</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
          </div>
        </div>

        {/* Recordings list */}
        <div className="flex flex-col space-y-6">
          {recordings.map((recording, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex flex-col flex-grow">
                <span className={`font-semibold transition duration-300 ${index % 2 === 0 ? 'text-purple-600 hover:text-blue-600' : 'text-purple-600 hover:text-pink-500'}`}>
                  {recording.subject}
                </span>
                <h3 className={`text-lg font-bold mt-1 transition duration-300 ${index % 2 === 0 ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-pink-500'}`}>
                  {recording.title}
                </h3>
                <p className="text-sm text-gray-500">{recording.date}</p>
              </div>
              <img src={recording.imageUrl} alt={recording.title} className="h-24 w-24 md:h-32 md:w-32 rounded-md cursor-pointer" onClick={() => handleOpenModal(recording.videoUrl, recording.subject, recording.title)} />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoSrc={currentVideoSrc}
        onClose={handleCloseModal}
        subject={currentSubject} // Pass subject to VideoModal
        chapter={currentChapter} // Pass chapter to VideoModal
      />
    </>
  );
};

export default ClassRecordings;
