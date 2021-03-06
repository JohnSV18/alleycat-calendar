import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavigationBar from './NavigationBar/NavigationBar';
import PastRacesList from './PastRacesList/PastRacesList';
import CreateRace from './CreateRace/CreateRace';
import RacesList from './RacesList/RacesList';
import AboutUs from './AboutUs/AboutUs';
import AlleycatDetails from './AlleycatDetails/AlleycatDetails'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={AboutUs}/>
          <Route path="/all" component={PastRacesList}/>
          <Route path="/create" component={CreateRace}/>
          <Route path="/findall" component={RacesList}/>
          <Route path="/race/:id" component={AlleycatDetails}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>,
      </Router>
      <Footer />
    </div>
  );
}

export default App;
