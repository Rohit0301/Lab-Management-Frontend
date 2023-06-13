import { CustomSnackbar } from "./components";
import GlobalContext from "./context";
import { PageRoutes } from "./routes/Routes";
import store from "./store";
import Theme from "./theme";
import { Provider } from "react-redux";

function App() {
	return (
		<Theme>
			<GlobalContext>
				<Provider store={store}>
					<PageRoutes />
				</Provider>
				<CustomSnackbar />
			</GlobalContext>
		</Theme>
	);
}

export default App;
