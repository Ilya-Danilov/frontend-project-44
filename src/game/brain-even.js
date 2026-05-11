import readlineSync from 'readline-sync'
import * as mainFun from '../index.js'

const isEven = (num) => {
  return num % 2 === 0
}

export const evenGame = () => {
  const name = mainFun.getName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const num = mainFun.randomNum()
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
