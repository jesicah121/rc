import ProfilePhoto    from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/FullName';

import './App.css';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <div className="content">
      <Address/>
      <Fullname/>

      
    </div>
 
    </div>
  );
}

export default App;
