import React from 'react'
import logo from './images/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import hamburg from './images/icon-hamburger.svg';

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
            marginBottom: '5px',
            marginTop: '30px',
            borderBottom: '0.3px black solid',
            margin: '0',
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
    transform: 'translate(-200px, 40px)',
    WebkitBoxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    MozBoxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    boxShadow: '10px 3px 300px 99px rgba(0,0,0,0.56)',
    borderRadius: '10px',
    width: '80vw',
    textAlign: 'left',
    
    padding: '0',

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
    }
},
lastlink:{
    border: '0'
},
 '@media(min-width:600px)':{
     '@global': {
    'div > li:nth-of-type(2)': {
        color: 'white !important',
    },
 }
}

}))


export default function NavBard() {
    const navstyle = navbarStyle()


    //dropdown functions
    const [press, setPress] = React.useState(false);

    const toggleclass =() =>{
        setPress(!press)
    }
    

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
                        <li className={navstyle.listItem}><a className={navstyle.link} href="">Ger Started</a></li>
                    </ul>
                </div>
                <a href='void:0' onClick={toggleclass}className={navstyle.navIcon}><img src={hamburg}></img></a>
            </nav>
        </div>
    )
}
