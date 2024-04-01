import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./features/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import "./index.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 30, //30 segundos
		},
	},
});

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<AppRoutes />
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
