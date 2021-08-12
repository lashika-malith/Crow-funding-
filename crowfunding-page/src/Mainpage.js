import React from 'react'
import NavBard from './NavBard'
import './mobile.css'
import Topsection from './Topsection'

export default function Mainpage() {
    return (
        <div>
            <div className="Main-shell">
                    <header className="Shell-header">
                        <NavBard></NavBard>
                    </header>
                    <main className="shell-body">
                      <Topsection/>
                    </main>
                    {/* <main class="shell-body2">
                        <h2>hello</h2>
                    </main>

                    <main  class="shell-body3">
                        <h2>hello</h2>
                    </main> */}
            </div>
        </div>
    )
}
