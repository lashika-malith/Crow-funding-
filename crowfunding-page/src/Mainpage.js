import React from 'react'
import Bodycomponant from './Bodycomponant'
import NavBard from './NavBard'
import './mobile.css'
export default function Mainpage() {
    return (
        <div>
            <div className="Main-shell">
                    <header className="Shell-header">
                        <NavBard></NavBard>
                    </header>
                    <main className="shell-body">
                        <h2>Page body</h2>  
                    </main>
            </div>
        </div>
    )
}
