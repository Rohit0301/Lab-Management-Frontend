import { PageRoutes } from "./routes/Routes";
import Theme from "./theme";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
	return (
		<Theme>
			<PageRoutes />
		</Theme>
	);
}

export default App;
