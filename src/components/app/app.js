import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Example from "../../services/dummy-swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service"; //use it for tests
import { SwapiServiceProvider } from '../swapi-service-context';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage  } from '../pages';


import './app.css';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
};

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };

    render() {

        const { isLoggedIn } = this.state;

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className='stardb-app'>
                        <Header onServiceChange={this.onServiceChange} />
                        <ErrorBoundry>
                           <RandomPlanet />
                           {/*<Example />*/}

                           <Switch>
                                <Route path='/'
                                   render={()=> <h2>Welcome to StarDB</h2>}
                                    exact />
                                <Route path='/people/:id?' component={PeoplePage} />
                                <Route path='/planets' component={PlanetsPage} />
                                <Route path='/starships' exact component={StarshipsPage} />
                                <Route path='/starships/:id'
                                  render={({ match })=> {
                                      const {id} = match.params;

                                      return <StarshipDetails itemId={ id }/>
                                  }} />
                                <Route path='/login'
                                  render={()=> (
                                      <LoginPage isLoggedIn={isLoggedIn}
                                                onLogin={this.onLogin} />
                                  )}  />
                                <Route path='/secret'
                                   render={()=> (
                                       <SecretPage isLoggedIn={isLoggedIn} />
                                   )} />

                                   {/*<Redirect to='/' />*/}
                                   <Route render={()=> <h1>Not found</h1>} />
                           </Switch>
                       </ErrorBoundry>
                </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
}

