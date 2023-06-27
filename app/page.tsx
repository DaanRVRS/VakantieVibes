"use client";

import React from "react";
import GetHeader from "./components/GetHeader";
import GetFooter from "./components/GetFooter";
import {
  BsFillArrowDownCircleFill,
  BsSearch,
  BsFillStarFill,
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <GetHeader />
      <main className="flex flex-col justify-center items-center">
        {/* top image with slogan */}
        <section className="flex flex-row justify-center items-center">
          <img
            src="/test.jpg"
            alt="logo"
            className="overflow-hidden relative brightness-90"
          />
          <h1 className="absolute text-3xl text-white font-bold">
            DE NR. 1 IN REIZEN
          </h1>
        </section>
        {/* bestemming zoeken */}
        <section className="bg-green-500 w-full flex flex-row justify-center items-center">
          <BsFillArrowDownCircleFill className="text-white text-3xl mr-3" />
          <h1 className="text-white font-bold text-3xl py-5">
            Zoek uw vakantie
          </h1>
          <BsFillArrowDownCircleFill className="text-white text-3xl ml-3" />
        </section>
        {/* search section */}
        <section className="bg-gray-200 w-full text-white flex flex-row justify-center items-center">
          <img  
            src="/searchSection.png"
            alt="logo"
            className="overflow-hidden relative w-fit brightness-50"
          />
          <section className="absolute flex flex-row justify-between">
            {/* search bar */}
            <div className="mr-40">
              <h1 className="font-bold text-xl">
                Voer een vakantie bestemming in..
              </h1>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="zoeken..."
                  className="py-3 px-5 rounded-sm text-black focus:outline-none capitalize"
                />
                <BsSearch className="text-3xl text-white mt-2 ml-2 hover:cursor-pointer" />
              </div>
            </div>
            {/* reviews */}
            <div>
              <h1 className="font-bold text-xl ml-40">
                Reviews van onze klanten
              </h1>
              <div className="flex flex-col justify-center items-center ml-36">
                <div className="flex flex-row justify-center items-center">
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <h1 className="ml-2">~Daan</h1>
                </div>
                <p>" Beste service "</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-3 ml-36">
                <div className="flex flex-row justify-center items-center">
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-white text-xl" />
                  <h1 className="ml-2">~Bora</h1>
                </div>
                <p>" Enorm aantal bestemmingen "</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-3 ml-36">
                <div className="flex flex-row justify-center items-center">
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <h1 className="ml-2">~Khalil</h1>
                </div>
                <p>" Veel tapas gegeten! "</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-3 ml-36">
                <div className="flex flex-row justify-center items-center">
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <BsFillStarFill className="text-yellow-500 text-xl" />
                  <h1 className="ml-2">~Karel</h1>
                </div>
                <p>" Geweldig weekje met het vrouwtje gehad! "</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <GetFooter />
    </>
  );
}
