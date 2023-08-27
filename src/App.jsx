import AllRouts from "./Components/AllRouts";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<HelmetProvider>
			<AllRouts />
		</HelmetProvider>
	);
}

export default App;
