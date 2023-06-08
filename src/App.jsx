import { router } from "./Routes";
import Login from "./pages/Login";
import Theme from "./theme";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<Theme>
			<RouterProvider router={router} />
		</Theme>
	);
}

export default App;
