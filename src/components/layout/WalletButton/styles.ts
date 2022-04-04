import { Theme, alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  walletConnectButton: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: theme.palette.common.white,
    boxShadow: '0 0 5px 2px #fd090b, inset 0 0 10px 0px #fd090b',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'RGBA(254, 8, 11, 0.2)',
      borderColor: theme.palette.common.white,
    },
  },
  walletDisconnectButton: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: theme.palette.common.white,
    boxShadow: `0 0 5px 2px ${'#ff5f5f'}, inset 0 0 10px 0px ${'#ff5f5f'}`,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha('#ff5f5f', 0.2),
      borderColor: theme.palette.common.white,
    },
  },
}));
