'use client'
import Image from "next/image";
import {useState} from "react";
import {useTheme} from '../../Components/ThemeContext';

export default function Home() {

    const {isDark, toggleTheme} = useTheme();

    return (
        <main>
            {/******  Section 1 - Title ******/}
            <section className="relative h-screen w-full flex flex-col justify-center items-center px-4">
                {/***** Background Images *****/}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* Light Image */}
                    <Image
                        src="/MountBaker_Light.png"
                        alt="Mount Baker Light"
                        fill
                        sizes="100vw"
                        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-0' : 'opacity-100'}`}
                        priority
                    />
                    {/* Dark Image */}
                    <Image
                        src="/MountBaker_Dark.png"
                        alt="Mount Baker Dark"
                        fill
                        sizes="100vw"
                        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'}`}
                        priority
                    />
                    {/* White Overlay */}
                    <div
                        className={`absolute inset-0 ${isDark ? 'bg-black opacity-0' : 'bg-white opacity-50'}  pointer-events-none`}/>
                    {/* Bottom Gradient Fade */}
                    <div
                        className={` absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${isDark ? 'to-[#191A1C]' : 'to-white'} pointer-events-none`}/>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center w-full min-h-screen text-center pt-10">
                    <h2 className="text-2xl dark:text-white text-black font-ibm pb-2 font-semibold">Custom Designs |
                        Custom Code</h2>
                    <h2 className="text-6xl font-ibm font-bold pb-12">Small Business Web Designer</h2>
                    <p className="font-inter font-medium tracking-tight text-xl">No cookie-cutter page builders
                        used<br/> We
                        build superior and unique hand-coded websites starting at $125/mo</p>

                    <div className="flex flex-row gap-4 items-center flex-col sm:flex-row font-ibm text-lg pt-6">
                        <a href="/contact"
                           className="btn-primary">
                            Get Started
                        </a>
                        <a href="/contact"
                           className="btn-primary">
                            About Us
                        </a>
                    </div>
                </div>
                <div className="flex-1"></div>
            </section>

            {/******  Section 2 - Why Choose Us ******/}
            <section className="font-inter tracking-tight relative">
                <div
                    className="absolute inset-0 w-dvw h-dvh blur-lg opacity-[0.5] mix-blend-multiply"
                    style={{
                        backgroundImage: `
      radial-gradient(circle at 15% 15%, #93a9a8, transparent 30%),
      radial-gradient(circle at 85% 20%, #beaeaf, transparent 30%),
      radial-gradient(circle at 50% 50%, #ffffff, transparent 40%),
      radial-gradient(circle at 30% 70%, #93a9a8, transparent 25%),
      radial-gradient(circle at 70% 80%, #beaeaf, transparent 35%)
    `,
                        backgroundSize: "100% 100%"
                    }}
                ></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <h3 className="text-4xl py-10 font-ibm tracking-normal">Why Choose Us?</h3>
                    <p className="w-[50%] text-center text-lg">At Mount Baker Web Designs, we don’t use generic
                        templates, page builders, or WordPress. We build every site from the ground up, writing every
                        line of code by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6 px-[14%] py-20">
                    <div
                        className="col-span-1 row-span-2 glass-card">Lifetime
                        support and editing
                    </div>
                    <div
                        className="col-span-2 row-span-1 glass-card">
                        <p className="glass-content">Optimized Page Speed</p>
                        <p className="glass-content">Our sites have zero bloat, zero waste, and built with purpose so we
                            get perfect 98-100/100
                            speed scores with Google.
                        </p>

                    </div>
                    <div
                        className="col-span-1 row-span-1 glass-card">100%
                        unique, no cookie cutter wix or wordpress. Our build stack is Next.js, HTML5, & TailwindCSS
                    </div>
                    <div
                        className="col-span-1 row-span-1 glass-card"> SEO
                        Optimized
                    </div>
                    <div
                        className="col-span-2 row-span-1 glass-card"> Mobile
                        First Design
                    </div>
                    <div
                        className="col-span-1 row-span-1 glass-card">Responsive
                        layout for any device at any size.
                    </div>
                </div>
            </section>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </main>
    );
}
