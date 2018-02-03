import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AsyncComponent } from './utils/AsyncComponentLoader';


const home = () => import(/* webpackChunkName: "home" */ './Home/Home');

class App extends React.Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                    <section className="content">
                        <Switch>
                            <Route exact={true} path="/" component={() => <AsyncComponent moduleProvider={home}/>}/>
                            {/* <Route path="/maps" component={Maps} />
                            <Route path="/blog" component={Blog} />
                            <Route path="*" component={NotFound} /> */}
                        </Switch>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
