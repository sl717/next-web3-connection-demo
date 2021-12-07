import Link from 'next/link'
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';
import { ConnectButton } from './styleHook';
import { Typography } from '@mui/material';

export default function Header({ connected, address, handleConnect, network, ...props }) {

  return (
    <div className="header">
      <Container>
        <div className="header-content">
          <div className="logo">
            <Typography component="h2" fontSize={22} fontWeight={900}>
              {network}
            </Typography>
          </div>
          <div className="header-actions">
            <Link href="/transactions">
              <a className="header-link">TX</a>
            </Link>
            <ConnectButton color="primary" variant="contained" onClick={handleConnect} size="large" disabled={connected}>
              {!connected ? "CONNECT" : "0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
            </ConnectButton>
            {/* <ThemeSwitch /> */}
          </div>
        </div>
      </Container>
    </div>
  )
}