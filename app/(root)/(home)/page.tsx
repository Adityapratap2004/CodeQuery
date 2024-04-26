import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      efnd
    </main>
  );
}
