import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { url } from 'inspector';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
