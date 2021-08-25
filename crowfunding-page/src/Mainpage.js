import React from 'react'
import NavBard from './NavBard'
import './mobile.css'
import Topsection from './Topsection'
import Secsecion from './Secsecion'
import Thirdsec from './Thirdsec'
import Model from './Model'
import { makeStyles } from '@material-ui/core'

export default function Mainpage(para) {


    const [Click, setClick] = React.useState('')
    function dataim(para, e) {
        const exvalue = (para)
        setClick(exvalue)

    }
    const [Btn_no, setBtn_no] = React.useState(0)
    function clickOne(para) {
        const clickone = (para)

        if (clickone === true) {
            setBtn_no(1)
        }
    }   
    function clickTwo(para) {
        const clicktwo = (para)
        if (clicktwo === true) {
            setBtn_no(2)
        }
        
    } 

    
    return (
        <div>
            <div className="Main-shell">
                    <header className="Shell-header">
                        <NavBard></NavBard>
                    </header>
                    <main className="shell-body">
                      <Topsection
                          callBack={dataim}
                      />
                    </main>

                    <main class="shell-body2">
                        <Secsecion/>
                    </main>

                    <main  class="shell-body3">
                        <Thirdsec
                            callBackone={clickOne}
                            callBacktwo={clickTwo}
                        />
                    </main>
            </div>
            <div>
                <Model
                    openModule={Click}
                    openSections={Btn_no}
                />
            </div>
        </div>  
    )
}
