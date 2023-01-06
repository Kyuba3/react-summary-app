import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import getTableById, { editTable } from '../../redux/tablesRedux';
import TableForm from '../features/TableForm';


const EditTableForm = () => {

    const { tableId } = useParams();
    const tableById = useSelector(({tables}) => getTableById({tables}, tableId));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = table => {
        dispatch(editTable({...table}));
        navigate('/');
    }

    if (!tableById) return <Navigate to='/' />

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