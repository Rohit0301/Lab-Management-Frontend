import { CustomSnackbar } from "./components";
import GlobalContext from "./context";
import { PageRoutes } from "./routes/Routes";
import store from "./store";
import Theme from "./theme";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";

function App() {
	return (
		<Theme>
			<CookiesProvider>
				<GlobalContext>
					<Provider store={store}>
						<PageRoutes />
					</Provider>
					<CustomSnackbar />
				</GlobalContext>
			</CookiesProvider>
		</Theme>
	);
}

export default App;
