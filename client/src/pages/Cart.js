/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartShipForm from '../components/cart/CartShipForm';
import CartReview from '../components/cart/CartOrder';
import { headerStatus } from '../actions/index';
import LoginForm from './auth/LoginForm';
import PurchaseCard from '../components/cart/PurchaseCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
}));

export default function Cart({ match, history }) {
  const theCart = useSelector((state) => state.theCart);
  const { step } = theCart;

  const artworkId = match.params.workId;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('CART');

    if (artworkId) {
      dispatch(headerStatus(false));
      return function cleanup() {
        dispatch(headerStatus(true));
        // dispatch(cleanTheCart());
      };
    }
  }, []);

  let value;
  switch (step) {
    case '1':
      value = '1';
      break;
    case '2':
      value = '2';
      break;
    case '3':
      value = '3';
      break;
    default:
      value = '1';
    // code block
  }
  const classes = useStyles();

  try {
    const userLogin = useSelector((state) => state.userLogin);
    console.log('Checking authentication');
  } catch (e) {
    history.push(`/login`);
    return <LoginForm />;
  }

  return (
    <Grid
      className={classes.root}
      sx={{ marginTop: 5, marginBottom: 10 }}
      container
      direction="row"
      justifyContent="center"
      spacing={8}
    >
      <Grid
        container
        direction="column"
        spacing={8}
        item
        xs={12}
        md={4}
        sx={{ padding: 0 }}
      >
        <Grid item>
          <PurchaseCard workId={match.params.workId} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                indicatorColor="secondary"
                aria-label="lab API tabs example"
              >
                <Tab disabled label="آدرس" value="1" />
                <Tab disabled label="تایید" value="2" />
                <Tab disabled label="رسید" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <CartShipForm history={history} />
            </TabPanel>
            <TabPanel value="2">
              <CartReview />
            </TabPanel>
            <TabPanel value="3">
              <Paper sx={{ height: 150 }} square elevation={2}>
                پرداخت انجام شد
                <Link to="/">برگشت</Link>
              </Paper>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
