import TelegramBot, {} from 'node-telegram-bot-api'
import config from './config'

import askChatGPT from './chatgpt'

async function main () {
  const bot = new TelegramBot(config.telegramToken, { polling: true})

  bot.onText(/# (.+)/, async (msg, match) => {
    const resp = match?.[1] || ''
    if (resp.length == 0) return
    
    const response = await askChatGPT(resp, msg.chat.id)
    bot.sendMessage(msg.chat.id, response)
  })
}

main()