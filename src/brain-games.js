import readlineSync from 'readline-sync'

const getName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello ${name}!`)
  return name
}

const isEven = (num) => {
  return num % 2 === 0
}

const randomNum = () => {
  return Math.floor((Math.random() * 100))
}

export const evenGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = getName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const num = randomNum()
    const isNumEven = isEven(num)
    const trueResponse = isNumEven ? 'yes' : 'no'

    console.log(`Question: ${num}`)
    const response = readlineSync.question('Your answer: ')

    if (response !== trueResponse) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${trueResponse}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
