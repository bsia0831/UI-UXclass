import './css/style.css';
import {Route} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './components/Main.js';
import Department from './components/Department.js';
import Flickr from './components/Flickr.js';
import Youtube from './components/Youtube.js';
import Board from './components/Board';

function App() {  
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/flickr" component={Flickr}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/Board" component={Board}></Route>

      <Footer />
    </div>
  );
}

export default App;
