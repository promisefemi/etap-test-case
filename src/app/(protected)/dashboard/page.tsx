import Course from "@/app/components/course"
import react from "react"



const subjects: subject[] = [{
    id: 1,
    cover: "https://images.unsplash.com/photo-1661956601349-f61c959a8d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Maths",
    topicCount: 10,
    percentageCompleted: 50
},
// create more subjects

{
    id: 2,
    name: "Science",
    topicCount: 10,
    percentageCompleted: 50,
    cover: "https://images.unsplash.com/photo-1524683745036-b46f52b8505a"
},

{
    id: 3,
    cover: "https://images.unsplash.com/photo-1661956601349-f61c959a8d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "English",
    topicCount: 10,
    percentageCompleted: 50
},
{
    id: 3,
    cover: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Computer Engineering",
    topicCount: 10,
    percentageCompleted: 50
},


]



export default function DashboardPage() {
    return (
        <>
            <h2>Dashboard</h2>

            <h4>Active Courses</h4>

            <div className="flex gap-5 flex-wrap">

                {
                    subjects.length <= 0 ? <p>No courses available</p> :
                        subjects.map((subject) => (
                            <Course key={subject.id} {...subject} />
                        ))}
            </div>
        </>
    );
}
