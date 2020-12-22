import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";

// Components
import DetailsPhone from "./components/detailsPhone";
import PhoneGrid from "./components/phoneGrid";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <PhoneGrid></PhoneGrid>
          </Route>
        </Switch>
        <Switch>
          <Route path="/details/:id">
            <DetailsPhone></DetailsPhone>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
