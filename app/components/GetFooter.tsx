import Image from "next/image";
import {
  BsInstagram,
  BsTiktok,
  BsWhatsapp,
  BsFacebook,
  BsAndroid2,
  BsApple,
} from "react-icons/bs";

const GetFooter = () => {
  return (
    <footer className="flex flex-row justify-between items-center text-white bg-green-600">
      <section className="py-10">
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">CONTACT MET VAKANTIEVIBES</h1>
          <p className="flex flex-row">
            Heb je een vraag? Lees hoe je ons kunt{" "}
            <a className="text-green-400 ml-1 font-bold hover: cursor-pointer">
              bereiken
            </a>
            !
          </p>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">STAY CONNECTED</h1>
          <div className="flex flex-row">
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsInstagram />
            </p>
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsTiktok />
            </p>
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsWhatsapp />
            </p>
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsFacebook />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">DOWNLOAD ONZE APP</h1>
          <div className="flex flex-row">
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsAndroid2 />
            </p>
            <p className="mr-3 hover:cursor-pointer hover:text-green-400 ease-in-out transition mt-1.5 text-lg">
              <BsApple />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">INSPIRATIE</h1>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Activiteiten
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Events
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            PartyPakket
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Stranden
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Uitgaan
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Blog
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">BESTEMMINGEN</h1>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Jongerenvakantie Spanje
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Jongerenvakantie Portugal
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Jongerenvakantie Griekenland
          </p>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">POPULAIR</h1>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Albufeira
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Chersonissos
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Kos
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie El Arenal
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Laganas
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Lloret de Mar
          </p>
          <p className="hover:cursor-pointer hover:text-green-400 ease-in-out transition">
            Vakantie Playa de Palma
          </p>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">ONZE PARTNERS</h1>
          <div className="h-16 w-32 bg-white rounded"></div>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">WIJ ZIJN AANGESLOTEN BIJ</h1>
          <div className="h-16 w-64 bg-white rounded"></div>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">BETAAL VEILIG EN GEMAKKELIJK</h1>
          <div className="h-16 w-44 bg-white rounded"></div>
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">EVENTS</h1>
          <div className="h-16 w-52 bg-white rounded"></div>
        </div>
      </section>
      <section className="py-10 mr-10">
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">POWERED BY</h1>
          <Image
            src="/Untitled.png"
            height={100}
            width={80}
            alt="logo"
            className="mx-3 hover: cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-start justify-center text-white my-5 ml-10">
          <h1 className="font-bold">ZO IN JE MAILBOX</h1>
          <p className="flex flex-row">
            Meld je hier aan voor{" "}
            <a className="text-green-400 ml-1 font-bold hover: cursor-pointer">
              onze niewsbrief
            </a>
            !
          </p>
        </div>
      </section>
    </footer>
  );
};

export default GetFooter;
