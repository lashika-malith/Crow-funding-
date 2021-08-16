import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  secsction:{
      display: 'flex', 
      flexDirection: 'column',
    },
    Topsection:{
      display: 'flex',
      marginBottom: '50px',
      alignItems: 'center', 
      '@media (max-width: 600px)':{
              flexDirection: 'column',
              textAlign: 'center'
      }
  },
  States:{
      '& >  h2':{
           fontWeight: '700'
      },

      '& > p':{
        fontWeight: '400',
        color: 'darkgray'
      },
      
      '&:nth-of-type(1)':{
        marginRight: '40px',
        
        '@media (max-width: 600px)':{
          margin: '0'
        }
        },

      '&:nth-of-type(2)':{
            paddingRight: '50px',
            paddingLeft: '50px',
      },

        '&:nth-of-type(3)':{
           '@media (max-width: 600px)':{
          margin: '0'
        },
        
        marginLeft: '40px',
      }

  },

  bar:{
    height: '15px',
    borderRadius: '50px',
    marginBottom: '40px',
    marginTop: '-10px',
    backgroundColor: '  hsl(0, 0%, 98%) !important'
  },


  divders:{
    height: '65px !important',
    width: '2px',  
    margin: '0',
    marginTop: '-15px',
    '@media (max-width: 600px)':{
        height: '2px !important',
          width: '120px',  
          marginTop:'15px',
          marginBottom: '15px'
        }
}
});





export default function Secsecion() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);




    return (
        <div className={classes.secsction}>
            <div className={classes.Topsection}>

                <span className={classes.States}>
                    <h2>$89,914</h2>
                    <p>of $100,000 backed</p>
                </span>

                <hr className={classes.divders}></hr>

                <span className={classes.States}>
                    <h2>5,007</h2>
                    <p>total backed</p>
                </span>

                <hr className={classes.divders}></hr>
               
                <span className={classes.States}>
                    <h2>56</h2>
                    <p>days left</p>
                </span>  

            </div>

            <div>
            <LinearProgress className={classes.bar} variant="determinate" value={progress}/>
            </div>
        </div>
    )
}
