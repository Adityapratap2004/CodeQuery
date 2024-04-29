import Image from "next/image"
import { Input } from "../../ui/input"

interface Props {
    route: string;
    iconPosition: string;
    imgSrc: string;
    placeholder: string;
    otherClasses: string;
}

const LocalSearch = ({ route, iconPosition, imgSrc, placeholder, otherClasses }: Props) => {
    return (

        <div className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}>
           {iconPosition==='left' && <Image
                src={imgSrc}
                alt="search icon"
                width={20}
                height={20}
                className="cursor-pointer"
            />}
            <Input type="text" placeholder={placeholder} className="no-focus outline-none background-light800_darkgradient dark:text-light-900 border-none bg-transparent shadow-none paragraph-regular " />
            {iconPosition==='right' && <Image
                src={imgSrc}
                alt="search icon"
                width={20}
                height={20}
                className="cursor-pointer"
            />}

        </div>


    )
}

export default LocalSearch
