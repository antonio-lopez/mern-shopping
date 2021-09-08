import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';
import CartScreen from './components/CartScreen/CartScreen';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path='/product/:id' component={ProductScreen}></Route>
          <Route exact path='/cart' component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
