import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#000000] text-slate-300 md:px-10 px-6 pt-10">
            <div
                className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 max-w-7xl mx-auto footer  sm:footer-horizontal justify-between pb-8">
                <div className="pr-8">
                    <a href="/" className="text-base-100 text-xl font-semibold">CS — Ticket System</a>
                    <p className="break-words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-regular fa-envelope"></i>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto py-5 border-t-1 border-slate-600">
                <p className="text-center">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;