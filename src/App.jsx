import React from "react";
import job from "./assets/job.png";
import messages from "./assets/messages.png";
import payments from "./assets/payments.png";
import bell from "./assets/bell.png";
import engineer from "./assets/engineer.png";
import list from "./assets/vertical list.png";
import atlasian from "./assets/atlasian.png";
import buttons from "./assets/Frame 136.png";
import applicants from "./assets/applicants.png";
import matches from "./assets/Matches.png";
import messagebar from "./assets/messages-rightbar.png";
import views from "./assets/views.png";


function App() {
  return (
    <div className=" w-screen h-screen ">
      {/* {nav element} */}
      <nav className=" flex flex-row justify-between items-center p-3">
        <span className=" bg-[#E7E7E7] text-[#DC4A2D] p-2 font-semibold w-[74px] h-11 text-center ml-4">Logo</span>
        <div className=" flex gap-16 items-center border rounded-full p-1 ">
          <span className="bg-[#DC4A2D] border-[#FCB4A5] border-2 rounded-full p-2">
            <img className=" w-16" src={job} alt="jobs" />
           
          </span>
          <span>
            <img className=" w-[100px]" src={messages} alt="messages" />
          </span>
          <span>
            <img className=" w-[100px]" src={payments} alt="payments" />
            
          </span>
        </div>

        <span>
          <img className=" w-[100px] mr-4" src={bell} alt="bell" />
        </span>
      </nav>

      <div className="border flex justify-start h-12 items-center gap-10 ">
  <span className="text-[#DC4A2D] font-semibold ml-9 border-b-2 border-[#DC4A2D] py-2 flex items-center h-full">Job preview</span>
  <span className="text-[#888888] font-medium flex items-center h-full">Applicants</span>
  <span className="text-[#888888] font-medium flex items-center h-full">Match</span>
  <span className="text-[#888888] font-medium flex items-center h-full">Messages</span>
</div>
      <div className=" grid grid-cols-4 ">
        <div className="  h-full  col-start-1 col-end-4">
          
            <img className=" ml-6 mt-2 pb-5 " src={engineer} alt="open" />
            <div className=" grid grid-cols-5 gap-3  border mt-4 py-7">
            <div className=" min-h-[100px] col-start-1 col-end-2 ml-7  ">
              <h3 className=" font-medium text-[#6E6D6D] text-lg mb-1">Skills Required</h3>
              <img src={list} alt="vertical list" />
            </div>
            <div className=" min-h-[100px]  col-start-2 col-end-3">
            <h3 className=" font-medium text-[#6E6D6D] text-lg mb-1">Preferred Language</h3>
            <h3 className=" font-semibold text-lg text-[#3D3D3D]">English</h3>
            </div>
            <div className=" min-h-[100px] col-start-3 col-end-4">
            <h3 className=" font-medium text-[#6E6D6D] text-lg mb-1">Type</h3>
            <h3 className=" font-semibold text-lg text-[#3D3D3D]">Full time</h3>
            </div>
            <div className=" min-h-[100px]  col-start-4 col-end-6">
            <h3 className=" font-medium text-[#6E6D6D] text-lg mb-1">Years of Experience</h3>
            <h3 className=" font-semibold text-lg text-[#3D3D3D]">3+ Years of Experience</h3>
            </div>
            
          </div>

          <div className=" flex flex-col justify-start ml-10 py-4 ">
          <h3 className=" font-medium text-[#6E6D6D] text-start  mb-1">About the job</h3>
          <ol className="list-decimal font-medium text-[#3D3D3D] ml-4">
            <li>Handle the UI/UX research design</li>
            <li>Work on researching on latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphic related works</li>
          </ol>
          <p className="font-medium text-[#3D3D3D]">Benefits:</p>
          <ul className="font-medium text-[#3D3D3D] list-disc ml-7">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <p className="font-medium text-[#3D3D3D]">Schedule:</p>
          <ul className="font-medium text-[#3D3D3D] list-disc ml-7">
            <li>Day shift</li>
          </ul>
          <p className="font-medium text-[#3D3D3D]">Supplemental pay types:</p>
          <ul className="font-medium text-[#3D3D3D] list-disc ml-7">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <p className="font-medium text-[#3D3D3D]">Work Location: In person</p>
          </div>

        <div className=" grid grid-cols-5 gap-1 border py-7">
        <div className="  min-h-[100px] col-start-1 col-end-3  ml-9">
        <img className=" mb-5" src={atlasian} alt="atlasian" />
        <div className=" flex flex-col gap-3">
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Company size</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">1k - 2k Employees</h4>
        </div>
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Sector</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">Information Technology, Infrastructure</h4>
        </div>
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Founded In</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">2019</h4>
        </div>

        </div>
        
        

        </div>
        <div className="  min-h-[200px] col-start-3 col-end-6 ">
        <div className=" flex flex-col gap-3 mt-14">
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Type</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">Private</h4>
        </div>
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Funding</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">Bootstrapped  </h4>
        </div>
        <div>
        <p className=" text-[#6E6D6D] text-sm font-medium mb-1">Founded By</p>
        <h4 className="text-[#3D3D3D] font-semibold text-base">Scott Farquhar,Mike Cannon-Brookes</h4>
        </div>

        </div>

        </div>
        </div>

        </div>
        <div className=" min-h-[100px] bg-slate-50 col-start-4 col-end-5">
          <div className=" flex flex-col">
            <div className="flex justify-center mt-6 mb-4">
            <img className=" w-[280px]" src={buttons} alt="buttons" />
            </div>
            
                <div className=" flex flex-col gap-2 divide-y-2">

            <div className=" flex items-center justify-around  mb-2  ">
              <img className=" w-[120px] mr-11"  src={applicants} alt="applicants" />
              <span className=" text-sm font-semibold mr-3">400</span>
            </div>
            <div className=" flex items-center justify-around mb-2 ">
              <img className=" w-[120px] mr-11"  src={matches} alt="matches" />
              <span className=" text-sm font-semibold mr-3">100</span>
            </div>
            <div className=" flex items-center justify-around mb-2">
              <img className=" w-[120px] mr-11"  src={messagebar} alt="messagebar" />
              <span className=" text-sm font-semibold mr-3">147</span>
            </div>
            <div className=" flex items-center justify-around mb-2">
              <img className=" w-[120px] mr-11"  src={views} alt="views" />
              <span className=" text-sm font-semibold mr-3">800</span>
            </div>

                </div>

            
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
