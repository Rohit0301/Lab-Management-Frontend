import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
	palette: {
		primary: {
			main: "#116A7B",
		},
	},
});
export default function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
