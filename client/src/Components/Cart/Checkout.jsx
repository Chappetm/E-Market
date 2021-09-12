import React from 'react';
import useStyles from './styles1';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { useState } from "react";
import Confirmation from "./Confirmation"

 const Checkout = () => {
    // Inicializamos hook
    const classes = useStyles();
    const steps = ['Shipping address', 'Payment details', 'Confirmation'];
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => setActiveStep((prevActivestep)=> prevActivestep + 1);
    const backStep = () => setActiveStep((prevActivestep)=> prevActivestep - 1);

    const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm nextStep={nextStep} backStep={backStep}/>

    return (
        <>
          <main className={classes.layout}>
              <Paper className={classes.paper}>
              <Typography component='h1' variant='h4' aling='center'>
                Checkout E-market
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* {
            activeStep === 2 ? (<Confirmation/>) : (<Form />)
          } */}
            <Form/>
              </Paper>
              
          </main>  
        </>
    )
}
export default Checkout