export const transformCountriesOrStates = A =>
  A.map(({ isoCode, name }) => ({ label: name, value: isoCode }))

export const transformCities = A =>
  A.map(({ name }) => ({ label: name, value: name }))
