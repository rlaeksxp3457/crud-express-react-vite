import React, {useEffect, useState} from "react";
import {
	Box, Container,
	createTheme, Grid, Paper,
	ThemeProvider,
} from "@mui/material";
import axios from "axios";
import {Appbar} from "../component/layout.jsx";
import {KeyBoardCard} from "../component/card.jsx";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	const [keyboard, setKeyboard] = useState([])
	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://127.0.0.1:3000/keyboard/get',
		}).then(res => {
			setKeyboard(res.data)
		}).catch(err => console.log(err))
	}, [])
	
	return (
		<ThemeProvider theme={darkTheme}>
				<Appbar></Appbar>
			<main>
				<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container justifyContent="center" alignItems="center" spacing={4}>
					{
						keyboard.map((item) => (
							<Grid item xs={3}>
								<KeyBoardCard name={item}></KeyBoardCard>
							</Grid>
						))
					}
				</Grid>
				</Container>
			</main>
		</ThemeProvider>
	)
}

export default App
