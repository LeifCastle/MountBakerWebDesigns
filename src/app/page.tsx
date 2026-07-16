'use client'
import Image from "next/image";
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
                    <h2 className="text-2xl dark:text-white text-black font-ibm pb-2 font-medium">Custom Designs |
                        Custom Code</h2>
                    <h2 className="text-6xl font-ibm font-semibold pb-12">Small Business Web Designer</h2>
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
                    className="absolute inset-0 w-full h-full blur-md opacity-[0.5] mix-blend-multiply"
                    style={{
                        backgroundImage: `
                        linear-gradient(to bottom, #ffffff 0%, transparent 30%),
                        radial-gradient(circle at 15% 15%, #93a9a8, transparent 60%),
                        radial-gradient(circle at 85% 20%, #beaeaf, transparent 50%),
                        radial-gradient(circle at 50% 50%, #ffffff, transparent 60%),
                        radial-gradient(circle at 30% 70%, #93a9a8, transparent 45%),
                        radial-gradient(circle at 70% 80%, #beaeaf, transparent 55%)
                        `,
                        backgroundSize: "100% 100%"
                    }}
                ></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <h3 className="text-5xl py-10 font-ibm font-bold tracking-normal">Why Choose Us?</h3>
                    <p className="w-[50%] text-center text-lg">At Mount Baker Web Designs, we don’t use generic
                        templates, page builders, or WordPress. We build every site from the ground up, writing every
                        line of code by hand. This approach gives you two
                        major advantages: unmatched performance and better SEO, which helps your business rank higher
                        and capture more leads.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6 px-[14%] py-20">
                    <div className="bento-card col-span-1 row-span-2 origin-bottom-right group">
                        <p className="bento-title">Lifetime Support & Edits</p>
                        <p className="bento-content">We don't just build your site and disappear. We provide unlimited
                            maintenance and support for
                            basic content and design edits. If your business evolves, your site evolves with it — adding
                            new pages or services is on us at no additional cost to you. We partner with you to
                            make sure your site stays up-to-date.</p>
                    </div>
                    <div className="bento-card col-span-2 row-span-1 origin-bottom-left group">
                        <p className="bento-title">Optimized Page Speed</p>
                        <p className="bento-content">Our sites have zero bloat, zero waste, and built with purpose so we
                            get perfect 98-100/100
                            speed scores with Google.
                        </p>
                    </div>
                    <div
                        className="bento-card col-span-1 row-span-1 m-5 group">
                        <p className="bento-title">100% Unique</p>
                        <p className="bento-content">Our websites are one-of-a-kind made without any cookie cutter
                            formulas like Wix or Wordpress. We build everything from scratch using Next.js, HTML5, &
                            TailwindCSS.
                        </p>
                    </div>
                    <div
                        className="bento-card col-span-1 row-span-2 origin-top-left group">
                        <p className="bento-title">SEO Optimized</p>
                        <p className="bento-content">SEO defines the difference between having a website and customers
                            finding your website. We build SEO directly into the foundation of your site, optimizing for
                            search intent and performance. By focusing on site speed, clean code, and smart
                            architecture, we help your business climb the ranks and capture the traffic that matters
                            most.
                        </p>
                    </div>
                    <div
                        className="bento-card col-span-2 row-span-1 origin-top-right group">
                        <p className="bento-title">Mobile Friendly</p>
                        <p className="bento-content">With over 60% of web traffic originating from mobile devices, we
                            build from the phone up. Every site we design features a fluid, responsive layout that
                            intelligently adapts to any screen size, ensuring a seamless experience whether your
                            customer is on a smartphone, tablet, or desktop.
                        </p>
                    </div>

                </div>
            </section>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </main>
    );
}
