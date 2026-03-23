import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PoweredBy from '../components/PoweredBy';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import BottomNav from '../components/BottomNav';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-800">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <PoweredBy />
            <WhatsAppButton />
            <BottomNav />
        </div>
    );
};

export default MainLayout;
