import Topic from "@/app/components/topic"
import Image from "next/image"
import { useState } from "react"

const subject: subject = {
    id: 3,
    cover: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Computer Engineering",
    topicCount: 10,
    percentageCompleted: 50,
    topics: [
        {
            id: 1,
            name: "Introduction",
            description: "This is a description",
            percentageCompleted: 50,
            videoUrl: "https://www.youtube.com/watch?v=ysz5S6Pmr_Y",
        }
    ]
}
export default function Page() {

    return <>
        <div className="p-2 bg-white rounded-xl">
            <div className="w-full h-60 overflow-hidden rounded-xl drop-shadow">
                <Image src={subject.cover} alt={subject.name} height="100" width="100" className="object-cover w-full h-full" />
            </div>

            <div className="mt-4">
                <h2 className="font-semibold text-xl">{subject.name}</h2>
                <p></p>
            </div>
        </div>

        <h4 className="mt-5 mb-2">Topics</h4>
        {
            subject.topics?.map((topic) => <Topic {...topic} key={topic.id} />)
        }


    </>
}