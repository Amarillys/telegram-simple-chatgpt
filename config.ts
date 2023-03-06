import { readFileSync } from 'fs'

interface Config {
  telegramToken: string,
  openaiKey: string
}

const configString = readFileSync('./config.json', { encoding: 'utf-8'})
const config: Config = JSON.parse(configString)

export default config