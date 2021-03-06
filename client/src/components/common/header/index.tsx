import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Divider,
  Typography,
  List,
  Toolbar,
  CssBaseline,
  Drawer,
  Menu,
  MenuItem,
} from '@mui/material'

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import MenuIcon from '@mui/icons-material/Menu'
import { AccountCircleTwoTone } from '@mui/icons-material'
import { fetchAsyncLogOut } from '../../../stores/slices/loginSlice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import Router from 'next/router'
const drawerWidth = 240
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const Header = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(fetchAsyncLogOut())
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Box sx={{ display: `flex`, alignItems: `center` }}>
          <Toolbar sx={{ flexGrow: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Attendance Management
            </Typography>
          </Toolbar>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircleTwoTone />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose
                  Router.push(`/my_page`)
                }}
              >
                My Page
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose()
                  logOut()
                }}
              >
                LogOut
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemGrid>
            <AccountCircleTwoTone sx={{ width: 20 }} />
            <Link href={`/my_page`}>
              <a>
                <ListItemText primary={`my page`} />
              </a>
            </Link>
          </ListItemGrid>
          <ListItemGrid>
            <AccessAlarmsIcon sx={{ width: 20 }} />
            <Link href={`/punch`}>
              <a>
                <ListItemText primary={`punch`} />
              </a>
            </Link>
          </ListItemGrid>
          <ListItemGrid>
            <FormatListNumberedIcon sx={{ width: 20 }} />
            <Link href={`/punch_list`}>
              <a>
                <ListItemText primary={`punch list`} />
              </a>
            </Link>
          </ListItemGrid>
          {/* {['my_page', 'punch'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link href={`/${text}`}>
                <a>
                  <ListItemText primary={text} />
                </a>
              </Link>
            </ListItem>
          ))} */}
        </List>
        <Divider />
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}
    </Box>
  )
}

const ListItemGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <ListItem button sx={{ display: `flex`, alignItems: `center`, gap: 2 }}>
      {children}
    </ListItem>
  )
}

export default Header
