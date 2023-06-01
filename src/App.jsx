import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdviceCard from './components/AdviceCard';
import LayoutWithHeader from './pages/LayoutWithHeader';

function App() {
  return (
    <Switch>
      <Route
        path="/" render={ () => <LayoutWithHeader><AdviceCard /></LayoutWithHeader> }
        exact
      />
      <Route path="*" render={ () => 'NOT FOUND' } />
    </Switch>
  );
}
export default App;
