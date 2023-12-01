import { Fragment, useState } from "react";
import { useMainLayoutContext } from "../pages/MainLayout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { logout } from "../state/userSlice";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { deleteCart } from "../state/cartSlice";

const Wrapper = styled.div`
  position: relative;
  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    border-radius: var(--border-radius);
    background: green;
    visibility: hidden;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

const LogoutContainer = () => {
  // const [showLogout, setShowLogout] = useState(false);
  const { user } = useMainLayoutContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = async () => {
    await customFetch.get("/auth/logout");
    toast.success("Logged out", {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: false,
      theme: "colored",
    });
    dispatch(logout());
    dispatch(deleteCart());
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      {/* <div className="logout" onClick={() => setShowLogout(!showLogout)}>
        {user?.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {user?.fullName}
        <FaCaretDown />
      </div>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div> */}

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 31,
              height: 31,
              backgroundColor: "white",
            }}
            src={user?.avatar && user.avatar}
          >
            {!user?.avatar && user?.fullName.charAt(0).toUpperCase()}
          </Avatar>
          <Typography
            color="white"
            textTransform="capitalize"
            marginLeft="0.5rem"
          >
            {user?.fullName}
          </Typography>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/profile")}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate("/order")}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Order
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default LogoutContainer;
