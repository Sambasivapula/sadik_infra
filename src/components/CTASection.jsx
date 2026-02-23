import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-16 md:py-28 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/cta-workers.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/80"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <span className="inline-block px-3 md:px-5 py-1 md:py-1.5 border border-secondary/40 text-secondary text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-5 md:mb-8">
                    Contract & Tender Inquiries
                </span>
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 md:mb-6 leading-tight tracking-tight">
                    Partner With <span className="text-secondary">Proven</span> Leadership
                </h2>
                <p className="text-gray-400 text-xs md:text-xl mx-auto mb-8 md:mb-12 font-light leading-relaxed max-w-2xl">
                    Multi-crore public infrastructure and corporate developments with uncompromising adherence to quality and deadlines.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5">
                    <Link to="/contact" className="group bg-secondary text-primary px-6 md:px-10 py-3 md:py-4 font-bold text-sm md:text-base hover:bg-white transition-colors inline-flex items-center justify-center uppercase tracking-wide">
                        Get a Free Quote <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                    <a href="tel:+918919939269" className="border border-white/20 text-white px-6 md:px-10 py-3 md:py-4 font-semibold text-sm md:text-base hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center backdrop-blur-sm">
                        <PhoneCall className="mr-2 md:mr-3" size={16} /> Call Direct
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
