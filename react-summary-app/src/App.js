import {Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables} from './redux/tablesRedux';

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  
  return (
    <main>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/table/:id' element={<Table/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;