import process from 'process'

console.log(`The infrastructure mode is: ${process.env.NODE_ENV}`)
const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default function isDev(): boolean {
  return development
}
