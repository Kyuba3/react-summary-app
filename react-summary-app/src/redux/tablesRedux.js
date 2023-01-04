//selectors
export const getAllTables = ({tables}) => tables;
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
// action creators
export const updateTables = (payload) => ({type: UPDATE_TABLE, payload});
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));      
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;