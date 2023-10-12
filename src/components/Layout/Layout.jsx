import { Container } from "react-bootstrap";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;