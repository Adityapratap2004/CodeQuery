import Image from "next/image"
import {Input} from "../../ui/input"

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
        <div className=" background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
            <Image
                src="/assets/icons/search.svg"
                alt="search"
                width={20}
                height={20}
                className="cursor-pointer"
            />
            <Input type="text" placeholder="search globally..." className="no-focus outline-none background-light800_darkgradient dark:text-light-900 border-none bg-transparent shadow-none paragraph-regular "/>

        </div>
      
    </div>
  )
}

export default GlobalSearch
