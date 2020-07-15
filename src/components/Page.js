import React from 'react'
import Header from './Header'
import Skills from './Skills'
import Main from './Main'
import Footer from './Footer'
import '../style/page.scss'

export default function Page() {
    return (
        <div id="app" className="app">
            <Header />
            <Skills />
            <Main />
            <Footer />
        </div>
    )
}
