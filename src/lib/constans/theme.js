import store from '../../store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#8a2b06',
      light: '#b35732',
      dark: '#541a04',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6a6461',
      light: '#6a6461',
      dark: '#6a6461',
      contrastText: '#fff',
    },
    error: {
      main: ' #b50909',
      light: '#b50909',
      dark: '#b50909',
      contrastText: '#fff',
    },
    succes: {
      main: '#57ec59',
      light: '#57ec59',
      dark: '#57ec59',
      contrastText: '#fff',
    },
  },
  typegraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  spacing: {},
}
export const darkTheme = {
  palette: {
    primary: {
      main: '#060f8a',
      light: '#060f8a',
      dark: '#060f8a',
      contrastText: 'blue',
    },
    secondary: {
      main: '#6a6461',
      light: '#6a6461',
      dark: '#6a6461',
      contrastText: '#fff',
    },
    error: {
      main: ' #b50909',
      light: '#b50909',
      dark: '#b50909',
      contrastText: '#fff',
    },
    succes: {
      main: '#57ec59',
      light: '#57ec59',
      dark: '#57ec59',
      contrastText: '#fff',
    },
  },
  typegraphy: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  spacing: {},
}

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode
  return currentTheme === 'light' ? lightTheme : darkTheme
}
