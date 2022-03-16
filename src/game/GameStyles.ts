import {makeStyles} from '@mui/styles';

export const gameStyles = makeStyles({
  cell: {
    height: 30,
    borderRadius: '0px !important',
  },
  text: {
    fontWeight: 'bold',
    margin: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
