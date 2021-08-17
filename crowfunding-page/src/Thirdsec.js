import { makeStyles, Button } from '@material-ui/core'
import React from 'react'


 const useStyle = makeStyles({
    para:{
        '& > h4':{
            fontWeight: '700',
            fontSize: '1.3em',
            marginBottom: '30px'
        },
        '& > p':{
            fontSize: '0.9em',
                lineHeight: '22px',
                        color: 'darkgray',
                                    fontWeight: '500',
        },

    },

    selectBox:{
     border: '1px solid darkgray',
     borderRadius: '5px',
     marginBottom: "30px",
     padding: '40px ',
             '@media(max-width:900px)':{ 
                padding: '30px  !important',
            }
    },

    Topheader:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        '& > h6':{
            fontWeight: '700',
            fontSize: '1.4em'

        },

        '& > p':{
            color:'hsl(176, 50%, 47%)',
            fontWeight: '700',
            fontSize: '0.9em'
        },

        '@media(max-width:900px)':{ 
            flexFlow: 'column'
        }  
    },

    para:{
        fontSize: '0.85em',
        lineHeight: '30px'
    },


    botSection:{
                display: 'flex',
        justifyContent: 'space-between',

        '& > p > span':{
            fontWeight: '800',
            fontSize: '2em',
            verticalAlign: 'middle'
        },
           '@media(max-width:900px)':{ 
            flexFlow: 'column'
        }  
        
    },
    btn:{
         backgroundColor: 'hsl(176, 50%, 47%)',
        color: 'white',
        fontWeight: '400',
        fontFamily:'Commissioner',
        borderRadius: '50px',
        padding: '5px 30px',
        textTransform: 'none',
        height: '50px',
        float: 'left',
        '&:hover':{
            backgroundColor: 'hsl(176, 72%, 28%)',
        }
    },

    disable:{
        pointerEvents: 'none'
    }

 })




export default function Thirdsec() {
    const style = useStyle()


    return (
        <div>
            <div className={style.para}>

                <h4 style={{fontSize: '1.6em'}}>  About this project</h4>
                <p>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>

                <p>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>

            </div>


            <div>
                <div>
                    <Models 
                        Tittle="Bamboo Stand"
                        Identiy="Pledge $25 or more"    
                        para=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                                you’ll be added to a special Backer member list."
                        count="101"  
                        BtnTittle="Select Reward"      
                    />
                </div>

                <div>
                    <Models 
                        Tittle="Black Edition Stand"
                        Identiy="Pledge $75 or more"
                        para="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                        count = "64"
                        BtnTittle= "Select Reward"
                    />
                </div>

                <div>
                    <Models 
                        Tittle= "Mahogany Special Edition"
                        Identiy = "Pledge $200 or more"
                        para ="  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        count = "0"
                        BtnTittle="Out of Stock"
                        Type ="True"
                        styles={{opacity: '0.5'}}
                    />
                </div>
            </div>
        </div>

    )
}

 function Models(props) {
     const style = useStyle()

    
    return   (
        <div style={props.styles} className={style.selectBox}>
            <div className={style.Topheader}>
                <h6>{props.Tittle}</h6>
                <p>{props.Identiy}</p>
            </div>

            <div className={style.para}>
                <p>{props.para}</p>
            </div>

            <div className={style.botSection}>

                <p><span>{props.count}</span>       left</p>           
                <Button className={style.btn}  variant="contained" disabled={props.Type}> 
                    {props.BtnTittle}
                </Button> 

            </div>
        </div>
    )
}
