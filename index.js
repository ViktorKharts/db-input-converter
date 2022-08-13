
const outer = () => {
  const regexForAllOperators = /[><=!ORAND]/
  const regexForGlobalOperators = /[ORAND]/
  let globalLogicOperatorCount = 0

  const inner = input => {
    if (!Array.isArray(input)) return input
    let logicOperator, firstValue, secondValue

    const globalLogicOperatorCounter = input => {
      input.forEach(el => {
        if (Array.isArray(el)) return globalLogicOperatorCounter(el)

        if (el.match(regexForGlobalOperators)) globalLogicOperatorCount++
      })
    }

    if (!globalLogicOperatorCount) {
      globalLogicOperatorCounter(input)
    }

    input.forEach((el, i) => {
      if (!Array.isArray(el) && el.match(regexForAllOperators)) {
        logicOperator = el
      }
      
      if (i !== input.length - 1) firstValue = el
  
      secondValue = el
    })
  
    let result = `${inner(firstValue)} ${inner(logicOperator)} ${inner(secondValue)}`
    
    if (logicOperator.match(regexForGlobalOperators) && globalLogicOperatorCount > 1) {
      globalLogicOperatorCount--
      result = `(${result})`
    }
    
    return result
  }

  return inner
}

const converterOne = outer()
const converterTwo = outer()
const converterThree = outer()
const resultOne = converterOne([ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ])
const resultTwo = converterTwo([ "OR", ["OR", ["AND", ["<", "a", "b"], ["==", "c", "d"]], ["AND", ["==", "e", "f"], ["!=", "g", "h"]]],
                                       ["OR", ["AND", ["!=", "i", "j"], ["==", "k", "l"]], ["AND", ["==", "m", "n"], ["!=", "o", "p"]]] ])
const resultThree = converterThree([ "AND", ["OR", ["OR", ["AND", ["<", "a", "b"], ["==", "c", "d"]], ["AND", ["==", "e", "f"], ["!=", "g", "h"]]],
                                                   ["OR", ["AND", ["!=", "i", "j"], ["==", "k", "l"]], ["AND", ["==", "m", "n"], ["!=", "o", "p"]]]],
                                            ["OR", ["OR", ["AND", ["!=", "q", "r"], ["==", "s", "t"]], ["AND", ["==", "u", "v"], ["!=", "w", "x"]]],
                                                   ["OR", ["AND", ["!=", "y", "z"], ["==", "aa", "ab"]], ["AND", ["==", "ac", "ad"], ["!=", "ae", "af"]]]]])
console.log(resultOne)
console.log(resultTwo)
console.log(resultThree)
