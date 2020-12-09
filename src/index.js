const input = { tag: 'JAVASCRIPT' }

function toLowerInput(input) {
  const data = { ...input }
  return `(${data.tag.toLowerCase()})`
}

const updated = toLowerInput(input)

// Best practices
import { pipe } from 'lodash/fp'

const pickTag = (obj) => obj.tag
const toLowerCase = (str) => str.toLowerCase()
const bracketify = (str) => `(${str})`

const transform = pipe(pickTag, toLowerCase, bracketify)

const output = transform({ tag: 'JAVASCRIPT' })

/* ====================== */

const recipe = {
  name: 'Spagethi',
  ingredients: ['egg', 'salt'],
}

const pickIngredients = (recipe) => recipe.ingredients
const addIngredients = (ing) => (addIng) => [...addIng, ing]
const searchIngredients = (ing) => (ings) =>
  ings.map((data) => (data === ing ? `${data} white` : data))

const transform2 = pipe(
  pickIngredients,
  addIngredients('cream'),
  searchIngredients('egg')
)
const output2 = transform2(recipe)
console.log(output2)

/* ====================== */

const addedIng = {
  ...recipe,
  ingredients: [...recipe.ingredients, 'cream'],
}

const updatedIng = {
  ...recipe,
  ingredients: [
    ...recipe.ingredients,
    ...recipe.ingredients.map((ing) => (ing === 'egg' ? 'egg white' : ing)),
  ],
}

console.log(updatedIng)
