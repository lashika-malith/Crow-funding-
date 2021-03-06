import React from 'react'
import logo from './images/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import {TiThMenu} from 'react-icons/ti';
import { GrClose } from "react-icons/gr";
import {RiCloseLine} from 'react-icons/ri'
import { useEffect } from 'react';

const navbarStyle =makeStyles((theme)=>({
Main:{
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between'
},

listItem:{
    float: 'left',
    marginRight: '3vw',
     '@media(max-width:600px)':{
            marginTop: '15px',
            borderBottom: '0.3px black solid',
            margin: '0',
            paddingBottom: '15px'
        }  
  
},

list:{
    listStyle: 'none',
     '@media(max-width:600px)':{
            display: 'none',
        }    
},

navIcon:{   
    '@media(min-width:600px)':{
    display: 'none',
    }
},

dropdown:{
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    right: '10%',
    top: '17%',
    WebkitBoxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    MozBoxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    boxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    borderRadius: '10px',
    width: '80vw',
    textAlign: 'left',
    padding: '0',
    zIndex: '2'

},

link:{
    
    textDecoration: 'none',
    '@media(max-width:600px)':{
        color: 'black',
        fontSize: '5vw',
        paddingLeft: '20px'
    },
    '@media(min-width:600px)':{
        color: 'white',
    },
    
},

navsvg:{
    '& > path':{
        stroke: 'white',
        fill: 'white',
    },
    transitionDuration : '2s'
},
crossmark:{
    '& > path':{
        strokeWidth: '5px'
    }
}


}))


export default function NavBard() {
    const navstyle = navbarStyle()
    
    //dropdown functions
        //drop down Icon change.
        const img = {
            humburg:  <TiThMenu  className={navstyle.navsvg}/>,
           crossmark: <GrClose className={`${navstyle.navsvg} ${navstyle.crossmark}`}/>
        }

  

    const [press, setPress] = React.useState(false);
    const [state, setState] = React.useState({
        open: true,
    }
    );
    const toggleclass =(e) =>{
        setPress(!press);
        setState(state =>({open: !state.open}))
      
    }


 
    const getImageName = () => ( state.open ? 'humburg' : 'crossmark')
    const imageName = getImageName();
        
    return(
        <div>
            <nav className={navstyle.Main}>
                <div>
                    <a  href="#">
                    <img src={logo} alt="" />
                    </a>
                </div>
                <div>
                    <ul className={`${navstyle.list} ${press ? navstyle.dropdown:null}`}>
                        <li className={navstyle.listItem}><a className={navstyle.link} href="">About</a></li>
                        <li className={navstyle.listItem}><a className={navstyle.link} href="">Discover</a></li>
                        <li id="lastNav" className={navstyle.listItem}><a className={navstyle.link} href="">Ger Started</a></li>
                    </ul>
                </div>
           
                <a href='void:0' onClick={toggleclass} className={navstyle.navIcon}>{img[imageName]}</a>
            </nav>
        </div>
    )
}
