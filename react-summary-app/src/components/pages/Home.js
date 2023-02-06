import { Col, Row,} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import List from "../views/List";

const Home = () => {
  
  const tablesList = useSelector(getAllTables);

    return (
        <Row>
          <Col>
            <h1>All tables</h1>
            {tablesList.map(tableList => <List props={tableList} key={tableList.id} />)}
          </Col>
        </Row>
    );
}

export default Home;