import React, { useState, useEffect, useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Wrapper, { CenteredDiv } from '../components/Wrapper'
import Web3 from 'web3'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ethers } from 'ethers'
import ReactCopyButtonWrapper from 'react-copy-button-wrapper'
import { ActionButton } from '../components/styleHook'
import { ContentCopyRounded, ArrowDownwardRounded, CallMadeRounded, CompareArrowsRounded, Contrast } from '@mui/icons-material'
import { ButtonGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Header from '../components/Header'
import ThemeContext from '../components/ThemeContext'
import { EthereumRpcError, EthereumProviderError, getMessageFromCode, errorCodes } from 'eth-rpc-errors'

import { URDT_SmartContractAddress, USDT_SmartContract } from '../../config'

let chainData = undefined
let chainId = undefined
let accounts = undefined

export default function Home() {

  const { theme } = useContext(ThemeContext)

  const globalUseStyles = makeStyles(() => ({
    userCard: {
      marginTop: 20,
      marginRight: 'auto',
      marginLeft: 'auto',
      width: 360,
      marginBottom: 40,
      backgroundColor: theme === 'light' ? '#fff' : '#333'
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
      color: theme === 'light' ? '#333' : '#fff',
      backgroundColor: theme === 'light' ? '#fff' : '#444',
      '& svg': {
        fill: theme === 'light' ? '#333' : '#fff',
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
      color: theme === 'light' ? '#333' : '#fff',
      '& span': {
        fontSize: 18
      }
    },
  }))

  const [address, setAddress] = useState('')
  const [connected, setConnected] = useState(false)
  const [balance, setBalance] = useState('')
  const [symbol, setSymbol] = useState('')
  const [networkName, setNetworkname] = useState('')

  const globalClasses = globalUseStyles()

  const connectWallet = async () => {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(
        async () => {
          setAccountInfo()
        }
      )
      .catch((error) => {
        if (error.code === -32002) {
          // EIP-1193 userRejectedRequest error
          !connected &&
            toast.error('The wallet is opened. Please connect', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'colored'
            })
        } else if (error.code === 4001) {
          !connected &&
            toast.error('You rejected the connect, please connect the MetaMask', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'colored'
            })
        }
      })
  }

  const setAccountInfo = async () => {
    toast.dismiss()
    const web3 = new Web3(Web3.givenProvider)
    accounts = await web3.eth.getAccounts()
    chainId = await web3.eth.getChainId()
    const balanceAccount = await web3.eth.getBalance(accounts[0])
    setSymbol(getChainData(chainId))
    setConnected(true)
    setAddress(accounts[0])
    setBalance(ethers.utils.formatEther(balanceAccount))
  }

  const getChainData = (id) => {
    fetch('https://chainid.network/chains.json')
      .then(resp =>
        resp.json()
      ).then((json) => {
        chainData = json
        setSymbol(chainData.find(x => x.chainId === id).nativeCurrency.symbol)
        setNetworkname(chainData.find(x => x.chainId === id).name)
      })
  }

  const getUsdtBalance = async () => {
    const web3 = new Web3(Web3.givenProvider)
    const Contract = new web3.eth.Contract(USDT_SmartContract, URDT_SmartContractAddress)
    const balance1 = await Contract.methods.balanceOf('0x1AA8CC0549e936D449e649D6D35B4c107a589D08')
    const balance = await Contract.methods.owner()
  }

  const getResult = async () => {
    const web3 = new Web3(Web3.givenProvider)
    const accounts = await web3.eth.getAccounts()
    const blockNumber = await web3.eth.getBlockNumber()
    const block = await web3.eth.getBlock(blockNumber)
    const blockTransactionCount = await web3.eth.getBlockUncleCount(blockNumber)
    // const transaction = await web3.eth.getTransaction('0x82d998aaa6b6cf8b8a055aca7eb42d5991f781785a3c11db2167ad755d8627c5')
    // web3.eth.getTransactionCount(accounts[0]).then(console.log);
    web3.eth.getChainId()
      .then(console.log)
      .catch((err) => {
        const errorCode = err.code
        console.log(getMessageFromCode(errorCode))
      })

  }

  useEffect(async () => {
    connectWallet()
    ethereum.on('chainChanged', (chainId) => {
      setAccountInfo()
    }
    )
    ethereum.on('accountsChanged', () => {
      setConnected(false)
    })
    // getUsdtBalance()
  }, [])

  useEffect(() => {
    connectWallet()
  }, [connected])

  return (
    <>
      <Header
        handleConnect={connectWallet}
        address={address}
        connected={connected}
        network={networkName}
      />
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
          <CardContent>
            <img src='../person.svg' className={globalClasses.coverImage} data-nsfw-filter-status />
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
        <ToastContainer style={{ fontSize: 12, padding: '5px !important', lineHeight: '15px' }} />
      </Wrapper >
    </>
  )
}
