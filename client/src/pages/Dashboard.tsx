import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar if tap outside
  const handleOutsideClick = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  return (
    <div onClick={handleOutsideClick} className="flex min-h-screen bg-gray-900 text-gray-200 relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-gray-800 transition-transform duration-300 ease-in-out z-20 md:relative md:translate-x-0`}
        onClick={(e) => e.stopPropagation()} // Prevent sidebar from closing when clicked
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Assessments</a>
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Candidates</a>
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Settings</a>
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Reports</a>
          <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-700 transition">Logout</a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-gray-800 p-4 md:pl-72">
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-gray-200 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Welcome, Admin</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
              </svg>
            </button>
            <img src="https://via.placeholder.com/32" alt="Profile" className="w-8 h-8 rounded-full border-2 border-gray-700" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Sample Cards */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Assessments</h2>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Active Candidates</h2>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Reports Generated</h2>
              <p className="text-2xl font-bold">12</p>
            </div>
            {/* Additional Cards */}
          </div>

          {/* Placeholder for other content */}
          <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• Candidate Ali Amir completed the "Data Analysis" assessment.</li>
              <li>• New assessment "Assistant to CEO" created.</li>
              <li>• 5 candidates were invited to the "Business Skills" assessment.</li>
              <li>• Admin exported the "Q3 Performance Report".</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
