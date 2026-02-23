import React from 'react';

const PoweredBy = () => {
    return (
        <>
            <div className="h-8 md:h-10"></div>
            <div className="fixed bottom-0 left-0 w-full z-[100] bg-gray-900/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-center gap-3 px-4 py-1.5 md:py-2">
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">Designed &amp; Developed by</span>
                    <a href="https://crawlup.in" target="_blank" rel="noopener noreferrer" className="flex items-center transition-transform hover:scale-105 duration-300">
                        <img src="/images/crawlop-badge.png" alt="Crawlup Logo" className="h-5 md:h-6 w-auto object-contain" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default PoweredBy;
