import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0 sticky-bottom bg-secondary">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base"></div>
                </div>
                <div className="flex items-center">
                    <a href='https://github.com/DDesta25' target="_blank" rel="noreferrer noopener">Created by <span className='font-bold'>Daniel</span></a>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
            
                    </div>
                    <div>tekoladaniel@gmail.com</div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;