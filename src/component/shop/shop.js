import React , {useEffect,useState} from 'react';
import {Typography,Grid} from "@material-ui/core";
import ImgMediaCard from "../card/Card";
import {connect} from "react-redux";
import useStyles from "./shop.style"


const Shop = (props) => {
       const [info,setInfo] = useState([]);


      const classes = useStyles();

     useEffect(() => {
       const fetching = async () => {
         fetch("http://localhost:1337/produits")
              .then((res)=>res.json())
              .then((resu)=>setInfo(resu))
       }
        fetching()
      }, []);


     const  data = info.map((el,i)=><ImgMediaCard  nom={el.description} images={el.image.url} prix = {el.prix} key={i}/>);

    return (
        <div style={{height:"100%"}}>
              <Typography style={{textAlign:"center", marginTop:"5%"}} variant="h2">
                   Collections
             </Typography>
             <Grid   container direction="row" justify="center" alignItems="center"> 
                   {data}
             </Grid>
       </div>
    )
};



export default connect(null, null)(Shop);