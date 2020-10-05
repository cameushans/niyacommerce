import React,{useState} from 'react';
import './App.css';
import Home from "./component/Home"
import {Switch,Route, Redirect} from "react-router-dom"
import Shop from "./component/shop"
import Smile from "./component/smile"
import Choice from "./component/choice"
import {makeStyles,AppBar,Toolbar,Avatar,Button} from "@material-ui/core";
import BasicTable from "./component/panier";
import Header from "./component/Header";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { createStore ,applyMiddleware,combineReducers} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";//must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions 
import count from "./reducers/count.reducer";
import hide from "./reducers/hide.reducer"


const store = createStore(combineReducers({count,hide}),applyMiddleware(logger));
  
function App() {
  const [infos,setInfo] = useState("");





return (
    <Provider className="App"  store={store}>
      <div className="App">
      <Header/>
      <Switch>
            <Route   exact={true} path="/" component={Home}/>
            <Route   exact={true} path="/shop" >
                 <Shop  />
              </Route>
            <Route   exact={true} path="/smile" component={Smile}/>
            <Route   exact={true} path="/choice" component={Choice}/>
            <Route   exact={true} path="/panier">
              <BasicTable image={infos}/>
            </Route>
            <Redirect to="/"/>
     </Switch>
     </div>
    </Provider>
  );
}

export default App;
