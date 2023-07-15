import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { navbarPages } from "../constants/constants";
import Appear from "./animations/Appear.jsx";

function ResponsiveNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar
      position="sticky"
      className="bg-violet-950 max-w-screen lg:max-w-none"
    >
      <Appear>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile*/}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                background: "white",
                paddingLeft: "20px",
                paddingRight: "10px",
                cursor: "pointer",
              }}
              className="text-violet-700 logo-animated"
              onClick={scrollToTop}
            >
              Franco Cuellar
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
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
                {navbarPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      key={page}
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={600}
                      className="font-sans"
                    >
                      {page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Mobile*/}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
              className="logo-animated"
            >
              Franco Cuellar
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navbarPages.map((page) => (
                <Link
                  key={page}
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    className="animated-upwards font-sans"
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <div>
              <span className="hidden md:block">
                <a
                  href="https://www.linkedin.com/in/franco-cuellar/"
                  target="_blank"
                  className="mr-[10px] hover:text-sky-700 transition-colors duration-300 ease-in-out"
                >
                  <LinkedIn fontSize="large" />
                </a>
                <a
                  href="https://github.com/Franco-IC"
                  target="_blank"
                  className="hover:text-zinc-700 transition-colors duration-300 ease-in-out"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </span>
            </div>
          </Toolbar>
        </Container>
      </Appear>
    </AppBar>
  );
}
export default ResponsiveNavbar;
