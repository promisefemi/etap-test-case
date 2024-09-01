
const topic: topic = {
    name: "JavaScript",
    description: "A programming language used for web development",
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6Pmr_Y",
    percentageCompleted: 0,
}
let subject = "English";
export default function Page() {
    return <>
        <div className="text-center m-4">
            <span className="text ">{subject}</span> / <span className="font-semibold">{topic.name}</span>
        </div>
        <div className="rounded-xl shadow-md overflow-hidden w-full">
            <video src={topic.videoUrl} className="w-full h-[70vh]" controls={true}></video>
        </div>
        <div className="flex flex-col lg:flex-row justify-between p-4 mt-5">
            <h2 className="font-bold text-lg"> {topic.name} </h2>
            <p>{topic.description}</p>
        </div>
    </>


}

