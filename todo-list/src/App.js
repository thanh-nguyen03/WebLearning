import MainApp from './page/MainApp';
import Login from './page/Login';

import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const setLogin = () => {
    setIsLogin(true);
  };

  return <>{isLogin ? <MainApp /> : <Login setLogin={setLogin} />}</>;
}

export default App;
