import { Container, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Container className="spinner-container">
      <Spinner animation="grow" />
    </Container>
  );
};

export default Loading;
