import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Login, Todo, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;