import React from "react";

const Headers1 = () => {
  return (
    <>
      <div className="flex flex-row justify-between content-center m-4  items-center dark:shadow-gray-800 pb-6 border-b-2 border-black/10">
        <div className="flex flex-row justify-center content-center items-center gap-4">
          <div>
            <span className="text-white bg-orange-500 rounded-full font-bold text-lg p-3 px-4">
              P
            </span>
          </div>
          <div>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ( ctrl + k )"
                required
              />
            </div>
          </div>
        </div>
        <div> <ul className="list-none	flex flex-row justify-around items-center gap-6 font-normal font-inter">
          <li>Launches</li>
          <li>Products</li>
          <li>News</li>
          <li>Community</li>
          <li>Advertise</li></ul></div>
        <div className="flex felx-row justify-around items-center gap-4">
          <div><button className="bg-orange-100 text-orange-600 p-2 rounded-lg">Submit</button></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none" viewBox="0 0 19 20"><path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16a2 2 0 0 0 4 0M3.5 10.5a4.5 4.5 0 0 1 9 0c0 2.239.519 4.037.931 4.75A.5.5 0 0 1 13 16H3a.5.5 0 0 1-.43-.75c.412-.713.93-2.512.93-4.75"></path></svg></div>
          <div><span className="p-3 bg-black text-white rounded-full px-4">T</span></div>
        </div>
      </div>
    </>
  );
};

export default Headers1;
