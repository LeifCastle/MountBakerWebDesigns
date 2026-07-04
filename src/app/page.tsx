'use client'
import Image from "next/image";
import {useState} from "react";
import { useTheme } from '../../Components/ThemeContext';

export default function Home() {

const {isDark, toggleTheme} = useTheme();    

    return (
        <main>
            <section className="relative h-screen w-full flex flex-col justify-center items-center px-4">
                {/***** Background Images *****/}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* Light Image */}
                    <Image
                        src="/MountBakerLight.png"
                        alt="Mount Baker Light"
                        fill
                        sizes="100vw"
                        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-0' : 'opacity-100'}`}
                        priority
                    />
                    {/* Dark Image */}
                    <Image
                        src="/MountBakerDark.png"
                        alt="Mount Baker Dark"
                        fill
                        sizes="100vw"
                        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${isDark? 'opacity-100' : 'opacity-0'}`}
                        priority
                    />
                </div>
                <div
                    className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                        <h1 className="text-5xl dark:text-white text-black">Mount Baker Web Design</h1>

                        <div className="flex gap-4 items-center flex-col sm:flex-row">
                            
                        </div>
                    </div>
                    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                    </footer>
                </div>
            </section>
        </main>
    );
}
