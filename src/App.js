import React,{useState,useEffect} from 'react';
import './App.css';
import Home from "./component/Home"
import {Switch,Route, Redirect,Link} from "react-router-dom"
import Shop from "./component/shop"
import Smile from "./component/smile"
import Choice from "./component/choice"
import {AppBar,Toolbar,Badge, Typography,Avatar,makeStyles,createMuiTheme, Button} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BasicTable from "./component/panier";
import {MuiThemeProvider,ThemeProvider} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import Investissement from './component/Investissement';




function App() {
  const [info,setInfo] = useState("");


  const useStyles = makeStyles({
    logo:{
      width:"35%",
      height:"3,5rem",
      display:"flex",
      justifyContent:"flex-start"
      
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
    },

    panier:{
      width:"10%",
      height:"3,5rem",
      display:"flex",
      justifyContent:"flex-end"
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
    <div className="App">
      <AppBar color="transparent" position="static"  style={{height:"8%"}}>
        <Toolbar>
          <div className={classes.logo}>
          <Avatar src="../niya.jpeg" style={{width:"11%"}} />
          </div>
          <div className={classes.menu}>
          <Link className={classes.lien} to ="/"><Button className={classes.bouton}>Home</Button></Link>
          <Link className={classes.lien} to ="/shop"><Button className={classes.bouton}>Shop</Button></Link>
          <Link className={classes.lien} to ="/smile"><Button className={classes.bouton}>Smile</Button></Link>
          <Link className={classes.lien} to ="/investissement"><Button className={classes.bouton}>Investissements</Button></Link>
          
          </div>
          <div className={classes.panier}>
            <ShoppingCartIcon  />
          </div>

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
            <Route    exact={true} path="/investissement" component={Investissement}/>

            <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
