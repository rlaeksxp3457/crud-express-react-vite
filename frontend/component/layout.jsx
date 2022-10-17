import React, {useState} from "react";
import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu.js";

export function Appbar() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box position={'static'} >
		<AppBar>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-controls={open ? 'basic-menu' : undefined}
					sx={{mr: 2}}
					onClick={handleClick}
				>
					<MenuIcon/>
				</IconButton>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
				<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
					CRUD
				</Typography>
			</Toolbar>
		</AppBar>
		</Box>
	)
}