import React, { FC, useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, Home } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/images/nav_logo.png';
import { useStyles } from './styles';
import { routes } from '../../../router/routes';
import AirdropButton from '../../AirdropButton';
import { useViewport } from '../../../hooks/useViewport';
import { DeviceType } from '../../../providers/ViewportProvider';
import Drawer from '../Drawer';
import WalletButton from '../WalletButton';
import NavButton from '../NavButton';
import { TESTING } from '../../../config/misc';
import { isAdmin } from '../../AdminRoute';

export interface HeaderProps {
  onBackNavigation?: () => void;
}

const NAV_LINKS_LIST = [
  { label: 'Home', target: routes.HOME },
  { label: 'Raffle', target: routes.RAFFLES },
  // { label: 'Stake', target: routes.STAKE },
  { label: 'Tools', target: routes.TOOLS },
  { label: 'Admin Panel', target: routes.ADMIN.HOME, admin: true },
];

const Header: FC<HeaderProps> = ({ onBackNavigation }) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { connected, publicKey } = useWallet();
  const { push, location } = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={"nav bg-black"}>
      <div className="nav bg-black">
        {device === DeviceType.Phone ? (
          <div className={classes.drawerHeader}>
            {onBackNavigation ? (
              <IconButton size={'medium'} onClick={() => onBackNavigation()}>
                <ChevronLeft />
              </IconButton>
            ) : (
              <IconButton size={'medium'} onClick={() => push(routes.HOME)}>
                <Home />
              </IconButton>
            )}
            <IconButton size={'medium'} onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              wallet={publicKey}
              isOpen={isDrawerOpen}
              setIsOpen={setIsDrawerOpen}
              navLinksList={NAV_LINKS_LIST}
            />
          </div>
        ) : (
          <div className='nav-content'>
            <div className=''>
              <IconButton
                onClick={() => push(routes.HOME)}
                className={classes.homeButton}
              >
                <img
                  src={logo}
                  alt={'Site banner'}
                  className={classes.homeButtonIcon}
                />
              </IconButton>
            </div>
            <div className={classes.navContainer}>
              {NAV_LINKS_LIST.filter(
                ({ admin }) => !admin || (admin && isAdmin(publicKey))
              ).map(({ label, target }) => (
                <NavButton
                  key={target}
                  label={label}
                  target={target}
                  isCurrent={location.pathname === target}
                  style={{ marginRight: '20px' }}
                />
              ))}
              {connected && TESTING && <AirdropButton />}
              <div className={classes.walletButtonContainer}>
                <WalletButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
