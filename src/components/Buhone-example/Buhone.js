import React from 'react'
import Header from './Header'
import OurServices from './OurServices'
import AboutUs from './AboutUs'
import OurClients from './OurClients'
import Reviews from './Reviews'
import Footer from './Footer'
import '../../style/BuhoneStyle/style.scss'


export default function BuhoneMain() {
    return (
        <>
            <Header />
            <OurServices />
            <AboutUs />
            <OurClients />
            <Reviews />
            <Footer />
        </>
    )
}
