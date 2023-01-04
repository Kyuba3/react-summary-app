import { Container, Card, Row} from "react-bootstrap"
import { useSelector } from "react-redux"
import {getAllTables} from "../../redux/tablesRedux";


const RenderAllTables = () => {

    const tables = useSelector(getAllTables);

    return(
        <Container>
          <Row className="d-flex justify-content-center col-12">
            {tables.map(table =>(
              <Card key={table.id}>
                <Card.Title>{table.name}</Card.Title>
              </Card>
            ))}  
          </Row> 
        </Container>
    );
};

export default RenderAllTables;