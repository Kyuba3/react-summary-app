import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom";
import getTableById, { editTableRequest } from '../../redux/tablesRedux';
import TableForm from '../features/TableForm';
import { Spinner } from "react-bootstrap";


const EditTableForm = () => {

    const { tableId } = useParams();
    const tableById = useSelector(state => getTableById(state, tableId));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = table => {
        dispatch(editTableRequest({...table, tableId}));
        navigate('/');
    };

    if (!tableById) {
      return ( 
        <Spinner animation="border" variant="primary" />
      );
    }
    
    return (
        <>
          <TableForm 
            action={handleSubmit}
            actionText={"Edit Table"}
            id={tableId}
            status={tableById.status}
            peopleAmount={tableById.peopleAmount}
            maxPeopleAmount={tableById.maxPeopleAmount}
            bill={tableById.bill}
          />
        </>
    );

}

export default EditTableForm;