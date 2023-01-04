import { Card, Container, Row,} from "react-bootstrap";
import RenderAllTables from "../features/RenderAllTables";
import Header from "../views/Header";

const Home = () => {
    return (
        <Container>
          <Row className="justify-content-between col-12">
            <Header />
            <Card.Title className="col-md-auto fs-2 mt-4">
              All tables
            </Card.Title>
          </Row>
          <RenderAllTables />
        </Container>
    );
}

export default Home;