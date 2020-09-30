import React,{useState,useEffect} from 'react';
import './App.css';
import Home from "./component/Home"
import {Switch,Route, Redirect} from "react-router-dom"
import Shop from "./component/shop"
import Smile from "./component/smile"
import Choice from "./component/choice"
import {AppBar,Toolbar,Badge, Typography,Avatar,makeStyles,createMuiTheme} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BasicTable from "./component/panier";
import {MuiThemeProvider,ThemeProvider} from "@material-ui/core"



function App() {
  const [info,setInfo] = useState("");


  const useStyles = makeStyles({
    logo:{
      width:"5%",
      height:"60%"
    }
  })
 const  classes = useStyles()

 const theme = createMuiTheme({
   palette:{
     secondary:{
       main:"#607d8b"
     }
   }
 })


 useEffect(() => {
  const fetching = async   () => {
    fetch("http://localhost:1337/paniers")
       .then((res)=>res.json())//toujours
       .then((resu)=>setInfo(resu[0].type[0].name))
   }
   fetching()
 }, [])

 console.log(info)

return (
    <ThemeProvider>
    <div className="App">
      <AppBar color="transparent" position="static"  style={{height:"8%"}}>
        <Toolbar>
          <Avatar src="../E62BDD9D-8A4D-4619-9D0E-3B6CEBA89605.jpeg" className={classes.logo} onClick={()=><Redirect to="/"/>}/>
          </Toolbar>
       </AppBar>
      <Switch>
            <Route    exact={true} path="/" component={Home}/>
            <Route    exact={true} path="/shop" >
               <Shop image= {info} />
              </Route>
            <Route    exact={true} path="/smile" component={Smile}/>
            <Route    exact={true} path="/choice" component={Choice}/>
            <Route    exact={true} path="/panier" component={BasicTable}/>
            <Redirect to="/"/>
     </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
