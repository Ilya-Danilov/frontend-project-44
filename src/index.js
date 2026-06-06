import readlineSync from 'readline-sync'

export const getName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello ${name}!`)
  return name
}

export const randomNum = (quantity = 100) => {
  return Math.floor((Math.random() * quantity))
}
