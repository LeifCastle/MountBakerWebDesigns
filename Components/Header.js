'use client'

import { useState, useEffect } from 'react'

import {useTheme} from './ThemeContext';
import Image from "next/image";

export default function Header() {

    const {isDark, toggleTheme} = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 110;
            setIsScrolled((prev) => {
                if (prev !== isScrolled) return isScrolled;
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <header
            className={`${isScrolled ? 'w-full top-0' : 'w-[80%] top-7 rounded-3xl'} fixed inset-x-0 mx-auto flex justify-between items-center  z-50 px-8 py-5 bg-[#beaeaf] shadow-[0_4px_20px_rgba(169,147,148,0.5)] transition-scroll duration-600`}>
            <div className="flex gap-4 items-center">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width="50"
                    height="50"
                    priority
                />
                <div className="text-[1.3rem] dark:text-white text-black leading-6 text-center">Mount Baker <br/>
                    <span className="text-[1.1rem]">Web Designs</span>
                </div>
            </div>
            <nav className="flex gap-6 text-xl">
                <a href="/" className="text-slate-900 dark:text-white">Home</a>
                <a href="/about" className="text-slate-900 dark:text-white">About Us</a>
                <a href="/services" className="text-slate-900 dark:text-white">Services</a>
                <a href="/contact" className="text-slate-900 dark:text-white">Contact</a>
            </nav>
            <div className={"flex flex-row items-center justify-center gap-4"}>
                <a href="/contact"
                   className="rounded-3xl border-slate-800 px-6 py-2 hover:bg-slate-800 hover:text-white transition-all">
                    Get Started
                </a>
                <button
                    className="rounded-3xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm "
                    onClick={() => toggleTheme()}
                >
                    Theme
                </button>
            </div>
        </header>
    );
}