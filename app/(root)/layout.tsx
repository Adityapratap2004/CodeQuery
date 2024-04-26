import Navbar from "@/components/shared/navbar/Navbar"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className=' background-light850_dark100 relative '>
        <Navbar/>
        <div className='flex'>
            {children}
        </div>
      
    </main>
  )
}

export default layout
