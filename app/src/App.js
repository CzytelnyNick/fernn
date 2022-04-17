import { Routes ,Route, BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Index from './components';
import Facilities from './components/facilities';
import Login from './components/login';
import ServicePage from './components/service';
import NotFound from './components/notFound';

function App() {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/a" element={<Facilities />} />
          <Route path="/g" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
