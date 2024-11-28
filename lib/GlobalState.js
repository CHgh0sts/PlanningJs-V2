"use client"
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children, initialIsMobile = false }) => {
  const [me, setMe] = useState(null);
  const [actualDate, setActualDate] = useState(() => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
  });
  const [actualEditDate, setActualEditDate] = useState(() => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
  });
  const [typeView, setTypeView] = useState('month');
  const [leftBar, setLeftBar] = useState(true);
  const [addEventConfig, setAddEventConfig] = useState(false);
  const [editEventConfig, setEditEventConfig] = useState(false);
  const [listEvents, setListEvents] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [listUsersForEvent, setListUsersForEvent] = useState([]);
  const [idUserList, setIdUserList] = useState([]);
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  const [changeSize, setChangeSize] = useState(false);
  const [pageDashboard, setPageDashboard] = useState('Evenements')

  const verifDroit = (user, listDroitAutorise = []) => {
    const listDroitFromUser = user.listDroits;
    if(listDroitFromUser.includes(0)) return true;
    for (const droit of listDroitAutorise) {
      if (listDroitFromUser.includes(droit)) {
        return true;
      }
    }
    return false;
  };
  

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
      listUsersForEvent, setListUsersForEvent,
      idUserList, setIdUserList, 
      isMobile, setIsMobile,
      changeSize, setChangeSize,
      pageDashboard, setPageDashboard,
      verifDroit
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
