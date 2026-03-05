import React from 'react';


const Footer = () => {
    return (
        <footer className=" bg-[#000000] text-slate-300 md:px-10 px-6 pt-10">
            <div
                className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 max-w-7xl mx-auto footer  sm:footer-horizontal justify-between pb-8">
                <div className="pr-8">
                    <a href="/" className="text-base-100 text-xl font-semibold">CS — Ticket System</a>
                    <p className="break-words">Our CS Ticket System streamlines customer support by organizing incoming requests into a unified interface. It allows teams to monitor task status in real-time, prioritize high-urgency issues, and resolve tickets efficiently through an integrated workflow.</p>
                </div>
                <nav>
                    <h6 className="text-lg text-base-100">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="text-lg  text-base-100">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>

                </nav>
                <nav>
                    <h6 className="text-lg  text-base-100">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-lg  text-base-100">Social Links</h6>
                    <div className="flex items-center cursor-pointer">
                        {/* X / Twitter SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.51 0-4.55 2.05-4.55 4.58 0 .36.04.7.12 1.03A12.94 12.94 0 013 1.64a4.51 4.51 0 001.41 6.11 4.5 4.5 0 01-2.06-.57v.06c0 2.22 1.57 4.07 3.65 4.49a4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.23 3.17A9.05 9.05 0 010 19.54 12.77 12.77 0 006.92 21c8.3 0 12.85-6.87 12.85-12.84 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z" />
                        </svg>
                        <span className="text-gray-100 font-medium ml-1">@ CS - Ticket System</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        {/* X / Twitter SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
                        </svg>
                        <span className="text-gray-100 font-medium ml-1">@ CS - Ticket System</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        {/* X / Twitter SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.77 2.66 4.77 6.12V24h-4v-7.88c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-4V8z" />
                        </svg>
                        <span className="text-gray-100 font-medium ml-1">@ CS - Ticket System</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        {/* X / Twitter SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-100 font-medium ml-1">support@cst.com</span>
                    </div>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto py-5 border-t-1 border-slate-600">
                <p className="text-center">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;