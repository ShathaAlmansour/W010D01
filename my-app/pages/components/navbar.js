import Link from "next/link";
import Image from "next/image";
function Nav() {
  return (
    <ul>
      <li>
        <Image src="/logo.png" width={100} height={100} />
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Post">
          <a> Posts </a>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
