import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core"


const Smile = () => {


    return (
        <Fragment>
           <Grid container >
               <Grid container justify="center" item lg={12}>
                   <h2>Jerry</h2>
               </Grid>
               <Grid item lg={3} container  justify="center">
                   <h2>Jerry</h2>
               </Grid>
               <Grid item lg={3}container  justify="center">
                   <h2>Jerry</h2>
               </Grid>
           </Grid>
        </Fragment>
    )
}

export default Smile;