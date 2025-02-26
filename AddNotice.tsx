import { Tooltip } from "react-tooltip"

const AddNotice = () => {
  return (
       <section className="mb-10">
        <div data-tooltip-id="header" className=" ml-3 hover:border-1 hover:bg-amber-50 border-black w-[120px] rounded-full p-1 mt-3">
          <h1 className="mt-1/2 text-lg text-center text-[#006991]"><a href="" className="hover:text-gray-700 ">UR Connect</a></h1>
          </div>

        <h1 className="text-center text-[#006991] text-3xl mt-5 font-semibold">Add a notice</h1>      
        
          <div className="text-start ml-14">
            <input type="text" className="focus-visible:outline-0 text-[#006991] placeholder-gray-400 text-sm p-2 pl-3 rounded-2xl border-black bg-white mt-7 w-[500px] shadow-md shadow-[#006991]" placeholder="Input Title"/>
          </div>

        <div className="absolute">
        
          <textarea name="" placeholder="Write something" id=""
           className="shadow-lg shadow-[#006991] bg-white pl mt-10 w-[820px] ml-14 rounded-2xl text-sm focus-visible:outline-0 h-[305px] overflow-hidden pl-4 pt-4 resize-none"></textarea>
      
        </div>
      
        <div className="flex flex-row ml-30">
          <button className="p-1 w-25 border-2 rounded-full border-gray-600 relative mt-[295px] ml-[30px] text-lg hover:bg-[#006991] hover:text-white hover:border-0" data-tooltip-id="add-button"><i className="fa-solid fa-plus"></i></button>

        
          <button className="p-1 w-25  border-2 rounded-full border-gray-600 relative mt-[295px] ml-[70px]  text-lg hover:bg-[#006991] hover:text-white hover:border-0" data-tooltip-id="copy-button"><i className="fa-solid fa-copy"></i></button>


          <button className="p-1 w-25 border-2 rounded-full border-gray-600 relative mt-[295px] ml-[70px]  text-lg hover:bg-[#006991] hover:text-white hover:border-0" data-tooltip-id="clean-button"><i className="fa-solid fa-broom"></i></button>



          <button className="p-1 w-25 border-2 rounded-full border-gray-600 relative mt-[295px] ml-[70px]  text-lg hover:bg-[#006991] hover:text-white hover:border-0" data-tooltip-id="send"><i className="fa-sharp fa-solid fa-paper-plane"></i></button>

          </div>
{/*           
        <div className="p-1 w-6 border-2 rounded-full border-gray-600 relative ml-[70px]">
          <button className="text-sm rounded-full" data-tooltip-id="add-button"><i className="fa-light fa-plus"></i></button>
          </div>
          <div className="relative mt-[10px]  border-1 border-gray-600 ml-[200px]">  
          <button data-tooltip-id="send" className=""><i className="fa-sharp fa-solid fa-paper-plane-top"></i></button>
          
          </div> */}

          <Tooltip id="header" place="bottom" content="Return to Notices Page"/>
          <Tooltip id="add-button" place="bottom" content="Upload file"/>
          <Tooltip id="send" place="bottom" content="Post Notice"/>
          <Tooltip id="copy-button" place="bottom" content="Copy"/>
          <Tooltip id="clean-button" place="bottom" content="Clean text-area"/>
          
        </section>
  )
}
export default AddNotice
