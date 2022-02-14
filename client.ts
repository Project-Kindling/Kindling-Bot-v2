import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"

dotenv.config()

const client: DiscordJS.Client<boolean> = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.login(process.env.TOKEN)

export = client