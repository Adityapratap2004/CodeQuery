"use client"

import Image from "next/image";

interface Props{
    type:string;
    itemId:string;
}


const EditDelteAction = ({type,itemId}:Props) => {
    console.log("Edit Delte Action")
  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
        {type==='Question' && (
            <Image
                src="/assets/icons/edit.svg"
                alt="Edit"
                width={14}
                height={14}
                className="cursor-pointer object-contain"
                onClick={()=>{}}
            />
        )}    
        <Image 
          src="/assets/icons/trash.svg"
          alt="Delete"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
         onClick={()=>{}}
        />

    </div>
  )
}

export default EditDelteAction
