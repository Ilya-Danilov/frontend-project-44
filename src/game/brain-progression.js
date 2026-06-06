import * as mainFun from '../index.js'
import readlineSync from 'readline-sync'

export function progressionGame() {
  const name = mainFun.getName()
  for (let i = 0; i < 3; i++) {
    const progression = generateProgression()
    console.log('What number is missing in the progression?')
    console.log(`Question: ${progression.result}`)
    const response = readlineSync.question('Your answer: ')
    if (Number(response) !== Number(progression.trueAnswer)) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${progression.trueAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
  return
}

function generateProgression() {
  const startIndex = mainFun.randomNum(10)
  const step = mainFun.randomNum(10)
  const string = []
  const startNum = startIndex * step
  let num = startNum
  string.push(num)
  for (let i = 0; i < 9; i++) {
    num = num + step
    string.push(num)
  }
  const hole = mainFun.randomNum(10)
  const trueAnswer = string[hole]
  string[hole] = '..'
  return { result: string.join(' '), trueAnswer: trueAnswer }
}
