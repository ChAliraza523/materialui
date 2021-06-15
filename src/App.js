import react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import NavBar from './NavBar.js';





const useStyles = makeStyles((theme) => ({
  root: {


    margin:'auto'
   
    
  },
  paper: {
    height: 50,
    width: 500,
    margin: '0 auto',
    textAlign: 'center',
    


  },
  input: {
    width: '95',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <NavBar /><br/>
      
     


      <Paper elevation={3} className={classes.paper} >
        login <br/><br/>
        <form className={classes.root} noValidate autoComplete="off"><br/><br/>
          <TextField label="Enter Email" className={classes.paper} />


          <TextField label="Enter Password"className={classes.paper} /><br/>
          <br/>
          <Button variant="contained" color="primary" className={classes.paper}>
            LOGIN
          </Button>

        </form>

      </Paper>
    </div>
  );
}

export default App;
