import Router, { useRouter } from "next/router";
// style
import { Title } from "../../../styles/common";
// Store
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { css } from "@emotion/react";
import { useState } from "react";
//utils

// component
interface Props {
  userName?: string;
}
export const Header: React.FC<Props> = ({ userName }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = router.pathname;
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
