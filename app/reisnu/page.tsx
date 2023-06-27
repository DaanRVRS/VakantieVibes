import GetFooter from "../components/GetFooter";
import GetHeader from "../components/GetHeader";
import {
  BsFillArrowDownCircleFill,
  BsSearch,
  BsFillStarFill,
} from "react-icons/bs";

const Reisnu = () => {
  return (
    <>
      <GetHeader />
      <main className="flex flex-col bg-green-400 w-full">
        <h1></h1>
      </main>
      <div className="flex flex-row justify-center items-center">
        <img
          src="/searchSection.png"
          alt="contact-background"
          className="relative w-full h-96 overflow-hidden brightness-75"
        />
        <h1 className="absolute text-3xl text-white font-bold">
          Al onze bestemmingen
        </h1>
      </div>
      <section className="bg-green-500 w-full flex flex-row justify-center items-center">
        <BsFillArrowDownCircleFill className="text-white text-3xl mr-3" />
        <h1 className="text-white font-bold text-3xl py-5">
          Onze bestemmingen
        </h1>
        <BsFillArrowDownCircleFill className="text-white text-3xl mr-3" />
      </section>
      <main className="bg-gray-200 w-full h-96">
        <img
          src="/contactBG.jpg"
          alt="newyork"
          className="relative w-60 h-30"
        />
      </main>

      <GetFooter />
    </>
  );
};

export default Reisnu;
