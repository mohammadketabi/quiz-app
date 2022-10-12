import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import QuestionsScreen from "./pages/QuestionsScreen/QuestionsScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
