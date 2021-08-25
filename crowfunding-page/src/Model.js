import { Button, Container, Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import { BsPip } from 'react-icons/bs';
import { GrClose } from "react-icons/gr";
import { InputLabel, InputAdornment, FormControl, OutlinedInput } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { FLOWBASEANNOTATION_TYPES } from '@babel/types';
import { printInsertLine } from 'jest-diff/build/printDiffs';
import { getByDisplayValue } from '@testing-library/react';


const useStyle = makeStyles({

    modulebox: {
        backgroundColor: 'white',
        display: 'none',
        zIndex: '4',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -25%)',
        padding: '40px 50px',
        borderRadius: '10px',
        width: '45%',
                     '@media(max-width:900px)':{ 
                        padding: '30px',
                        transform: 'translate(-50%, -3%)',
                        width: '90%',
                     }

    },
    moduleclose:{
        display: 'none',

    },
    openmodule:{
        display: 'block'
    },

    Brief: {
        display: 'flex',
        flexDirection: 'column',
    },

    Header: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > h3': {
            fontWeight: '800',
            marginBottom: '20px',
            '@media(max-width:900px)':{ 
           
            }
        },

    },

    Toppara: {
        marginBottom: '20px',
        '& > p': {
            color: 'darkgray',
            fontSize: '1em'

        }
    },

    selectBox: {
        border: '1px solid darkgray',
        borderRadius: '5px',
        marginBottom: "30px",
        padding: '40px ',
        '@media(max-width:900px)': {
            padding: '30px  !important',
        }
    },

    Topheader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',


        '& > p > span': {
            fontWeight: '800',
            fontSize: '2em',
            verticalAlign: 'middle'
        },

        '@media(max-width:900px)': {
            flexFlow: 'column'
        }
    },

    para: {
        fontSize: '0.85em',
        lineHeight: '30px'
    },


    botSection: {
        display: 'none',
        flexDirection: 'column',
        '& > div:nth-of-type(2)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            '& > div': {
                gap: '15px',
                display: 'inherit',

                '& > input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'

                }
            }
        }

    },
    botSecShow: {
        display: 'flex'
    },

    Input: {

        borderRadius: '50px ',
        border: '1px solid darkgray ',
        padding: '10px 20px',
        width: '100px',
        height: '50px',
        margin: '0',
        verticalAlign: 'middle',
        outline: 'none',
        fontWeight: '700',
        fontFamily: 'Commissioner',
        '& > fieldset': {
            display: 'none'
        }
    },

    btn: {
        backgroundColor: 'hsl(176, 50%, 47%)',
        color: 'white',
        fontWeight: '400',
        fontFamily: 'Commissioner',
        borderRadius: '50px',
        padding: '5px 30px',
        textTransform: 'none',
        height: '50px',
        '&:hover': {
            backgroundColor: 'hsl(176, 72%, 28%)',
        },
        alignSelf: 'flex-end'
    },

    close: {
        '& > path': {
            strokeWidth: '5px'
        }
    },

    TittleSection: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',
        '@media(max-width:900px)': {
            
        },
        '& > div>  p': {
            color: 'hsl(176, 50%, 47%)',
            fontWeight: '700',
            fontSize: '0.9em'
        },
        '& > div > label': {
            fontWeight: '700',
            fontSize: '1.1em',
        },


    },


})
export default function Model(props) {
    const classes = useStyle()
    const jj = 10

    
    
    
    const [boxclose, setboxClose] = React.useState(false)
    function closeModule(params) {
        setboxClose(!boxclose)
    }  
    const pip = props.openModule
    let toggle = false
    const getData2 = props.openSections

    if (pip === true || getData2 === 1 || getData2 === 2) {
        toggle = true
    
    }else if(boxclose === true){
        toggle = boxclose
    }
    
     
    let [pressone, setstateOne] = React.useState      (false)
    let [presstwo, setstateTwo] = React.useState      (false)
    let [pressthree, setstateThree] = React.useState  (false)
    let [pressfour, setstateFour] = React.useState    (false)
    


    function ToggleBox(para) {
        const exportdata = (para)
        if (exportdata ===  '1') {
            setstateOne(true)
            setstateTwo(false)
            setstateThree(false)
            setstateFour(false)
        } else
            if (exportdata === "2") {
                setstateOne(false)
                setstateTwo(true)
                setstateThree(false)
                setstateFour(false)
            } else
                if (exportdata === "3") {
                    setstateOne(false)
                    setstateTwo(false)
                    setstateThree(true)
                    setstateFour(false)
                } else
                    if (exportdata === "4") {
                        setstateOne(false)
                        setstateTwo(false)
                        setstateThree(false)
                        setstateFour(true)
                    }
        
        
    }ToggleBox()
    
    
    return (
        <div className={`${classes.modulebox} ${toggle ? classes.openmodule:classes.moduleclose}`}>
            <div className={classes.Brief}>
                <div className={classes.Header}>
                    <h3>Back this project</h3>
                    <a href="" onClick={closeModule}><GrClose  className={classes.close} /></a>
                </div>
                <div className={classes.Toppara}>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
            </div>  

            <div>
                <div>
                    <Sections
                        Tittle="pledge with no reward"
                        Identiy=""
                        para="Choose to support us withput if you simply belive in our project As a backer,you will be signed up to receive product update via email "
                        number={1}
                        callBack={ToggleBox}
                        checked={pressone}
                        selector={getData2}
                        No = {getData2}
                    />
                </div>
                <div>
                    <Sections
                        Tittle="Bamboo Stand"
                        Identiy="Pledge $25 or more"
                        para=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                                you’ll be added to a special Backer member list."
                        count="101"
                        left="left"
                        number={2}
                        callBack={ToggleBox}
                        checked={presstwo}
                        showbot={presstwo ? classes.botSecShow : null}          
                    />
                </div>

                <div>
                    <Sections
                        Tittle="Black Edition Stand"
                        Identiy="Pledge $75 or more"
                        para="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                        count="64"
                        left="left"
                        number={3}
                        callBack={ToggleBox}
                        checked={pressthree}
                        showbot={pressthree ? classes.botSecShow : null}
                    />
                </div>

                <div>
                    <Sections
                        Tittle="Mahogany Special Edition"
                        Identiy="Pledge $200 or more"
                        para="  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        count="0"
                        Type="True"
                        styles={{ opacity: '0.5' }}
                        left="left"
                        number={4}
                        callBack={ToggleBox}
                        checked={pressfour}
                        showbot={pressfour ? classes.botSecShow : null}
                    />
                </div>
            </div>
        </div>
    )
}
function Sections(props, data, press) {
    const style = useStyle()

    
    const no = props.No
    
    function handleClick(params) {
       const  select = (params.target.value)
        props.callBack(select)
    }
    
    return (
        <div style={props.styles} className={style.selectBox}>
            <div className={style.Topheader}>
                <div className={style.TittleSection}>
                    <input onClick={handleClick} checked={props.checked} id='awaw' className='Radiobtn' value={props.number} name="Select" type='checkbox' disabled={props.Type}></input>
                    <div>
                    <label>{props.Tittle}</label>
                    <p>{props.Identiy}</p>
                    </div>
                </div>
                <p><span>{props.count}</span>       {props.left}</p>
            </div>

            <div className={style.para}>
                <p>{props.para}</p>
            </div>

            <div className={`${style.botSection}  ${props.showbot}`}>
                <div>
                    <hr style={{ width: '100%' }}></hr>
                </div>
                <div>
                    <p>Enter your pledge</p>
                    <div>
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                className={style.Input}
                                labelWidth={0}
                                maxRows='4'

                            />
                        </FormControl>

                        <Button className={style.btn} varint="contained" disabled={props.Type}>
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}