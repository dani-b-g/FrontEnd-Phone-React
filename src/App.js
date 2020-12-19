import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import PhoneGrid from "./components/phoneGrid";

function App() {
  return (
    <div>
      <Container fluid className="p-0">
        <Header></Header>
        <PhoneGrid></PhoneGrid>
      </Container>
    </div>
  );
}

export default App;
