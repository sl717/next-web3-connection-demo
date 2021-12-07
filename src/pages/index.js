import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Wrapper, { CenteredDiv } from '../components/Wrapper'
import ReactCopyButtonWrapper from 'react-copy-button-wrapper'
import { ActionButton } from '../components/styleHook'
import { ContentCopyRounded, ArrowDownwardRounded, CallMadeRounded, CompareArrowsRounded } from '@mui/icons-material'
import { ButtonGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ThemeContext from '../components/ThemeContext'
import ImageSlider from '../components/ImageSlider'

export default function Home({ connected, address, getResult, balance, symbol, ...props }) {
  const { themes } = useContext(ThemeContext)
  const globalUseStyles = makeStyles(() => ({
    userCard: {
      marginTop: 20,
      marginRight: 'auto',
      marginLeft: 'auto',
      width: 360,
      marginBottom: 40,
      backgroundColor: themes === 'light' ? '#fff' : '#333'
    },
    coverImage: {
      width: '100%'
    },
    addressText: {
      fontWeight: 900,
      textAlign: 'center',
      fontSize: 22,
      paddingTop: 15,
      paddingBottom: 15,
      color: themes === 'light' ? '#333' : '#fff',
      backgroundColor: themes === 'light' ? '#fff' : '#444',
      '& svg': {
        fill: themes === 'light' ? '#333' : '#fff',
      }
    },
    balanceText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 15,
      display: 'flex',
      alignItems: 'baseline',
      fontWeight: 900,
      justifyContent: 'center',
      color: themes === 'light' ? '#333' : '#fff',
      '& span': {
        fontSize: 18
      }
    },
  }))

  const globalClasses = globalUseStyles()

  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }} className={globalClasses.userCard}>
        <Typography component='h2' className={globalClasses.addressText}>
          {connected ? '0x' + address.slice(2, 4) + '...' + address.slice(38, 42) : 'LOCKED'}
          <ReactCopyButtonWrapper text={address !== null ? address : ''}>
            <IconButton aria-label='settings' size='small'>
              <ContentCopyRounded fontSize='small' />
            </IconButton>
          </ReactCopyButtonWrapper>
        </Typography>
        <ImageSlider />
        <CardContent>
          {/* <img src='../developer.svg' className={globalClasses.coverImage} data-nsfw-filter-status /> */}
          <Typography component='h1' className={globalClasses.balanceText}>
            {connected &&
              <>
                {balance !== 0 ? balance.slice(0, 7) : 0}<span>{symbol}</span>
              </>
            }
          </Typography>
          <CenteredDiv>
            <ButtonGroup variant='contained' aria-label='outlined primary button group'>
              <ActionButton startIcon={<ArrowDownwardRounded fontSize='small' />}>Buy</ActionButton>
              <ActionButton startIcon={<CallMadeRounded fontSize='small' />}>Send</ActionButton>
              <ActionButton startIcon={<CompareArrowsRounded fontSize='small' />}>Swap</ActionButton>
            </ButtonGroup>
          </CenteredDiv>
        </CardContent>
        <ActionButton variant='contained' fullWidth onClick={getResult}>GET</ActionButton>
      </Card >
    </Wrapper >
  )
}
