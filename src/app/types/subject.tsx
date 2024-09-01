interface subject {
    id: number
    cover: string
    name: string
    topicCount: number
    percentageCompleted: number
    topics?: topic[]
}

interface topic {
    id: number
    name: string
    description: string
    percentageCompleted: number
    videoUrl: string
}