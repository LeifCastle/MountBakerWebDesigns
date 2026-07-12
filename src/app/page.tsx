'use client'
import Image from "next/image";
import {useState} from "react";
import {useTheme} from '../../Components/ThemeContext';

export default function Home() {

    const {isDark, toggleTheme} = useTheme();

    return (
        <main>
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
                        <h2 className="text-2xl dark:text-white text-black font-ibm pb-2 font-semibold">Custom Designs | Custom Code</h2>
                        <h2 className="text-6xl font-ibm font-bold pb-12">Small Business Web Designer</h2>
                        <p className="font-inter font-medium tracking-tight text-xl">No page builders or WordPress <br /> We build superior and unique hand-coded websites
                            starting at $125/mo</p>

                        <div className="flex flex-row gap-4 items-center flex-col sm:flex-row font-ibm text-lg pt-6">
                            <a href="/contact"
                               className="bg-[#93a9a8] hover:bg-[#7a6263] rounded-3xl border-slate-800 px-6 py-2 hover:text-white transition-all duration-[0.4s]">
                                Get Started
                            </a>
                            <a href="/contact"
                               className="bg-[#93a9a8] hover:bg-[#7a6263] rounded-3xl border-slate-800 px-6 py-2 hover:text-white transition-all duration-[0.4s]">
                                About Us
                            </a>
                        </div>
                    </div>
                    <div className="flex-1"></div>
            </section>
            <section>
                <div className="flex flex-col justify-center items-center px-4">
                    <h3 className="text-4xl py-10 font-ibm">Why Choose Us?</h3>
                    <p className="w-[50%] text-center text-md">At Mount Baker Web Designs, we don’t use generic
                        templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-2 px-[14%] py-20">
                    <div
                        className="col-span-1 row-span-2 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                    <div
                        className="col-span-2 row-span-1 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                    <div
                        className="col-span-1 row-span-1 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                    <div
                        className="col-span-1 row-span-1 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                    <div
                        className="col-span-2 row-span-1 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                    <div
                        className="col-span-1 row-span-1 bg-white/50 backdrop-blur-md border border-white/50 shadow-sm p-8 rounded-3xl">At
                        Mount Baker Web Designs, we don’t use generic templates, page builders, or WordPress. We build
                        every site from the ground up, writing the code entirely by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </div>
                </div>
            </section>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </main>
    );
}
