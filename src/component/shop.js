import React , {useEffect,useState,Fragment} from 'react';
import {Typography,Grid,makeStyles} from "@material-ui/core"
import ImgMediaCard from "./Card";
import {connect} from "react-redux";


const Shop = (props) => {
       const [hide,setHide] = useState(false)
       const [info,setInfo] = useState([]);

       const useStyles = makeStyles({
        taille:{
        marginTop:"10%"
        }
        })
    
    const classes = useStyles();

    useEffect(() => {
       const fetching = async   () => {
         fetch("http://localhost:1337/produits")
            .then((res)=>res.json())//toujours
            .then((resu)=>setInfo(resu))
       }
        fetching()
      }, [])
      


    // var aff = ["jerry","hans","rayan","caucase","double","salop"]
    console.log(info)

   var renvoi = info.map((el,i)=>{
     console.log(el.image.name)
            return <ImgMediaCard nom={el.description} images= {el.image.name} prix = {el.prix} key={i}/>
   })
      


    return (
        <div onClick={()=>{setHide(false);props.hideMenu(info)}}>
        <Typography style={{textAlign:"center", marginTop:"5%"}} variant="h2">
            Collections
        </Typography>
       <Grid   container direction="row" justify="center" alignItems="center"> 
           {renvoi}
       </Grid>
       </div>
    )
}

function mapDispatchToProps(dispatch){
       return {
       hideMenu: function(data){
            dispatch({type:"HIDE", data:data})
       }
     }
}

export default connect(null, mapDispatchToProps)(Shop);