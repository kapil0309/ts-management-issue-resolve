import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PushNotification from './components/PushNotification'
import getAllNotification from './components/GetAllNotification';
import NavigationBar from './components/NavigationBar';



function App() {
  return (
    <Switch>
    <div className="App">
      <Route path="/" component={NavigationBar} />
      <Route path="/AddNotification/Add" component={PushNotification} />
      <Route exact path="/allNotification" component={getAllNotification} />
    </div>
    </Switch>
  );
}

export default App;
