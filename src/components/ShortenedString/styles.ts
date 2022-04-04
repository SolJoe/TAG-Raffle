import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      position: 'fixed',
      bottom: device === DeviceType.Phone ? 20 : 30,
      right: device === DeviceType.Phone ? 20 : 30,
    }),
    scrollButton: {
      color: theme.palette.common.black,
      backgroundColor: '#ff5f5f',
      border: `2px solid ${'#ff5f5f'}`,
      '&:hover': {
        boxShadow: `0px 0px 10px ${'#ff5f5f'}, inset 0px 0px 5px ${'#ff5f5f'}`,
        backgroundColor: '#ff5f5f',
      },
    },
    scrollButtonIcon: {
      transform: `rotate(-90deg)`,
    },
  })
);
