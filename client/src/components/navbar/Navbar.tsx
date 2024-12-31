import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import NavItem from './NavItem';
import Dropdown from './DropDown';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="border-b border-b-richblack-600 bg-richblack-800 shadow-xl relative z-50">

            <div className="mx-auto px-4 md:px-10">

                <div className="flex py-2 justify-between items-center">
                    <div className="flex ">
                        <div className="flex-shrink-0 flex items-center ">
                            <Link to="/">
                                <img src={logo} className=" h-12 w-56 object-contain" alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-6 flex items-baseline space-x-4 lg:space-x-6">
                            <NavItem label="Home" link="/" />
                            <NavItem label="About Us" link="/about-us" />
                            <NavItem label="Pricing" link="/pricing" />
                            <NavItem label="Contact us" link="contact-us" />


                            <Dropdown
                                label="Resources"
                                items={[{ label: 'Create Assessment', href: '/create-assessment' },
                                { label: 'Invite Candidates', href: '/invite-candidates' },
                                { label: 'Assessments', href: '/assessments' }]}
                            />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center md:ml-6 space-x-4">

                            <div className=''>
                                <Link to={'/login'}>

                                    <button className="group relative overflow-hidden border-2 border-[#1ecdf8] px-9 py-2 text-sm font-semibold text-gray-200">
                                        <span className="absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r from-[#1ECDF8] to-[#7acbe1] transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
                                        <span className="relative z-10 flex items-center gap-2">
                                            <span>Login</span>
                                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div ref={menuRef} className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                        >
                            <svg
                                className={`h-6 w-6 ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute w-full z-50`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="flex flex-col">
                        <NavItem label="Home" link="/" />
                        <NavItem label="About Us" link="/aboutus" />
                        <NavItem label="Find a tutor" link="#" />
                    </div>
                    <div className="flex flex-col md:ml-6 space-y-2">
                        <div className="w-24 h-10">
                            <button className="rounded-full py-1 border-[1px] border-white bg-secondary w-full h-full text-white font-normal text-sm">
                                Login
                            </button>
                        </div>
                        <div className="w-24 h-10">
                            {/* <Button label="Signup" classNames="rounded-full" small /> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
