import React,{Fragment,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography,Button, ButtonGroup} from "@material-ui/core";
import { Grid ,Box} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {connect} from "react-redux"


 function BasicTable(props) {
   const [parallax,setParallax] = useState(window.pageYOffset);

  useEffect(()=>{
       window.addEventListener("scroll",function(){
         setParallax(window.pageYOffset)
        console.log(parallax)
   })
  },[parallax])



  const useStyles = makeStyles({
    centre:{
        textAlign:"center",
        marginTop:"3%",
        marginBottom:"5%"
    },
    dessouspanier:{
      height:"5%",
    },
    contient:{
      backgroundImage:"url(../../panier.jpg)",
      height:"74vh",
      transform:`translateY( ${parallax  * 0.12}px)`,
      position:"static"
    },
    absolute:{
      position :"absolute",
      marginTop:"-60px",
      width:"100%"
    }
  });

  const classes = useStyles();

const datas = props.data.map((el,i)=>{
  return   (
<TableRow >
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="left">{el.images}</TableCell>
                <TableCell align="center">
                  <ButtonGroup>
                    <Button color="primary" variant="contained" size="small">-</Button>
                    <Button disabled>5</Button>
                    <Button color="primary" variant="contained" size="small">+</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="right">05/10/2020</TableCell>
                <TableCell align="right"><Typography >{el.prix}</Typography></TableCell>
                <TableCell align="right"><HighlightOffIcon /></TableCell>
</TableRow>)
}) ;

  return (
  <Fragment >

    <Grid container className={classes.contient} justify="center" alignItems="center">
              <Typography item  variant="h3"  style={{color:"white",fontWeight:"bolder"}}>
                   Shopping page  
              </Typography>
   </Grid>

    <Box className={classes.absolute}>
              <Grid container direction="column"  alignItems="center">
                   <Grid container lg={10} sm={10} item   >
                          <TableContainer component={Paper} style={{boxShadow:"1px 1px 8px 1px"}}>
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow> 

                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="left"><Typography variant="p">PRODUITS</Typography></TableCell>
                                    <TableCell align="center"><Typography variant="p">QUANTITÉ</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="p">DATE</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="p">PRIX</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="p">RETIRER</Typography></TableCell>

                                 </TableRow>
                             </TableHead>

                            <TableBody>
                                       {datas}

                                <TableRow >
                                  <TableCell component="th" scope="row">
                                  </TableCell>
                                  <TableCell align="right"></TableCell>
                                  <TableCell align="left"></TableCell>
                                  <TableCell align="right"></TableCell>
                                </TableRow>
                             </TableBody>
                     </Table>
                </TableContainer>
                  <Grid container justify="center" lg={10}>

                    <Typography item variant="h5">Total: 650€</Typography>
                   <Button item variant="contained" className={classes.valider} color="primary">Valider</Button>
                 </Grid>
              </Grid>
          </Grid>
          </Box>

    </Fragment>
  )
};

function mapStateToProps(state){
  return {
    data:state.cartData
  }
}

export default connect(mapStateToProps,null)(BasicTable)