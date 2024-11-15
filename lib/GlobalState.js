"use client"
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children, initialIsMobile = false }) => {
  const [me, setMe] = useState(null);
  const [actualDate, setActualDate] = useState(new Date());
  const [actualEditDate, setActualEditDate] = useState(new Date());
  const [typeView, setTypeView] = useState('month');
  const [leftBar, setLeftBar] = useState(true);
  const [addEventConfig, setAddEventConfig] = useState(false);
  const [editEventConfig, setEditEventConfig] = useState(false);
  const [listEvents, setListEvents] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [idUserList, setIdUserList] = useState([]);
  const [isMobile, setIsMobile] = useState(initialIsMobile);

  useEffect(() => {
    const detectDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      me, setMe, 
      actualDate, setActualDate, 
      actualEditDate, setActualEditDate, 
      editEventConfig, setEditEventConfig, 
      typeView, setTypeView, 
      leftBar, setLeftBar, 
      listEvents, setListEvents, 
      addEventConfig, setAddEventConfig, 
      listUsers, setListUsers, 
      idUserList, setIdUserList, 
      isMobile, setIsMobile 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
