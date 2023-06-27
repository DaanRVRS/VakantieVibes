import Image from "next/image";
import Link from "next/link";

const GetHeader = () => {
  return (
    <header className="flex flex-row items-center justify-between text-white bg-green-500 h-24">
      <Link href="/">
        <Image
          src="/Untitled.png"
          height={100}
          width={120}
          alt="logo"
          className="mx-3 hover: cursor-pointer"
        />
      </Link>
      <div className="flex flex-row">
        <Link href="/reisnu" className="mx-3">
          Reis nu
        </Link>
        <Link href="/overons" className="mx-3">
          Over ons
        </Link>
        <Link href="/contact" className="mx-3">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default GetHeader;
