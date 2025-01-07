import React from 'react'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'

function MainLayout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* fixed Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default MainLayout