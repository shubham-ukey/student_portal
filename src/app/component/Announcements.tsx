// src/components/Announcements.tsx
const Announcements = () => {
  const scheduleItems = [
    {
      title: "Class 7, Science | Live Class",
      time: "Tuesday, 5:00 - 5:50 PM",
      label: "Yesterday",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      title: "Class 7, Science | Live Class",
      time: "Tuesday, 6:30 - 7:15 PM",
      label: "Today",
      bgColor: "bg-pink-100",
      textColor: "text-pink-500",
    },
    {
      title: "Class 7, Science | Live Class",
      time: "Tuesday, 5:00 - 5:50 PM",
      label: "Tomorrow",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
    },
    {
      title: "Class 7, Science | Live Class",
      time: "Tuesday, 5:00 - 5:50 PM",
      label: "23rd Sept. 2024",
      bgColor: "bg-gray-100",
      textColor: "text-gray-500",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Announcements Section */}
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: '#3A3A3A' }}>
        Announcements
      </h2>
      <div className="bg-white p-4 rounded shadow">
        <ul className="space-y-4 bg-gray-50 p-4 rounded-lg">
          {/* First Announcement */}
          <li className="flex items-start sm:items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-6 w-6 text-yellow-500 mr-2"
              fill="none"
              stroke="#222a33"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="32" cy="32" r="12" />
              <path d="M39.682 35.636A8.483 8.483 0 0 1 34.2 40.21M32 16V8M40.907 16.572l2.186-3.785M48.214 23.546l3.785-2.185M48 32h8M49 41.815 52.785 44M42.269 48.214l2.185 3.785M32 48v8M23.093 47.428l-2.186 3.785M17.358 41.361l-3.785 2.185M16 32H8M18.144 24l-3.785-2.185M24.454 17.358l-2.185-3.785" />
            </svg>
            <span className="text-sm sm:text-base">On account of Independence Day, August 15th will be a holiday.</span>
          </li>

          {/* Second Announcement */}
          <li className="flex items-start sm:items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-blue-500 mr-2"
              fill="currentColor"
            >
              <path d="M4.25 1.5A2.75 2.75 0 0 0 1.5 4.25v15.5A2.75 2.75 0 0 0 4.25 22.5h15.5A2.75 2.75 0 0 0 22.5 19.75V4.25A2.75 2.75 0 0 0 19.75 1.5H4.25Zm.25 2h15a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75ZM6 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H6Zm5 6h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Zm-6 0a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
            </svg>
            <span className="text-sm sm:text-base">Reminder to finish your assignments and submit them by Monday.</span>
          </li>
        </ul>

        {/* Class Schedule Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'Outfit' }}>
          Your Class Schedule
        </h2>
        <div className="bg-white p-4 rounded border-gray-300 shadow">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg mb-4 ${item.bgColor}`}
            >
              <div className="w-full sm:w-auto">
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
                <p className={`text-lg font-semibold ${item.textColor}`}>{item.time}</p>
              </div>
              <span className={`text-sm font-medium ${item.textColor} mt-2 sm:mt-0`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
