const DATE_TEXT_PROPERTY = 'dt_txt'
const FORECAST_DATE_OPTIONS = { weekday: 'short', day: 'numeric' }
const ICON_IMG_URI = 'http://openweathermap.org/img/wn/'
const ICON_IMG_EXT = '@2x.png'

// Takes in forecast data, groups them by day and reduces the daily forecast to common patterns that we can present
export const getDailyForecast = (A, tempUnit) =>
  A?.length &&
  transformDailyForecast(
    A.reduce((a, f) => {
      const dateIndex = f[DATE_TEXT_PROPERTY].split(' ')[0]
      const description = f.weather[0].description
      const icon = f.weather[0].icon
      const main = f.weather[0].main
      const temp = f.main.temp
      if (a[dateIndex]) {
        a[dateIndex].description.push(description)
        a[dateIndex].icon.push(icon)
        a[dateIndex].main.push(main)
        a[dateIndex].temp.push(temp)
      } else {
        a[dateIndex] = {
          date: transformDate(f[DATE_TEXT_PROPERTY]),
          description: [description],
          icon: [icon],
          main: [main],
          temp: [temp],
        }
      }
      return a
    }, {}),
    tempUnit
  )

// Takes in an array and returns the most common occurrence
const reduceToMostCommon = A => {
  const uniques = Array.from(new Set(A))
  return uniques.reduce(
    (a, b) => {
      const numOccurrences = A.filter(x => x === b).length
      if (numOccurrences > a.num) {
        a.name = b
        a.num = numOccurrences
      }
      return a
    },
    { name: null, num: -Infinity }
  ).name
}

// Takes all the accrued, date-separated forecasts and reduces them to the most common pattern
const transformDailyForecast = (O, tempUnit) =>
  Object.values(O).map(a => ({
    date: a.date,
    description: reduceToMostCommon(a.description),
    icon: transformIconImgLink(reduceToMostCommon(a.icon)),
    main: reduceToMostCommon(a.main),
    temp: {
      high: `${Math.ceil(Math.max(...a.temp))}º${tempUnit}`,
      low: `${Math.ceil(Math.min(...a.temp))}º${tempUnit}`,
    },
  }))

// Takes a date string and transforms it to day-of-week and date number (Ex. 'Fri 12')
const transformDate = dateString => {
  const date = new Date(dateString)
  return date
    .toLocaleDateString('en-US', FORECAST_DATE_OPTIONS)
    .split(' ')
    .reverse()
    .join(' ')
}

// Takes an icon reference and returns the appropriate icon link
const transformIconImgLink = iconRef =>
  `${ICON_IMG_URI}${iconRef}${ICON_IMG_EXT}`
