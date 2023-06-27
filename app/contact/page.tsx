import GetFooter from "../components/GetFooter";
import GetHeader from "../components/GetHeader";

const Contact = () => {
  return (
    <>
      <GetHeader />
      <main className="">
        <section className="flex flex-row justify-center items-center">
          <img
            src="/contactBG.jpg"
            alt="contact-background"
            className="relative w-auto h-full overflow-hidden brightness-75"
          />
          <section className="absolute flex flex-col justify-center items-center w-full">
            <h1 className="text-white font-bold text-3xl mb-20">
              Waarmee kunnen wij u van dienst zijn?
            </h1>
            <div>
              <div className="flex flex-row justify-evenly items-center mb-10">
                <div className="flex flex-row justify-center items-center text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Boeken</h1>
                </div>
                <div className="flex flex-row justify-center items-center text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Annuleren</h1>
                </div>
                <div className="flex flex-row justify-center items-center text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Advies</h1>
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center mb-10">
                <div className="flex flex-row justify-center items-center mx-5 text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Bagage</h1>
                </div>
                <div className="flex flex-row justify-center items-center mx-5 text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Abbonement</h1>
                </div>
                <div className="flex flex-row justify-center items-center mx-5 text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Verzekering</h1>
                </div>
                <div className="flex flex-row justify-center items-center mx-5 text-white h-40 w-40 bg-opacity-70 rounded-xl bg-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <h1 className="text-2xl">Anders</h1>
                </div>
              </div>
            </div>
          </section>

          {/* code bora */}
          {/* <div className="bg-gray-300 border-2 border-black h-48 w-44 my-5 mx-12">
            <h1 className="text-black"> Bestemmingen</h1>
          </div>
          <div className="bg-gray-300 border-2 border-black h-48 w-44 my-5 mx-12">
            <h1 className="text-black"> Mijn reis</h1>
          </div>
          <div className="bg-gray-300 border-2 border-black h-48 w-44 my-5 mx-12">
            <h1 className="text-black"> Bagage</h1>
          </div>
        </section>
        <section className="flex flex-row justify-between mb-10 items-center border-b-2 border-l-2 border-r-2 border-black">
          <div className="bg-gray-300 border-2 border-black h-48 w-44 my-5 mx-12">
            <h1 className="text-black"> Visum</h1>
          </div>
          <div className="bg-gray-300 flex flex-row justify-center items-start border-2 border-black h-48 w-44 my-5 mx-12">
git          </div> */}
        </section>
      </main>
      <GetFooter />
    </>
  );
};

export default Contact;
