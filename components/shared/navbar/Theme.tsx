"use client"
import { useTheme } from "@/context/ThemeProvider"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
    const { mode, setMode } = useTheme();
    return (
        <Menubar className="relative bg-transparent shadow-none border-none">
            <MenubarMenu>
                <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
                    {
                        mode === 'light' ? (<Image src="/assets/icons/sun.svg" alt="sun" width={23} height={23} className="active-theme" />) :
                            (<Image src="/assets/icons/moon.svg" alt="sun" width={23} height={23} className="active-theme" />)
                    }
                </MenubarTrigger>
                <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
                    {
                        themes.map((th) => (
                            <MenubarItem className="flex items-center gap-4 px-2.5" key={th.value} onClick={() => {
                                setMode(th.value)
                                if (th.value !== 'system') {
                                    localStorage.theme = th.value
                                } else {
                                    localStorage.removeItem('theme');
                                }
                            }}>
                                <Image src={th.icon} alt={th.value} width={16} height={16} className={`${mode === th.value && 'active-theme'}`} />
                                <p className={`body-semibold text-light-500 ${mode === th.value ? 'text-primary-500' : 'text-dark100_light900'}`}>{th.label}</p>
                            </MenubarItem>
                        ))
                    }
                </MenubarContent>
            </MenubarMenu>
        </Menubar >
    )
}

export default Theme
