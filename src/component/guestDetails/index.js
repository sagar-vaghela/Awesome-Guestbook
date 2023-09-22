import React from 'react';
import VisitorForm from './visitorForm';
import VisitorDetailsTable from './visitorDetails';
import { Grid } from '@mui/material';

const GuestDetails = () => {
  return (
    <Grid container p={3} spacing={3}>
      <Grid item xs={3}>
        <VisitorForm />
      </Grid>
      <Grid item xs={9}>
        <VisitorDetailsTable />
      </Grid>
    </Grid>
  );
};
export default GuestDetails;
