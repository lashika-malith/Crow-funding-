import React from 'react'
import Logotop from './images/logo-mastercraft.svg'
import { Button, makeStyles} from '@material-ui/core';
import bookmark from './images/icon-bookmark.svg'
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
            backgroundColor: ' hsl(176, 72%, 28%)',
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

    bkmark:{
 
    }
    
})


export default function Topsection() {
    const style = useStyle()

    const [selected, setSelected] = React.useState(false);
    
    const [press, setPress] = React.useState(false);

    const toggleBookmark =(e) =>{
        setPress(!press);
    }
    
    const mark = "Bookmark"
    return (
        <div class="topsection">
            <img src={Logotop}></img>
            <h1>Mastercraft Bamboo Monitor Riser</h1>

            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div class={style.btnset}>
                <Button className={style.tpbtn} variant="contained">Back this project</Button>
                <Button onClick={toggleBookmark} id="bookmark" className={`${style.tpbtn} ${style.bkmark} `} variant="contained"><span className={`${style.bookmark} ${press ? style.togglebookmark:null}`}>{mark}</span></Button>

            </div>
        </div>
    )
}
