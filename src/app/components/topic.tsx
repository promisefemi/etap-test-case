"use client"
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'
export default function Topic({ id, name, description, }: topic) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const toggleAccordionChange = () => {
        setAccordionOpen(!accordionOpen)
    }

    return <div className="bg-white rounded-lg">
        <div className={`relative topic-name bg-white rounded-lg p-4 rounded-e-none rounded-s-none border-dashed border-b-slate-400 ${accordionOpen ? 'border-b-2' : 'border-b-0'} `} onClick={toggleAccordionChange}>
            {name}

            <div className="w-10 absolute top-2/4 -translate-y-2/4 right-2">
                <FaChevronDown className={`transition-all ${accordionOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
        </div>
        <div className={`topic-name bg-white rounded-lg transition-all ${accordionOpen ? 'h-auto p-4' : 'h-0 p-0 overflow-hidden'}`}>
            {description}

            <div className="flex mt-4">
                <Link href={'/course/topic/' + id} type="button" className="px-5 py-2 text-white rounded-md bg-primary">Start </Link>
            </div>
        </div>
    </div>

}