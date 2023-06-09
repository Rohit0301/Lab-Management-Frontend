import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
	palette: {
		primary: {
			main: "#116A7B",
		},
		secondary: {
			main: "#7b1fa2",
		},
	},
});
export default function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
