import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { companyConfig } from '../config/company';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="hidden md:block bg-primary text-gray-400 text-xs border-b border-white/5">
                <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                    <span>Government-Registered Infrastructure Contractors Since 2012</span>
                    <div className="flex items-center gap-6">
                        <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-secondary transition-colors">
                            <Phone size={12} className="mr-1.5" /> {companyConfig.phone}
                        </a>
                        <span>{companyConfig.email}</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl shadow-black/20 py-2' : 'bg-primary py-3'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center group">
                            <img
                                src="/images/Sadik_Logo.png"
                                alt="Sadik Infra Logo"
                                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300 mr-3"
                            />
                            <div>
                                <span className="text-xl font-heading font-bold text-white tracking-wider block leading-tight">
                                    SADIK INFRA
                                </span>
                                <span className="text-[10px] text-secondary/80 font-semibold tracking-[0.25em] uppercase block">
                                    Infrastructure & Civil Eng.
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    end={link.path === '/'}
                                    className={({ isActive }) =>
                                        `px-4 py-2 text-sm font-medium transition-all duration-300 relative ${isActive
                                            ? 'text-secondary'
                                            : 'text-gray-300 hover:text-white'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary"></span>}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                className="ml-4 bg-secondary text-primary px-6 py-2.5 font-bold text-sm hover:bg-white transition-colors tracking-wide uppercase"
                            >
                                Get a Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white hover:text-secondary focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-accent border-t border-white/5 px-4 py-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                end={link.path === '/'}
                                className={({ isActive }) =>
                                    `block py-3 px-4 text-sm font-medium border-b border-white/5 last:border-0 ${isActive ? 'text-secondary bg-primary/50' : 'text-gray-300 hover:text-secondary'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="mt-4 block w-full text-center bg-secondary text-primary py-3 font-bold text-sm uppercase tracking-wider"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
