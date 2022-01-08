import Router, { useRouter } from 'next/router'
// style
import { Title } from '../../../styles/common'
// Store
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"
//utils

// component
interface Props {
  userName?: string
}
export const Header: React.FC<Props> = ({
  userName
}) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const pathName = router.pathname

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
