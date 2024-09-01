import Image from "next/image";
import Link from "next/link";

export default function Course({ id, cover, name, topicCount, percentageCompleted }: subject) {
    return <Link href={`/course/${id}`} className=" bg-white rounded-2xl border-primary w-1/6 p-3 hover:bg-primary transition-colors drop-shadow-lg">
        <div className="w-full h-36 overflow-hidden rounded-xl drop-shadow">
            <Image src={cover} alt={name} height="100" width="100" className="object-cover w-full h-full" />
        </div>

        <div className="p-2 rounded-lg">
            <h4 className="font-bold text-xl">{name}</h4>
            <p></p>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-slate-300 flex justify-between">
            <span>{topicCount} topics</span>
            <span className="ml-1 pl-2">{percentageCompleted}% complete </span>
        </div>
    </Link>
}