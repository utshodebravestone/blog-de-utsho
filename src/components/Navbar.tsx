import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full bg-slate-800 flex justify-center">
      <nav className="w-full max-w-[888px] p-5 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-2xl font-medium">blog-de-utsho</h1>
        </Link>

        <div className="flex gap-5">
          <Link href="https://github.com/utshodebravestone" target="_blank">
            <FaGithub size={26} color={"white"} />
          </Link>
          <Link href="https://twitter.com/utshobravestone" target="_blank">
            <FaTwitter size={26} color={"white"} />
          </Link>
          <Link href="https://facebook.com/utshodebravestone">
            <FaFacebook size={26} color={"white"} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
