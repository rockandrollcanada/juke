import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="d-flex justify-content-between mt-5 pt-5 navbar navbar-light ">
        <div>
          <Image
            src="/coderock-logo.png"
            className=""
            alt="site logo"
            width={96}
            height={96}
          />
        </div>

        <Link href="/">
          <a className="bg-success bg-gradient rounded-2 text-dark p-1 text-decoration-none ">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="bg-success bg-gradient rounded-2  text-dark p-1 text-decoration-none ">
            About
          </a>
        </Link>
        <Link href="/ninjas/">
          <a className="bg-success bg-gradient rounded-2 text-dark p-1 text-decoration-none">
            Ninja Listing
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Header;
