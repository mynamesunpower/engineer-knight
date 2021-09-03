import React, { useCallback } from 'react';
import {
  Button,
  ButtonGroup,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Login = () => {
  const classes = useStyles();

  // const callLogin = useCallback(() => {
  //   axios.get('/oauth2/authorization/google').then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ButtonGroup size='small' aria-label='small outlined button group'>
              OAuth2를 어떻게 구현할지 아직 모르겠으므로 회원가입 받는걸로 ㄱ
              (Google OAuth2만은 npm에 있긴 한데 공통으로 처리하고 싶음.)
              <Button>Google</Button>
              <Button>Naver</Button>
              <Button>Register</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
