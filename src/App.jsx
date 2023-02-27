import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import './App.css'
import Basket from './components/basket/Basket'
import Header from './components/header/Header'
import Meals from './components/meals/Meals'
import Summary from './components/summary/Summary'
import Snackbar from './components/UI/Snackbar'
import { darkTheme, lightTheme } from './lib/constans/theme'
import { uiActions } from './store/UI/ui.slice'

function App() {
  const dispatch = useDispatch()
  const [isBasketVisible, setBasketVisible] = useState(false)
  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  // console.log(snackbar)

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState)
  }, [])

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light'
        ? {
            ...lightTheme,
          }
        : {
            ...darkTheme,
          }
    return createTheme(currentTheme)
  }, [themeMode])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          <Basket onClose={showBasketHandler} open={isBasketVisible} />
        </Content>
        <Snackbar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          autoHideDuration={4000}
          onClose={() => dispatch(uiActions.closeSnackbar())}
        />
      </ThemeProvider>
    </div>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`
