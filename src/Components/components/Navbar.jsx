import React from 'react';
import plusIcon from '../../assets/plus.png'

const Navbar = () => {
    return (
        <section className='w-full bg-base-100 drop-shadow'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="navbar">

                    {/* LEFT SIDE */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Changelog</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Download</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>

                        <a className="text-lg font-semibold ml-2">
                            CS — Ticket System
                        </a>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="navbar-end">

                        {/* Desktop Menu */}
                        <ul className="menu menu-horizontal px-1 hidden lg:flex">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>

                        {/* New Ticket Button (Always Visible) */}
                        <button className="btn btn-primary ml-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-0">
                            <img src={plusIcon} alt="plusIcon" srcset="" />  New Ticket
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;