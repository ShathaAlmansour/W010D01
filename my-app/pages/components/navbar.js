import Link from "next/link";
import Image from "next/image";
function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Image src="/logo.png" width={100} height={100} />
        </li>
        <Link href="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href="/About">
          <li>
            <a>About Us</a>
          </li>
        </Link>
        <Link href="/post">
          <li>
            <a> Posts </a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
