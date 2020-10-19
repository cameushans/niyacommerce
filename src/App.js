import React,{useState,useEffect} from 'react';
import './App.css';
import Home from "./component/Home";
import {Switch,Route} from "react-router-dom";
import Shop from "./component/shop";
import Smile from "./component/smile";
import Choice from "./component/choice";
import BasicTable from "./component/panier";
import Investissement from './component/Investissement';
import count from "./reducers/count.reducer";
import logger from "redux-logger";
import { createStore ,applyMiddleware,combineReducers} from "redux";
import Header from "./component/Header";
import Burger from './component/BurgerHeader';
import {composeWithDevTools} from "redux-devtools-extension";
import cartData from "./reducers/panier.reducer"
import { persistStore, persistReducer } from 'redux-persist';/* Cache our store */ 
import storage from "redux-persist/lib/storage";
import CardPay from "./component/CardPay";




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