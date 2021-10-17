import Image from "next/image";
import Link from "next/Link";

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <Image src="/images/logo.webp" width="50" height="50" alt="logo" />
        <p>ACME Industries Ltd.</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link href="">
          <a className="link link-hover">About us</a>
        </Link>
        <Link href="">
          <a className="link link-hover">Contact</a>
        </Link>
        <Link href="">
          <a className="link link-hover">Jobs</a>
        </Link>
        <Link href="">
          <a className="link link-hover">Press kit</a>
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link href="">
          <a className="link link-hover">Terms of use</a>
        </Link>
        <Link href="">
          <a className="link link-hover">Privacy policy</a>
        </Link>
        <Link href="">
          <a className="link link-hover">Cookie policy</a>
        </Link>
      </div>
    </footer>
  );
}
