import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    50: '#1D5CA9',
    100: '#2564B7',
    200: '#2D6CC5',
    300: '#407BD6',
    400: '#538CDD',
    500: '#3182CE',
    600: '#699FD9'
  }
}

const fonts = {
  heading: 'Inter Variable, -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  body: 'Inter Variable, -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  mono: "'Roboto Mono Variable', monospace"
}

const overrides = {
  global: () => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      backgroundColor: 'rgb(236 236 236)',
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors,
  styles: overrides,
  fonts
}

const theme = extendTheme(config)

export default theme