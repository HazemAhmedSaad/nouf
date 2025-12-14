import './App.css';
import Landing from './components/landing/landing';
import TimeLine from './components/timeline/timeLine';
import Customers from './components/customers/customer';

function App() {
  return (
    <div className="app overflow-hidden">
      <Landing />
      <Customers />
      <TimeLine />
    </div>
  );
}

export default App;
