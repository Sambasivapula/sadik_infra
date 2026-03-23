import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Wrench, Users, MapPin, Phone } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Areas', path: '/projects', icon: MapPin },
    { name: 'Contact', path: '/contact', icon: Phone },
];

const BottomNav = () => {
    const location = useLocation();

    return (
        <nav className="bottom-nav-bar">
            {navItems.map((item) => {
                const isActive =
                    item.path === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(item.path);
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === '/'}
                        className={`bottom-nav-item ${isActive ? 'bottom-nav-active' : ''}`}
                    >
                        <span className="bottom-nav-icon-wrap">
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                            {isActive && <span className="bottom-nav-glow" />}
                        </span>
                        <span className="bottom-nav-label">{item.name}</span>
                    </NavLink>
                );
            })}

            {/* Styles scoped to bottom nav — does NOT override any existing CSS */}
            <style>{`
                .bottom-nav-bar {
                    display: none;
                }

                @media (max-width: 768px) {
                    .bottom-nav-bar {
                        display: flex;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        z-index: 9999;
                        justify-content: space-around;
                        align-items: center;
                        background: rgba(10, 15, 30, 0.92);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border-top: 1px solid rgba(212, 162, 78, 0.15);
                        box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.25);
                        padding: 6px 0;
                        padding-bottom: calc(6px + env(safe-area-inset-bottom));
                    }

                    .bottom-nav-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        flex: 1;
                        padding: 6px 0 2px;
                        text-decoration: none;
                        color: rgba(255, 255, 255, 0.45);
                        transition: all 0.3s ease;
                        -webkit-tap-highlight-color: transparent;
                        position: relative;
                    }

                    .bottom-nav-item:hover {
                        color: rgba(255, 255, 255, 0.7);
                    }

                    .bottom-nav-active {
                        color: #d4a24e !important;
                    }

                    .bottom-nav-active .bottom-nav-label {
                        color: #d4a24e;
                    }

                    .bottom-nav-icon-wrap {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 36px;
                        height: 28px;
                        transition: transform 0.3s ease;
                    }

                    .bottom-nav-active .bottom-nav-icon-wrap {
                        transform: scale(1.12);
                    }

                    .bottom-nav-glow {
                        position: absolute;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(212, 162, 78, 0.25), transparent 70%);
                        pointer-events: none;
                    }

                    .bottom-nav-label {
                        font-size: 10px;
                        font-weight: 500;
                        margin-top: 2px;
                        letter-spacing: 0.03em;
                        transition: color 0.3s ease;
                        font-family: 'Inter', sans-serif;
                    }
                }
            `}</style>
        </nav>
    );
};

export default BottomNav;
