'use client'

import { useTheme } from './ThemeContext';
export default function Header() {

    const { isDark, toggleTheme } = useTheme();
    
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
                My Logo
            </div>

            <nav className="flex gap-6">
                <a href="/" className="text-slate-900 dark:text-white">Home</a>
                {/* Add more links here */}
            </nav>

            <button
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                onClick={() => toggleTheme()}
            >
                Toggle Theme
            </button>
        </header>
    );
}