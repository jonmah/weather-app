import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './theme/global'
import WeatherForecast from './WeatherForecast'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <WeatherForecast />
  </ThemeProvider>
)

export default App
