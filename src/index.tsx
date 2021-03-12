import ReactDOM from 'react-dom';
import GuestList from './states/GuestList';
import UserSeach from './states/UserSeach';

const App = () => {
  return (
    <div>
      <UserSeach/>
      <GuestList/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
