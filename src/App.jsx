import { PageRoutes } from "./routes/Routes";
import store from "./store";
import Theme from "./theme";
import { Provider } from "react-redux";

function App() {
	return (
		<Theme>
			<Provider store={store}>
				<PageRoutes />
			</Provider>
		</Theme>
	);
}

export default App;
