import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PersonelList from './components/PersonelList';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Row>
      <Sidebar />
      <PersonelList />
      </Row>
    </div>
  );
}

export default App;
