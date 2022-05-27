import './App.css';
import Lugares from './components/lugares';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div className="container mt-4">
      <h1><FormattedMessage id="MyEspaces"/></h1>
      <Lugares />
    </div>
  );
}

export default App;
