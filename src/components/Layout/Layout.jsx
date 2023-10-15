import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <Container fluid className="p-0">
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
