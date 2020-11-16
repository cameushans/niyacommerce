import React from 'react';
import {Grid,Typography,Button,TextField} from "@material-ui/core";
import {CardElement} from '@stripe/react-stripe-js';
import useStyles from "./cardPay.style";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




/* const CardPay = ( props ) =>{ 
        const classes = useStyles();   


        return ( */
            {/* <div>
                <Typography variant="h3" className={classes.typo}>Finalise ta commande</Typography>


            <Grid   container  justify="center" alignItems="center" >
                <Grid container item direction="column" lg={3}  alignItems="center" justify="center">
                <form  style={{width:"100%"}}>
                <TextField id="outlined-search" label="Nom"  type="text"   variant="outlined" className={classes.card}/>
                <TextField id="outlined-search" label="Prenom" type="text"  variant="outlined"  className={classes.card}/>
                <TextField id="outlined-search" label="Telephone" type="number"   variant="outlined"   className={classes.card}/>
                <TextField variant="outlined" label="Email" type="email"  className={classes.card} />
                    <CardElement 
                    options={{
                        style: {
                        base: {
                            fontSize: '16px',
                            color: 'blue',
                            '::placeholder': {
                            color: 'blue',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                        },
                    }}

                    />
                    <Button color="primary" variant ="contained" className={classes.button}>Payer</Button>

                    </form>
        </Grid>
        </Grid>
        </div> */}


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
/*         )
}
 */

