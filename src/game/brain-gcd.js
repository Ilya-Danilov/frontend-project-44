import readlineSync from 'readline-sync'
import * as mainFun from '../index.js'

const gcd = (numOne, numTwo) => {
  let a = numOne
  let b = numTwo
  let remains
  while (b !== 0) {
    remains = a % b
    a = b
    b = remains
  }
  return a
}

export const brainGcd = () => {
  const name = mainFun.getName()
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    const numOne = mainFun.randomNum()
    const numTwo = mainFun.randomNum()
    console.log(`Question: ${numOne} ${numTwo}`)
    const answer = gcd(numOne, numTwo)
    const response = readlineSync.question('Your answer: ')
    if (Number(response) !== answer) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
