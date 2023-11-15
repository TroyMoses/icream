'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Anime from '../../components/Anime.jsx';

export default function ContactUs() {

    const router = useRouter();
    const [userFeedBack, setUserFeedBack] = React.useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });
    
    const [buttonDisabled, setButonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
      if(userFeedBack.name !=='' && userFeedBack.email!=='' && userFeedBack.message!=='') {
        setButonDisabled(false);
      } else {
        setButonDisabled(true);
      }
    }, [userFeedBack]);
    

    const handleSubmit = async(e) => {

        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userFeedBack)
            });
            const respo = await res.json();
            router.push('/');

        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    
 
    return (
        <div className="relative mx-auto h-screen w-screen bg-gray-100">
            {/* <!-- Topbar Start --> */}
            <div className=" bg-pink-400 font-serif px-10 py-7 pb-14">
                <div className="text-center text-lg flex">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white pr-3" href="">FAQs</a>
                        <span className="text-white">|</span>
                        <a className="text-white px-3" href="">Help</a>
                        <span className="text-white">|</span>
                        <a className="text-white pl-3" href="">Support</a>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <div className="mx-10 -my-10 text-center relative z-10">
                <div className="text-center -my-10">
                    <nav className="navbar -my-10 rounded-full py-2 px-10 bg-white pr-26">
                        {/* <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                        </a> */}
                        <div className="flex pl-3 pr-52 justify-center md:justify-left" id="navbarCollapse">
                            <Link href="/index">
                                <h1 className="m-0 text-6xl text-pink-400"><span className="text-6xl text-blue-500">i</span>CREAM</h1>
                            </Link>
                            <div className="hidden md:flex text-gray-700 space-x-16 items-center text-xl ml-auto">
                                <Link href="/" className="hover:text-pink-400">Home</Link>
                                <Link href="/products" className="hover:text-pink-400">Products</Link>
                                <Link href="/service" className="hover:text-pink-400">Services</Link>
                                <Link href="/contact" className="text-pink-400">Contact Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {/* Hero Section */}
            <div className='flex hero h-full -mt-12 w-full max-h-full items-center text-center justify-center'>
                <div className='text-4xl md:text-5xl text-white space-y-12'>
                    <h2 className=' font-sans  w-full rounded-lg font-semibold'>
                        <span className='bg-pink-500 px-3 rounded-lg'>APEX ICE-CREAM PARLOUR</span>
                    </h2>
                    <h1 className=' font-serif rounded-lg font-semibold text-2xl md:text-3xl'>
                    <span className='bg-pink-500 px-3 rounded-lg'>CONTACT US</span>
                    </h1>
                </div>
            </div>

            {/* Contact Start */}
            <div className="py-5">
                <div className="container py-5">
                    <div className='text-5xl flex justify-center space-y-5 mb-5'>
                        <div className='space-y-5'>
                            <div className="bg-pink-400 w-24 mt-7 h-1 ml-48 flex justify-center"></div>
                            <h1 className='flex text-center md:pl-0'>Contact Us For Any Inquiry</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="py-10 flex justify-center">
                                <form className='text-lg space-y-5' onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                                        <div>
                                            <input 
                                                type="text" 
                                                className=" border-2 border-gray-300 p-3 md:mr-4 w-96 rounded-lg" 
                                                id="name" 
                                                name='name'
                                                placeholder="Your Name" 
                                                required 
                                                onChange={(e) => setUserFeedBack({...userFeedBack, name:e.target.userFeedBack})} />
                                        </div>
                                        <div>
                                            <input 
                                                type="email" 
                                                className=" border-2 border-gray-300 p-3 w-96 rounded-lg" 
                                                id="email" 
                                                name='email'
                                                placeholder="Your Email" 
                                                required 
                                                onChange={(e) => setUserFeedBack({...userFeedBack, email:e.target.userFeedBack})} />
                                        </div>
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            className="border-2 border-gray-300 p-3 w-full rounded-lg" 
                                            id="subject" 
                                            name='subject'
                                            placeholder="Subject" 
                                            required 
                                            onChange={(e) => setUserFeedBack({...userFeedBack, subject:e.target.userFeedBack})} />
                                    </div>
                                    <div>
                                        <textarea 
                                            className="border-2 border-gray-300 p-3 w-full rounded-lg" 
                                            id="message" 
                                            rows={12}
                                            name='message'
                                            placeholder="Enter Your Message Here" 
                                            required 
                                            onChange={(e) => setUserFeedBack({...userFeedBack, message:e.target.userFeedBack})} />
                                    </div>
                                    <div>
                                        <h2 className='text-center font-sans text-gray-600'>{loading ? 'Processing, please wait....' : ''}</h2>
                                    </div>
                                    <div>
                                        <button 
                                            className="px-4 py-3 rounded-xl bg-pink-400 hover:bg-pink-500 text-white" 
                                            type="submit">
                                            {buttonDisabled ? 'Please Enter Details' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='bg-gray-100 text-center px-auto py-20 text-lg'>
                
                <h1 className="m-0 text-6xl text-pink-400"><Link href="/"><span className="text-6xl text-blue-500">i</span>CREAM</Link></h1>
                
                <div className='flex justify-center space-x-20 text-center mt-5'>
                    <div className=' text-right'>
                        <h1 className="font-bold text-gray-600">Get In Touch</h1>
                        <p className="text-gray-500 mb-2">Marcus Hostel, Bugema, Uganda</p>
                        <p className="text-gray-500 mb-0">+256 789 663 895</p>
                    </div>
                    <div className=' text-left '>
                        <h1 className="font-bold text-gray-600">Opening Hours</h1>
                        <p className="mb-2 text-gray-500">Sun – Fri, 8AM – 5PM</p>
                        <p className="mb-0 text-gray-500">Saturday: Closed</p>
                    </div>
                </div>
                <div className='text-md text-gray-500 mt-5'>
                    <p className=''>
                        &copy; <Link href="/" className='text-pink-400'>icream</Link>. All Rights Reserved. Designed by <Link href="https://github.com/TroyMoses" className='text-pink-400'>TroyMoses</Link>
                    </p>
                </div>
            </footer>
            
        </div>
    )
}
