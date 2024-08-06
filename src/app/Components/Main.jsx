"use client";

import React, { useState } from "react";
import image from "./img.png";
import Image from "next/image";

const Main = () => {
  const [voteCount, setVoteCount] = useState(1); // Initialize vote count
  const [isVoted, setIsVoted] = useState(false); 

  const handleVote = () => {
    setVoteCount(voteCount + 1); // Increment vote count
    setIsVoted(true); 
    setTimeout(() => {
      setIsVoted(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-start items-center px-8 w-full">
      <div>
        <nav aria-label="breadcrumb" className="text-xs text-nowrap">
          <ol style={{ listStyle: "none", display: "flex", padding: 0 }}>
            <li>
              <a href="/">Home</a>
            </li>
            <li style={{ margin: "0 5px" }}> &gt; </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li style={{ margin: "0 5px" }}> &gt; </li>
            <li aria-current="page">VideoDubber - Fast Video Translator</li>
          </ol>
        </nav>
        <div className="flex flex-col gap-4 mt-8">
          <div>
            <Image src={image} alt="VideoDubber logo" className="h-20 w-18" />
          </div>
          <div>
            <h1 className="font-bold font-inter text-3xl">
              VideoDubber - Fast Video Translator
            </h1>
            <div className="flex flex-row justify-between items-start gap-14 py-4">
              <div>
                <h2 className="text-2xl font-extralight font-inter text-neutral-800">
                  Translate videos in your own voice, globalize<br/> in a click!
                </h2>
              </div>
              <div className="flex flex-row gap-4 justify-center items-center">
                <button className="border-gray-600 border-spacing-24 px-6 py-3 border-2">Visit</button>
                <button 
                  onClick={handleVote} 
                  className="border-orange-500 px-10 py-3 border-2" 
                  style={{ background: isVoted ? "white" : "linear-gradient(90deg, rgba(255,105,0,1) 0%, rgba(255,0,127,1) 100%)" , color:isVoted?"black":"white"}}
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center">
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="16"
                        padding="2"
                        viewBox="0 0 9 8"
                        className={`styles_animation__lKdn4 ${isVoted ? 'color-change' : "white"}`} 
                        style={{ marginLeft: "5px" }}
                      >
                        <path fillRule="evenodd" d="M9 8H0l4.5-8z" />
                      </svg>
                    </div>
                    <div className="text-14 font-semibold uppercase  px-2">
                      Upvoted {voteCount} 
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
