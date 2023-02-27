import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { getTheme } from '../../lib/constans/theme'
import BusketButton from './BusketButton'
import { uiActions } from '../../store/UI/ui.slice'
import { getBasket } from '../../store/basket/thunk'

const Header = ({ onShowBasket }) => {
  const items = useSelector((state) => state.basket.items)
  const [animationClass, setAnimationClass] = useState('')
  const themeMode = useSelector((state) => state.ui.themeMode)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount
    }, 0)

    return sum
  }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  const themeChangeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiActions.changeTheme(theme))
  }
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      />
      <Button
        onClick={themeChangeHandler}
        className={animationClass}
        count={calculateTotalAmount()}
        sx={{ color: 'white' }}
      >
        {themeMode === 'light' ? 'Light' : 'DARK'}
      </Button>
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.3125rem;
  background: ${getTheme().palette.primary.main};
  padding: 0 7.5rem;
  align-items: center;
  z-index: 1;
`

const Logo = styled.p`
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 3.5625rem;
  color: #ffffff;
  margin: 0;
`
