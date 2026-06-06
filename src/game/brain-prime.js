import * as mainFun from '../index.js'
import readlineSync from 'readline-sync'

export function brainPrime() {
  const name = mainFun.getName()
  for (let i = 0; i < 3; i++) {
    const num = mainFun.randomNum(1000)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')
    const result = isPrime(num)
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log(`Correct!`)
  }
  console.log(`Congratulations, ${name}!`)
  return
}

function isPrime(num) {
  let result
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i !== 0) {
      result = 'yes'
    }
    else {
      result = 'no'
      return result
    }
  }
  return result
}
