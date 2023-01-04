import { Container, Card, Row, Button, Nav} from "react-bootstrap"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import {getAllTables} from "../../redux/tablesRedux";


const RenderAllTables = () => {

    const tables = useSelector(getAllTables);
    console.log("tables:" + tables);

    return(
        <Container>
          <Row className="d-flex flex-row col-12">
            {tables.map(table =>(
              <Card key={table.id} className="d-inline-flex flex-row justify-content-center pt-5">
                <Card.Title className="col-2"><b>Table </b>{table.id}</Card.Title>
                <Card.Text className="col-7"><b>Status: </b>{table.status}</Card.Text>
                <Nav className="">
                    <Nav.Link as={NavLink} to={"/table/" + table.id}>
                        <Button variant="primary" className="col-12 mb-3">
                            Show More
                        </Button>
                    </Nav.Link>
                </Nav>
              </Card>
            ))}  
          </Row> 
        </Container>
    );
};

export default RenderAllTables;