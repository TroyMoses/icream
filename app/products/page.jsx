'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bgImage from '../../components/images/carousel-1.jpg';
import aboutImage from '../../components/images/about.jpg';
import promotionImage from '../../components/images/promotion.jpg';
import product1Image from '../../components/images/product-1.jpg';

import Anime from '../../components/Anime.jsx';

export default function OurProducts() {

    const router = useRouter();

    const [endOfProduct, setEndOfProduct] = React.useState(false);
    const endOfProducts = () => {
        setEndOfProduct(true);
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
                                <Link href="/" className="hover:text-pink-400">Home</Link>
                                <Link href="/product" className="text-pink-400">Products</Link>
                                <Link href="/service" className="hover:text-pink-400">Services</Link>
                                <Link href="/contact" className="hover:text-pink-400">Contact Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {/* Hero Section */}
            <div className='flex products max-w-full items-center text-center justify-center'>
                <div className='text-3xl hidden md:flex md:flex-col md:-mt-12 md:text-3xl text-white font-bold space-y-10'>
                    <h1 className=' font-serif bg-pink-500 px-3 font-semibold text-5xl md:text-7xl'>
                        APEX ICE-CREAM PARLOUR
                    </h1>
                    <h2 className='text-3xl bg-pink-500 rounded-lg w-96 ml-96 text-center -mt-12 md:text-4xl font-sans font-semibold'>
                        OUR PRODUCTS
                    </h2>
                </div>
            </div>

            {/* Products Section */}
            <div className='text-5xl flex justify-center space-y-5'>
                <div className='space-y-5'>
                    <div className="bg-pink-400 w-24 mt-7 h-1 ml-40 flex justify-center"></div>
                    <h1 className='-ml-0 md:pl-0'>Best Prices We Offer</h1>
                    <h1 className='flex justify-center md:-ml-12 md:text-center text-4xl'>Ice Cream Lovers</h1>
                </div>
            </div>

            {/* Orders Section */}
            <div className='flex flex-col'>
                <div className="flex flex-col md:flex-row md:space-x- space-y-16 md:space-y-0 mt-12 mx-10 md:mx-40 rounded-xl text-center items-center justify-center py-10 px-10">
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product1 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">
                            
                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Chocolate Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product2 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Vanilla Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product3 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Chocolate Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product4 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Vanilla Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex flex-col md:-mt-5 md:flex-row md:space-x- space-y-16 md:space-y-0 mt-12 mx-10 md:mx-40 rounded-xl text-center items-center justify-center py-10 px-10">
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product7 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">
                            
                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Chocolate Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product8 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Vanilla Ice Cream
                        </h1>
                        <button 
                            className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400' >
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product6 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Chocolate Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                    <div className="flex hover:bg-slate-100 px-20 rounded-md py-10 flex-col justify-center text-center space-y-5 items-center">
                        <div className="flex rounded justify-center text-xl font-bold items-center text-white w-20 h-20 bg-pink-300 px-2 py-2 -mb-8">
                                $199
                        </div>
                        <div className="product5 flex justify-center rounded-full items-center bg-pink-300 px-24 py-24">

                        </div>
                        <h1 className='text-gray-700 text-xl font-bold'>
                            Vanilla Ice Cream
                        </h1>
                        <button className='text-white text-md px-8 rounded-full py-3 hover:bg-blue-500 bg-blue-400'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center text-xl mb-7'>
                <h1 className='font-sans text-red-500'>
                    {endOfProduct ? 'End Of Products!' : ''}
                </h1>
            </div>
            <div className="flex justify-center text-center space-y-5">
                <button className='text-white text-lg md:text-xl px-8 rounded-full py-3 hover:bg-pink-500 bg-pink-400' 
                        onClick={endOfProducts}>
                    Load More
                </button>
            </div>

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
