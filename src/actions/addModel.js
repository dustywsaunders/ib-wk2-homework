
export const ADD_MODEL = 'ADD_MODEL'

export const addModel = (name, manufacturer, year, origin) => {
  return {
      type: ADD_MODEL,
      payload: {
        name: name,
        manufacturer: manufacturer,
        year: year,
        origin: origin
      }
  }
}