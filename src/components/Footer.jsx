import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight, ExternalLink, Globe, Palette, Code2, BarChart3 } from 'lucide-react';
import { companyConfig } from '../config/company';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Civil & Structural',
        'Water & Sewerage',
        'Irrigation & Canal',
        'Land Development',
        'Structural Repairs',
        'Govt Housing'
    ];

    return (
        <footer className="bg-dark text-white border-t border-white/5">
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-5">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center font-heading font-black text-primary text-lg mr-3">S</div>
                            <div>
                                <h3 className="text-lg font-heading font-bold text-white tracking-wider">SADIK INFRA</h3>
                                <p className="text-[10px] text-secondary/70 tracking-[0.2em] uppercase">Since 2012</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                            Government-registered civil contracting firm delivering infrastructure projects across AP & Telangana.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="Facebook"><Facebook size={16} /></a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="Instagram"><Instagram size={16} /></a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="LinkedIn"><Linkedin size={16} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-secondary/80 uppercase tracking-[0.15em] md:tracking-[0.2em]">Navigation</h4>
                        <ul className="space-y-2 md:space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center group">
                                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="hidden md:block">
                        <h4 className="text-sm font-bold mb-6 text-secondary/80 uppercase tracking-[0.2em]">Expertise</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-gray-400 text-sm flex items-start">
                                    <span className="w-1 h-1 bg-secondary mt-2 mr-3 flex-shrink-0"></span>{service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-secondary/80 uppercase tracking-[0.15em] md:tracking-[0.2em]">Reach Us</h4>
                        <ul className="space-y-3 md:space-y-5">
                            <li className="flex items-start">
                                <Phone className="text-secondary mt-0.5 mr-2 md:mr-3 flex-shrink-0" size={14} />
                                <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">{companyConfig.phone}</a>
                            </li>
                            <li className="flex items-start">
                                <Mail className="text-secondary mt-0.5 mr-2 md:mr-3 flex-shrink-0" size={14} />
                                <a href={`mailto:${companyConfig.email}`} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm break-all">{companyConfig.email}</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="text-secondary mt-0.5 mr-2 md:mr-3 flex-shrink-0" size={14} />
                                <span className="text-gray-400 text-xs md:text-sm">{companyConfig.address}</span>
                            </li>
                            <li className="flex items-start">
                                <Clock className="text-secondary mt-0.5 mr-2 md:mr-3 flex-shrink-0" size={14} />
                                <span className="text-gray-400 text-xs md:text-sm">24/7 Project Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* Copyright */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 py-4 text-center">
                    <p className="text-gray-700 text-[10px] tracking-wide">
                        &copy; 2026 CrawlUP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
