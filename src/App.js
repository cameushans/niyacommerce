import React,{useState} from 'react';
import './App.css';
import Home from "./component/Home"
import {Switch,Route, Redirect,Link} from "react-router-dom"
import Shop from "./component/shop"
import Smile from "./component/smile"
import Choice from "./component/choice"
import {makeStyles} from "@material-ui/core";
import BasicTable from "./component/panier";
import Header from "./component/Header";
import { createStore ,applyMiddleware,combineReducers} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";//must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions 
import count from "./reducers/count.reducer"


const store = createStore(combineReducers({count}),applyMiddleware(logger));



function App() {
  const [infos,setInfo] = useState("");


  const useStyles = makeStyles({
    logo:{
      width:"5%",
      height:"3,5rem",
      marginLeft:"8%",
      marginRight:"20%"
      
    },
    bouton:{
      textDecoration:"none",
      fontFamily:"Sansita Swashed, cursive",
      display:"flex",
      justifyContent:"space-between",
      color:"black",
    

    },
    homeI:{
      marginLeft:"5%",
      width:"5%",
      height:"40%"
    },

    lien:{
      textDecoration:"none"
    },

    menu:{
      display:"flex",
      justifyContent:"space-around",
      width:"50%"
    }
  });


return (
    <Provider store={store}>
      <Header />
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
    </Provider>
  );
}

export default App;
