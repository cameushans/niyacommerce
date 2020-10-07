import React,{useState} from 'react';
import './App.css';
import Home from "./component/Home"
import {Switch,Route, Redirect} from "react-router-dom"
import Shop from "./component/shop"
import Smile from "./component/smile"
import Choice from "./component/choice"
import {makeStyles,AppBar,Toolbar,Avatar,Button} from "@material-ui/core";
import BasicTable from "./component/panier";
import {MuiThemeProvider,ThemeProvider} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import Investissement from './component/Investissement';
import hide from "./reducers/hide.reducer";
import count from "./reducers/count.reducer";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore ,applyMiddleware,combineReducers} from "redux";
import Header from "./component/Header";




const store = createStore(combineReducers({count,hide}),applyMiddleware(logger));
  
function App() {
  const [infos,setInfo] = useState("");





return (
    <Provider className="App"  store={store}>
      <div className="App" onClick={()=>console.log("voila")}>
      <Header/>
      <Switch>
            <Route   exact={true} path="/" component={Home}/>
            <Route   exact={true} path="/shop" >
                 <Shop  />
              </Route>
            <Route    exact={true} path="/smile" component={Smile}/>
            <Route    exact={true} path="/choice" component={Choice}/>
            <Route    exact={true} path="/panier" component={BasicTable}/>
            <Route    exact={true} path="/investissement" component={Investissement}/>

            <Redirect to="/"/>
     </Switch>
     </div>
    </Provider>
  );
}



export default App;
