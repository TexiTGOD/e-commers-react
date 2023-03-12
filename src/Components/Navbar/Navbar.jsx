import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { fontSize } from "@mui/system";
import { pink, red } from "@mui/material/colors";
import CartWidget from "../CartWidget/CartWidget";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const pages = ["Nosotros", "Menu", "Contacto", <CartWidget />];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Grid2 xs={12} sm={12} md={12}>
        <AppBar
          color="secondary"
          position="static"
          sx={{
            height: 120,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* LOGO */}
              <Link
                to="/"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Avatar
                  src="https://res.cloudinary.com/del0xutqp/image/upload/v1678413517/img/New%20folder%20%285%29/logo_xurka3.png"
                  sx={{
                    marginTop: 1,
                    mr: 2,
                    width: 100,
                    height: 100,
                    fontFamily: "monospace",
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </Link>
              {/*Texto del logo*/}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 40,
                }}
              >
                {/* El texto*/}
              </Typography>
              {/*Responsive */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Avatar
                src="https://res.cloudinary.com/del0xutqp/image/upload/v1678413517/img/New%20folder%20%285%29/logo_xurka3.png"
                sx={{
                  marginTop: 1,
                  mr: 2,
                  width: 100,
                  height: 100,
                  fontFamily: "monospace",
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
              />

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: 20,
                      marginRight: 10,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid2>
    </div>
  );
}
export default ResponsiveAppBar;
