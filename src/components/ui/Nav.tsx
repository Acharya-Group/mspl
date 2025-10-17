"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { navDropdowns } from "@/utils/data";

const Nav = () => {
  const pathname = usePathname();
  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openSubAccordion, setOpenSubAccordion] = useState<number | null>(null);

  const isLinkActive = (href: string) => pathname === href;

  return (
    <div className="bg-white sticky top-0 shadow z-[1100]">
      <AppBar position="sticky" color="default" sx={{ bgcolor: "#14AEE4", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
       

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2, alignItems: "center" }}>
            {/* Home link */}
            <Button
              component={Link}
              href="/"
              sx={{
                color: isLinkActive("/") ? "var(--tw-text-primary)" : "#261b7d",
                borderBottom: isLinkActive("/") ? "2px solid var(--tw-text-primary)" : "2px solid transparent",
                borderRadius: 0,
                "&:hover": {color:"text-green"},
              }}
            >
              Home
            </Button>

            {/* Dropdowns */}
            {navDropdowns.map((dropdown, index) => {
              let closeTimeout: NodeJS.Timeout;

              const openMenu = (e: React.MouseEvent<HTMLElement>) => {
                clearTimeout(closeTimeout);
                setDesktopAnchor(e.currentTarget);
                setCurrentDropdown((prev) => (prev === index ? null : index)); 
              };

              const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
                clearTimeout(closeTimeout);
                setDesktopAnchor(e.currentTarget);
                setCurrentDropdown(index);
              };

              const handleLeave = () => {
                closeTimeout = setTimeout(() => {
                  setCurrentDropdown(null);
                  setDesktopAnchor(null);
                }, 200);
              };

              return (
                <Box
                  key={index}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  sx={{ position: "relative", display: "inline-block" }}
                >
                  <Button
                    endIcon={<ExpandMore />}
                    onClick={openMenu}
                    sx={{
                      color: "#261b7d",
                      fontWeight: 500,
                      fontSize: "14px",
                      "&:hover": { color: "var(--tw-text-primary)" },
                    }}
                  >
                    {dropdown.title}
                  </Button>

                  <Menu
                    anchorEl={desktopAnchor}
                    open={currentDropdown === index}
                    onClose={() => setCurrentDropdown(null)}
                    MenuListProps={{
                      onMouseEnter: () => clearTimeout(closeTimeout),
                      onMouseLeave: handleLeave,
                    }}
                    PaperProps={{
                      sx: {
                        maxHeight: 300,
                        overflowY: "auto",
                        mt: 1,
                        px: 0.5,
                        "&::-webkit-scrollbar": { width: 6 },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: "#ccc",
                          borderRadius: 3,
                        },
                      },
                    }}
                  >
                    {dropdown.links.map((link, i) =>
                      link.type === "submenu" ? (
                        <Box key={i}>
                          <MenuItem disabled sx={{ fontWeight: 600 }}>
                            {link.name}
                          </MenuItem>
                          {link.sublinks?.map((sublink, j) => (
                            <MenuItem
                              key={j}
                              component={sublink.type === "download" ? "a" : Link}
                              href={sublink.href}
                              {...(sublink.type === "download" ? { download: true } : {})}
                              sx={{
                                pl: 3,
                                "&:hover": {
                                  color: "var(--tw-text-primary)",
                                  bgcolor: "rgba(0,0,0,0.03)",
                                },
                              }}
                            >
                              {sublink.name}
                            </MenuItem>
                          ))}
                        </Box>
                      ) : (
                        <MenuItem
                          key={i}
                          component={link.type === "download" ? "a" : Link}
                          href={link.href}
                          {...(link.type === "download" ? { download: true } : {})}
                          sx={{
                            "&:hover": {
                              color: "var(--tw-text-primary)",
                              bgcolor: "rgba(0,0,0,0.03)",
                            },
                          }}
                        >
                          {link.name}
                        </MenuItem>
                      )
                    )}
                  </Menu>
                </Box>
              );
            })}
          </Box>
             {/* Left section - toggle icon */}
          <IconButton
            sx={{ display: { xs: "flex" } }}
            onClick={() => setMobileOpen(true)}
            className="text-primary"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 0 }}>
          <Box className="flex justify-end mb-2">
            <IconButton onClick={() => setMobileOpen(false)} className="text-primary">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navDropdowns.map((dropdown, index) => (
              <Box key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <ListItemText primary={dropdown.title} />
                    {openAccordion === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {openAccordion === index && (
                  <List sx={{ pl: 2 }}>
                    {dropdown.links.map((link, i) =>
                      link.type === "submenu" ? (
                        <Box key={i}>
                          <ListItemButton
                            onClick={() => setOpenSubAccordion(openSubAccordion === i ? null : i)}
                            sx={{ justifyContent: "space-between" }}
                          >
                            <ListItemText primary={link.name} />
                            {openSubAccordion === i ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>

                          {openSubAccordion === i && (
                            <List sx={{ pl: 3 }}>
                              {link.sublinks?.map((sublink, j) => (
                                <ListItemButton
                                  key={j}
                                  component={sublink.type === "download" ? "a" : Link}
                                  href={sublink.href}
                                  onClick={() => setMobileOpen(false)}
                                  {...(sublink.type === "download" ? { download: true } : {})}
                                  sx={{ pl: 4 }}
                                >
                                  <ListItemText primary={sublink.name} />
                                </ListItemButton>
                              ))}
                            </List>
                          )}
                        </Box>
                      ) : (
                        <ListItemButton
                          key={i}
                          component={link.type === "download" ? "a" : Link}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          {...(link.type === "download" ? { download: true } : {})}
                        >
                          <ListItemText primary={link.name} />
                        </ListItemButton>
                      )
                    )}
                  </List>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Nav;
