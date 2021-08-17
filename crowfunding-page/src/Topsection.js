import React from 'react'
import Logotop from './images/logo-mastercraft.svg'
import { Button, makeStyles} from '@material-ui/core';
import bookmark from './images/icon-bookmark.svg'
import { BsFillBookmarkFill } from "react-icons/bs";


const useStyle = makeStyles({
    tpbtn:{
        backgroundColor: 'hsl(176, 50%, 47%)',
        color: 'white',
        fontWeight: '400',
        fontFamily:'Commissioner',
        borderRadius: '50px',
        padding: '10px 20px',
        textTransform: 'none',
        float: 'left',
        '&:hover':{
            backgroundColor: 'hsl(176, 72%, 28%)',
        }
    },
    bookmark:{
        paddingLeft: '10px',
        fontFamily:'Commissioner',
        color: 'black',
        fontWeight: '700',

    },
    btnset:{
        display: 'flex',
        WebkitJustifyContent: 'space-between',
        marginTop: '5   0px'
    },

    togglebookmark:{
        color: 'hsl(176, 50%, 47%) !important',
    },

    bkbtn:{
      '@media(max-width:900px)':{
            display: 'none !important',
        }   
    }
    
})


export default function Topsection() {
    const style = useStyle()

    const [selected, setSelected] = React.useState(false);
    
    const [press, setPress] = React.useState(false);

    const [r, setR] = React.useState(document.querySelector(':root'))

    
    function  toggleBookmark(params) {
        setPress(!press)
        if(press === false) {
                r.style.setProperty(  '--main-bkmarkbgcolor',  'hsl(176, 50%, 47%)')
                r.style.setProperty('--main-fill', 'white')
        }
        if (press === true) {
            r.style.setProperty(  '--main-bkmarkbgcolor',  '#2F2F2F')
            r.style.setProperty('--main-fill', ' #B1B1B1')

        }
        
    }
    

    
    const tittle = !press ? "bookmark":"bookmarked"


    console.log(tittle)


    return (
        <div class="topsection">
            <img src={Logotop}></img>
            <h1>Mastercraft Bamboo Monitor Riser</h1>

            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div class={style.btnset}>
              
                <Button className={style.tpbtn} variant="contained">Back this project</Button>
                <div>
                <Button 
                onClick={toggleBookmark} 
                id="bookmark" 
                className={`${style.bkbtn} ${style.tpbtn} ${style.bkmark}`}
                startIcon={<BsFillBookmarkFill/>}
                variant="contained"
                >
                <span className={`${style.bookmark} ${press ? style.togglebookmark:null}`}>{tittle}</span>
                </Button>
                <div  class='mobilebkmark'>
                <BsFillBookmarkFill onClick={toggleBookmark} cursor='pointer' size={20} class="iconbk" />
                </div>
                </div>
            </div>
        </div>
    )
}
