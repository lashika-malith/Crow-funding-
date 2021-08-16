import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  secsction:{
      display: 'flex', 
      flexDirection: 'column'
  },
  Topsection:{
      display: 'flex',
        marginBottom: '50px'
  },
  States:{
     
      '& >  h1':{
           fontWeight: '700'
      },

      '& > p':{
          fontWeight: '400',
          color: 'darkgray'
      },

        '&:nth-of-type(1)':{
            marginRight: '40px',

        },

      '&:nth-of-type(2)':{
            paddingRight: '40px',
            paddingLeft: '40px',
            borderRight: '1px solid black',
             borderLeft: '1px solid black'
      },

        '&:nth-of-type(3)':{
           
            marginLeft: '40px',
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
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </span>

                <span className={classes.States}>
                    <h1>5,007</h1>
                    <p>total backed</p>
                </span>

                <span className={classes.States}>
                    <h1>56</h1>
                    <p>day left</p>
                </span>  

            </div>

            <div>
            <LinearProgress variant="determinate" value={10}/>
            </div>

        </div>
    )
}
