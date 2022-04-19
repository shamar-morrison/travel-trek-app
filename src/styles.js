import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72px',
    boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px;',
  },
  container: {
    maxWidth: '100vw',
    padding: '0',
  },
  heading: {
    color: '#2081e2',
  },
  image: {
    marginLeft: '15px',
  },
}))