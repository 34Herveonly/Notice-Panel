import { Tooltip } from "react-tooltip";

const Notice = () => {
  return (
    <section className="flex bg-gray-200 p-6">
      {/* Sidebar */}
      <div className="bg-gray-50 w-80 p-8 flex flex-col items-center shadow-lg h-full fixed rounded-2xl">
        {/* Logo */}
        <div className="mb-12">
          <img src="/public/ur.jpg" alt="logo" className="h-40 w-40" />
        </div>

        {/* Sidebar Buttons */}
        <div className="w-full space-y-10">
          <button className="bg-[#006991] text-white p-3 w-full rounded-md hover:bg-[#7daccd]">
            Add Notice
          </button>
          <button className="bg-[#006991] text-white p-3 w-full rounded-md hover:bg-[#7daccd]">
            Settings
          </button>
          <button className="bg-[#006991] text-white p-3 w-full rounded-md hover:bg-[#7daccd]">
            Help/Support
          </button>
          <button className="bg-[#006991] text-white p-3 w-full rounded-md hover:bg-[#7daccd]">
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-96 flex flex-col space-y-6 w-full max-w-4xl">
        <div className="flex flex-wrap space-x-5">
          {/* Example Notice Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-[#006991] text-xl font-bold mb-2">
              Internship Notice
            </h2>
            <p className="text-gray-700 mt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorum molestias eius deserunt nemo...
            </p>
            
            {/* Buttons with Tooltips */}
            <div className="mt-7 flex flex-row space-x-3">
              <button
                data-tooltip-id="edit-tooltip"
                className="bg-[#006991] text-white w-full rounded-md hover:bg-gray-300 hover:text-[#006991]"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              
              <button
                data-tooltip-id="delete-tooltip"
                className="bg-red-600 text-white w-full rounded-md hover:bg-gray-300 hover:text-red-600"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip Components */}
      <Tooltip id="edit-tooltip" place="top" content="Edit Notice" />
      <Tooltip id="delete-tooltip" place="top" content="Delete Notice" />
    </section>
  );
};

export default Notice;
