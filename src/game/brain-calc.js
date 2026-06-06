import readlineSync from 'readline-sync'
import * as mainFun from '../index.js'

const randomSign = () => {
  const arrSign = ['+', '-', '*']
  const numSign = Math.floor((Math.random() * 3))
  return arrSign[numSign]
}

export const brainCalc = () => {
  const name = mainFun.getName()
  let answer
  console.log(`What is the result of the expression?`)
  for (let i = 0; i < 3; i++) {
    const numOne = mainFun.randomNum()
    const numTwo = mainFun.randomNum()
    const sign = randomSign()
    console.log(`Question: ${numOne} ${sign} ${numTwo}`)
    switch (sign) {
      case '+':
        answer = numOne + numTwo
        break
      case '-':
        answer = numOne - numTwo
        break
      case '*':
        answer = numOne * numTwo
        break
    }
    const response = readlineSync.question('Your answer: ')
    if (Number(response) !== answer) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
