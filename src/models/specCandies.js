import { v4 as uuid } from 'uuid'

const specCandies = []

export const getSpecCandies = () => specCandies

export const getSpecCandy = (id) => {
  return specCandies.find((specCandy) => specCandy.id === id)
}

export const createSpecCandy = (specCandy) => {
  const id = uuid()
  specCandies.push({ id, ...specCandy })
  return getSpecCandy(id)
}

export const updateSpecCandy = (id, specCandy) => {
  const databaseSpecCandy = getSpecCandy(id)
  if (databaseSpecCandy) {
    const specCandyIndex = specCandies.findIndex((s) => s.id === id)
    specCandies[specCandyIndex] = { id, ...specCandy }
  }
  return getSpecCandy(id)
}

export const deleteSpecCandy = (id) => {
  const specCandyIndex = specCandies.findIndex((s) => s.id === id)
  if (specCandyIndex !== -1) {
    specCandies.splice(specCandyIndex, 1)
    return true
  }
  return false
}
