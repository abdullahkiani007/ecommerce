import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-purple-800 bg-red-200 py-3">
      <h1>Home page</h1>
      <Link href={"/about"}>About</Link>
      <br></br>
      <Link href={"about/company"}>Company</Link>
    </div>
  );
}
