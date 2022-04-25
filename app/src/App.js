import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import React, { useState, useTransition } from 'react';

import axios from "axios";
import Cookies from 'universal-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Index from './components';
import Facilities from './components/facilities';
import Login from './components/login';
import ServicePage from './components/service';
import NotFound from './components/notFound';

const cookies = new Cookies();

export default function App() {
  const { i18n } = useTransition();
  const [selectedLang, setSelectedLang] = useState('pl');
  const [sessionID, setSessionID] = useState(cookies.get("sessionID"));
  const [user, setUser] = useState({});

  window.addEventListener("beforeunload", () => {
    axios({
      method: 'delete',
      url: `${process.env.REACT_APP_FERNN_API_HOST}/v1/auth/session`,
      withCredentials: false,
    })
  })
  
  return (
    <div>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/" element={<Index t={i18n} session={sessionID} user={user} />} />
          <Route path="/login" element={<Login t={i18n} session={sessionID} user={user} />} />
          <Route path="/a" element={<Facilities t={i18n} session={sessionID} user={user} />} />
          <Route path="/g" element={<ServicePage t={i18n} session={sessionID} user={user} />} />
          <Route path="*" element={<NotFound t={i18n} session={sessionID} user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};