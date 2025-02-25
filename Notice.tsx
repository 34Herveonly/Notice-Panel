import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddNotice from "./AddNotice";
import Settings from "./Settings";
import Help from "./Help";

const Notice = () => {
  // Sample Notices
  const notices = [
    { id: 1, title: "Internship Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 2, title: "Registration Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 3, title: "Examination Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 4, title: "Holiday Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 5, title: "Meeting Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 6, title: "Fee Payment Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 7, title: "Event Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    { id: 8, title: "Event Notice", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo..." },
    
  ];

  // State to manage views
  const [activeView, setActiveView] = useState("Notice");

  // Group notices into chunks of 3
  const chunkedNotices = [];
  for (let i = 0; i < notices.length; i += 3) {
    chunkedNotices.push(notices.slice(i, i + 3));
  }

  // State for selected notice in popup
  const [selectedNotice, setSelectedNotice] = useState<{
    id: number;
    title: string;
    content: string;
  } | null>(null);

  // Handle clicking a notice
  const handleNoticeClick = (notice: { id: number; title: string; content: string }) => {
    setSelectedNotice(notice);
  };

  // Close the popup
  const closePopup = () => {
    setSelectedNotice(null);
  };

  return (
    <section className="relative flex bg-gray-200 p-6 min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-50 w-64 p-8 flex flex-col items-center h-full fixed rounded-2xl shadow-2xl shadow-[#006991]">
        {/* Logo */}
        <div className="mb-5,.">
          <img src="/public/ur.jpg" alt="logo" className="h-24 w-24 rounded-full" />
        </div>
        <div className="text-center text-[#006991] text-3xl mb-10 font-serif">UR Connect</div>
        
        {/* Sidebar Buttons */}
        <div className="w-full space-y-5">
          <button className="bg-[#006991] mb-10 text-white p-3 w-full rounded-md hover:bg-[#7daccd]"
            onClick={() => setActiveView("AddNotice")}>Add Notice</button>
          <button className="bg-[#006991] mb-10 text-white p-3 w-full rounded-md hover:bg-[#7daccd]"
            onClick={() => setActiveView("Settings")}>Settings</button>
          <button className="bg-[#006991] mb-10 text-white p-3 w-full rounded-md hover:bg-[#7daccd]"
            onClick={() => setActiveView("Help")}>Help/Support</button>
          <button className="bg-[#006991] mb-10 text-white p-3 w-full rounded-md hover:bg-[#7daccd]"
            onClick={() => setActiveView("Notice")}>Back</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-72 w-full pr-10 text-center object-center max-w-5xl shadow-2xl shadow-[#006991] rounded-xl">
        {/* Notices View */}
        {activeView === "Notice" && (
          chunkedNotices.map((row, index) => (
            <div key={index} className="flex flex-row space-x-5 mb-6">
              {row.map((notice) => (
                <div
                  key={notice.id}
                  className="p-6 ml-8 mt-5 rounded-lg shadow-md hover:scale-[1.1] transition-transform duration-300 hover:bg-[#afe8ff] hover:text-white w-1/3 bg-white cursor-pointer"
                  onClick={() => handleNoticeClick(notice)}
                >
                  <h2 className="text-[#006991] text-xl font-bold mb-2">{notice.title}</h2>
                  <p className="text-gray-700 mt-2 line-clamp-3">{notice.content}</p>
                </div>
              ))}
            </div>
          ))
        )}

        {/* Add Notice View */}
        {activeView === "AddNotice" && (
          <AddNotice/>
        )}

        {
          activeView === "Help" &&(
            <Help/>
          )
        }

        {/* Settings View */}
        {activeView === "Settings" && (
          <Settings/>
        )}
      </div>

      {/* Overlay and Popup */}
      {selectedNotice && (
        <>
          {/* Overlay */}
          <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 z-40 " onClick={closePopup}></div>

          {/* Popup Notice */}
          <div className="fixed top-1/2 left-1/2 w-3/5 h-3/5 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl p-8 rounded-lg z-50 flex flex-col items-center justify-center">  
            <button
              data-tooltip-id="close"
              className="mb-6 top-0 ml-175 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-400"
              onClick={closePopup}
            >
              X
            </button>

            <h2 className="text-[#006991] text-2xl font-bold mb-4">{selectedNotice.title}</h2>
            <p className="text-gray-700 text-lg">{selectedNotice.content}</p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-8">
              <button data-tooltip-id="edit" className="mt-6 bg-[#006991] text-white px-6 py-2 rounded-md hover:bg-red-700">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button data-tooltip-id="delete" className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Tooltips */}
      <Tooltip id="delete" place="bottom" content="Delete" />
      <Tooltip id="edit" place="bottom" content="Edit" />
      <Tooltip id="close" place="bottom" content="Close"/>
    </section>
  );
};

export default Notice;
