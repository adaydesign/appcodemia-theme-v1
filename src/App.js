import { ChakraProvider } from "@chakra-ui/react"
import AppHeader from "./components/layout/AppHeader"
import AppContent from "./components/layout/AppContent"
import AppFooter from "./components/layout/AppFooter"
import AppRouter from "./components/layout/AppRouter"
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <AppHeader />
          <AppContent >
            <AppRouter />
          </AppContent>
          <AppFooter />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
