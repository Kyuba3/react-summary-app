import { API_URL } from "../config";

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({tables}, tableId) => tables.find((table) => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const updateTables = (payload) => ({type: UPDATE_TABLE, payload});
export const editTable = (payload) => ({type: EDIT_TABLE, payload});
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));      
  }
};

export const editTableRequest = (payload) => {
  return(dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    };

    fetch(API_URL + '/tables/' + payload.id, options)
      .then(() => dispatch(editTable(payload)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type){
    case UPDATE_TABLE:
      return [...action.payload]
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload} : table));
    default:
      return statePart;
  };
};
export default tablesReducer;