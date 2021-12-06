import React from 'react';
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';
import { ConnectButton } from './styleHook';

export default function Header({ connected, address, handleConnect, network, ...props }) {

  return (
    <div className="header">
      <Container>
        <div className="header-content">
          <div className="logo">
            <h2>{network}</h2>
          </div>
          <div className="header-actions">
            <ThemeSwitch />
            <ConnectButton color="primary" variant="contained" onClick={handleConnect} size="large" disabled={connected}>
              {!connected ? "CONNECT" : "0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
            </ConnectButton>
          </div>
        </div>
      </Container>
    </div>
  )
}