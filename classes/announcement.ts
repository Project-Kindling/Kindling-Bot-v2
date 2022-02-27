import { Timer } from "./timer"

class Announcement {
    channelId: string
    title: string
    content: string
    schedule: string
    image: boolean
    timer: Timer

    constructor(
        channelId: string = "941609833252130846",
        title: string = "",
        content: string = "",
        schedule: string = "",
        image: boolean = false
    ) {
        this.channelId = channelId
        this.title = title
        this.content = content
        this.schedule = schedule
        this.image = image
        this.timer = new Timer()
    }
}

export { Announcement }
