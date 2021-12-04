import '../assets/scss/style.scss'
import { AppThemeProvider } from '../components/ThemeContext';

function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  )
}

export default App
