import React,{useState,useEffect} from 'react';
import './App.css';
import Home from "./component/home/Home";
import {Switch,Route} from "react-router-dom";
import Shop from "./component/shop/shop";
import Smile from "./component/smile/smile";
import Choice from "./component/choice/choice";
import BasicTable from "./component/panier/panier";
import Investissement from './component/Investissement';
import count from "./reducers/count.reducer";
import logger from "redux-logger";
import { createStore ,applyMiddleware,combineReducers} from "redux";
import Header from "./component/header/Header";
import Burger from './component/burgerHeader/BurgerHeader';
import {composeWithDevTools} from "redux-devtools-extension";
import cartData from "./reducers/panier.reducer"
import { persistStore, persistReducer } from 'redux-persist';/* Cache our store */ 
import storage from "redux-persist/lib/storage";
import CardPay from "./component/cardPay/CardPay";
import Footer from './component/footer/footer';
import {Grid} from "@material-ui/core"




const persistConfig = {
  key:"root",
  storage,
  whitelist: ["count","cartData"]
};

const rootReducers = combineReducers({count,cartData});
export const store = createStore(persistReducer(persistConfig,rootReducers),composeWithDevTools(applyMiddleware(logger)));
export const persistor = persistStore(store);


function App() {
  const  [width,setWidth] = useState(window.innerWidth); 
  
  useEffect(()=> window.addEventListener('resize',() => setWidth(window.innerWidth)),[]);

return (
      <div className="App" >
        {width<1200?<Burger/>:<Header/>}
      <Switch>
            <Route   exact={true} path="/" component={Home}/>
            <Route   exact={true} path="/shop" >
                 <Shop  />
              </Route>
            <Route    exact={true} path="/smile" component={Smile}/>
            <Route    exact={true} path="/choice" component={Choice}/>
            <Route    exact={true} path="/panier" component={BasicTable}/>
            <Route    exact={true} path="/investissement" component={Investissement}/>
            <Route    exact={true} path="/payment" component={CardPay}/>
     </Switch>

     </div>
  )
};

export default App;