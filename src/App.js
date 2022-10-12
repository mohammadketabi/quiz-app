import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import QuestionsScreen from "./pages/QuestionsScreen/QuestionsScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#182747",
    },
    secondary: {
      main: "#628E90",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container className="container">
          <Switch>
            <Route path="/" exact>
              <WelcomeScreen />
            </Route>
            <Route path="/questions">
              <QuestionsScreen />
            </Route>
            <Route path="/result">
              <ResultScreen />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
