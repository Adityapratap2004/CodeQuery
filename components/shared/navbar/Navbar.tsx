import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import Theme from "./Theme"
import MobileNav from "./MobileNav"
import GlobalSearch from "../search/GlobalSearch"


const Navbar = () => {
  return (
    <nav className=" flex-between background-light900_dark200 fixed z-50 gap-5 p-6 w-full shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex-center gap-1">
        <Image src="/assets/images/site-logo.svg" height={25} width={25} alt="site logo" />
        <p className=" h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Code<span className="text-primary-500">Query</span></p>
      </Link>
      <GlobalSearch/>
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }} />

        </SignedIn>
        <MobileNav />


      </div>

     

    </nav>
  )
}

export default Navbar
