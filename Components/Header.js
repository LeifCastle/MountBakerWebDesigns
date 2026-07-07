'use client'

import {useTheme} from './ThemeContext';
import Image from "next/image";

export default function Header() {

    const {isDark, toggleTheme} = useTheme();

    return (
            <header
                className="fixed top-7 inset-x-0 mx-auto flex justify-between items-center w-[85%] z-50 px-8 py-6 bg-slate-300 rounded-md">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width="50"
                        height="50"
                        priority
                    />
                    <div className="text-2xl dark:text-white text-black">Mount Baker <br/> Web Designs</div>
                </div>
                <nav className="flex gap-6">
                    <a href="/" className="text-slate-900 dark:text-white">Home</a>
                    <a href="/about" className="text-slate-900 dark:text-white">About Us</a>
                    <a href="/services" className="text-slate-900 dark:text-white">Services</a>
                    <a href="/contact" className="text-slate-900 dark:text-white">Contact</a>
                </nav>

                <button
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                    onClick={() => toggleTheme()}
                >
                    Theme
                </button>
            </header>
    );
}