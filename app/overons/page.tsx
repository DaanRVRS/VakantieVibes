import GetFooter from "../components/GetFooter";
import GetHeader from "../components/GetHeader";

const About = () => {
  return (
    <>
      <GetHeader />
      <main className="flex flex-col bg-green-400 w-full">
        <section className="flex flex-row justify-start items-center">
          <div className="flex flex-col justify-center items-center text-white bg-green-700 shadow-xl w-72 h-72 text-center mt-5 mb-5 ml-72 mr-10 rounded-lg">
            <h1 className="text-2xl font-bold">Ons doel</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam temporibus iure, eos minus veritatis reprehenderit quo
              nihil, alias ratione sequi, deleniti asperiores aut doloribus!
              Soluta maxime tempora explicabo suscipit consectetur?
            </p>
          </div>
        </section>
        <section className="flex flex-row justify-end items-center">
          <div className="flex flex-col justify-center items-center text-white bg-green-700 shadow-xl w-72 h-72 text-center mt-5 mb-5 ml-10 mr-72 rounded-lg">
            <h1 className="text-2xl font-bold">Ons motto</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam temporibus iure, eos minus veritatis reprehenderit quo
              nihil, alias ratione sequi, deleniti asperiores aut doloribus!
              Soluta maxime tempora explicabo suscipit consectetur?
            </p>
          </div>
        </section>
        <section className="flex flex-row justify-start items-center">
          <div className="flex flex-col justify-center items-center text-white bg-green-700 shadow-xl w-72 h-72 text-center mt-5 mb-5 ml-72 mr-10 rounded-lg">
            <h1 className="text-2xl font-bold">Hoe zijn wij ontstaan</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam temporibus iure, eos minus veritatis reprehenderit quo
              nihil, alias ratione sequi, deleniti asperiores aut doloribus!
              Soluta maxime tempora explicabo suscipit consectetur?
            </p>
          </div>
        </section>
        <section className="flex flex-row justify-end items-center">
          <div className="flex flex-col justify-center items-center text-white bg-green-700 shadow-xl w-72 h-72 text-center mt-5 mb-5 ml-10 mr-72 rounded-lg">
            <h1 className="text-2xl font-bold">Onze partners</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam temporibus iure, eos minus veritatis reprehenderit quo
              nihil, alias ratione sequi, deleniti asperiores aut doloribus!
              Soluta maxime tempora explicabo suscipit consectetur?
            </p>
          </div>
        </section>
      </main>
      <GetFooter />
    </>
  );
};

export default About;
