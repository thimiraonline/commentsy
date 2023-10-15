import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-screen-2xl mx-auto px-[15px] py-4 text-neutral-500">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-1 items-center">
              <div className="w-[90px]">
                <Image
                  src="/commentsy-text.svg"
                  width={36}
                  height={18}
                  alt="Logo"
                  className="w-auto h-auto"
                />
              </div>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <p className="text-sm text-neutral-500">
              Created by{" "}
              <Link
                className="underline hover:text-black"
                target="_blank"
                href="https://manjiltamang.com/"
              >
                Manjil Tamang
              </Link>
            </p>
          </div>
          <div>
            <Link className="hover:text-black" target="_blank" href="">
              Buy me a coffee ✨
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li>GitHub</li>
            <li>X</li>
          </ul>
          <ul className="flex">
            <li>Documentation</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
