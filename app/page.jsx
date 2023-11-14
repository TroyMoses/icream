'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bgImage from '../components/images/carousel-1.jpg'
import aboutImage from '../components/images/about.jpg'
import promotionImage from '../components/images/promotion.jpg'

import Anime from '../components/Anime.jsx';

export default function Home() {

    const router = useRouter();

    const [updatesEmail, setUpdatesEmail] = React.useState({
        email:''
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatesEmail)
            });
            const data = await res.json();
            router.push('/');
            setUpdatesEmail({
                email: ''
            });
        } catch (error) {
            console.error(error.message);
        }
    };

 
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
                                <Link href="/" className="text-pink-400">Home</Link>
                                <Link href="/products" className="hover:text-pink-400">Products</Link>
                                <Link href="/service" className="hover:text-pink-400">Services</Link>
                                <Link href="/contact" className="hover:text-pink-400">Contact Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {/* Hero Section */}
            <div className='flex hero h-full -mt-12 w-full max-h-full items-center text-center justify-center'>
                <div className='text-3xl md:text-5xl text-white space-y-12'>
                    <h2 className=' font-sans  w-full rounded-lg font-semibold'>
                        <span className='bg-pink-500 px-3 rounded-lg'>APEX ICE-CREAM PARLOUR</span>
                    </h2>
                    <h1 className=' font-serif font-semibold text-6xl md:text-7xl'>
                        <span className='bg-pink-500 px-3 rounded-lg'>DELICIOUS AND YUMMY</span>
                    </h1>
                    <button className='text-white text-lg md:text-xl px-8 rounded-full py-3 hover:bg-pink-600 bg-pink-500'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className='mt-10 text-5xl flex justify-center space-y-5'>
                <div className='space-y-5'>
                    <div className="bg-pink-400 ml-10 w-24 h-1 md:ml-64 flex justify-center"></div>
                    <h1 className='pl-10 md:pl-0'>Delicious And Yummy Ice Cream</h1>
                    <h1 className='hidden md:flex md:justify-center md:-ml-12 md:text-center text-4xl'>Since 2020</h1>
                </div>
            </div>
            <div className="flex justify-center flex-col md:flex-row mt-10 px-10 md:px-20 md:space-x-5 space-y-5 md:space-y-0">
                <div className='text-lg justify-end space-y-4'>
                    <h1 className="text-4xl">
                        About Us
                    </h1>
                    <p>
                        Eos kasd eos dolor vero vero, 
                        lorem stet diam <br className=' hidden md:flex' />rebum. Ipsum amet 
                        sed vero dolor sea
                    </p>
                    <p>
                        Takimata sed vero vero no sit sed, 
                        justo clita duo no<br  className=' hidden md:flex'/> duo amet et, 
                        nonumy kasd sed dolor eos diam 
                        lorem eirmod. Amet sit amet amet 
                        no. Est nonumy sed <br className=' hidden md:flex'/>labore eirmod 
                        sit magna. Erat at est justo sit ut. 
                        Labor diam sed ipsum et eirmod
                    </p>
                </div>
                <div className='md:-mx-10'>
                    <Image 
                        src={aboutImage} 
                        className='rounded-md w-auto md:h-auto'/>
                </div>
                <div className='text-lg justify-start space-y-4'>
                    <h1 className="text-4xl">
                        Our Features
                    </h1>
                    <p>
                        Eos kasd eos dolor vero vero, 
                        lorem stet diam <br className=' hidden md:flex'/>rebum. Ipsum amet 
                        sed vero dolor sea
                    </p>
                    <p>
                        Takimata sed vero vero no sit sed, 
                        justo clita duo <br className=' hidden md:flex'/>no duo amet et, 
                        nonumy kasd sed dolor eos diam<br className=' hidden md:flex'/> 
                        lorem eirmod. Amet sit amet amet 
                        no. Est nonumy sed labore eirmod 
                        sit magna. Erat at est justo sit ut. 
                        Labor diam sed ipsum et eirmod
                    </p>
                </div>
            </div>

            {/* Promotion Section */}
            <div className="flex flex-col space-y-7 mt-12 mx-10 md:mx-40 rounded-xl text-center items-center justify-center bg-pink-400 py-10 px-10">
               <div className="flex rounded-full justify-center text-xl font-bold items-center text-blue-400 w-20 h-20 bg-white px-2 py-2">
                    $199
               </div>
               <h1 className='text-white text-3xl font-bold'>
                    Chocolate Ice Cream
               </h1>
               <p className='text-xl text-white'>
                Lorem justo clita dolor ipsum ut sed 
                eos, ipsum et dolor kasd sit ea justo. 
                Erat justo sed sed diam. Ea et erat ut 
                sed diam sea ipsum
               </p>
               <Link href='/products' className='text-white text-lg md:text-xl px-8 rounded-full py-3 hover:bg-gray-400 bg-gray-500'>
                    Order Now
                </Link>
            </div>

            {/* News Letter */}
            <section id="news_letter" className="bg-gray-200 mx-10 rounded-3xl mt-14">

                {/* Flex container */}
                <div className="container flex flex-col items-center justify-between px-10 py-16 mx-auto space-y-12 md:flex-row md:space-y-0">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold leading-tight text-center text-gray-600 md:max-w-xl md:text-left">
                        Subscribe To Our News Letter<br/>
                        <span className='text-gray-600 text-xl'>
                            Get all updates in your inbox.
                        </span>
                    </h2>

                    {/* Input container */}
                    <div className="flex justify-between text-md md:m-5">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col text-lg space-x-3 md:flex-row">
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder='Enter Email Address' 
                                    className="flex px-6 py-3 text-center md:text-left rounded-full w-96 mb-3 md:mb-0" 
                                    onChange={(e) => setUpdatesEmail({...updatesEmail, email:e.target.value})}/>
                                
                                <button type='submit' className="px-7 py-2 text-white rounded-full bg-gray-500 hover:bg-gray-400 focus:outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-gray-100 mt-20 text-center px-auto py-20 text-lg'>
                
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
