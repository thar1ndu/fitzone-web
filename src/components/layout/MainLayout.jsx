import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'

function MainLayout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header with fixed Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow pt-16 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {children}
            </main>

            {/* Footer */}
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default MainLayout