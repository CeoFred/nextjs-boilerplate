import React from 'react'
import Link from 'next/link'
import Input from './Input'
import Button from './Button/Primary'

export default function Footer() {
  return (
    <div className="absolute bottom-0 container border border-t-gray border-l-0 border-r-0">

      <div className="container mx-auto sm:px-6 px-5 pt-8 xl:px-32 lg:px-10 3xl:px-52 xl:py-4 lg:py-4 md:py-4 3xl:py-8 bg-white text-dark">

        <div className="grid grid-cols-1 3xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 md:gris-rows-2 flex justify-between items-start ">

          <div className="flex items-start flex-col left">
            <div className="mb-2 text-xl">
          
                <span className="font-bold">3RDWEBLABS</span>
          
            </div>
            <Link href="/process" >
              <span className="font-light my-1">Development Process</span> 
            </Link>

            <Link href="/partners" >
              <span className="font-light my-1">Partners</span>
            </Link>

            <Link href="/about">
              <span className="font-light my-1">About</span>
            </Link>
            <Link href="/contact" >
              <span className="font-light my-1">Contact Us</span>
            </Link>
          </div>

          <div className="flex items-start flex-col left">
            <div className="mb-2 text-xl">
             
                <span className="font-bold">About</span>
              
            </div>
            <a  href="https://www.discord.com/3rdweblabs/" target="_blank" rel="noopener noreferrer" >
              <span className="font-light my-1">Join Our Community</span>
            </a>

           
              <span className="font-light my-1">Get Vetted</span>
          

            <Link href="/terms-and-conddition">
              <span className="font-light my-1">Terms and Condition</span>
            </Link>
          </div>

          <div className="flex flex-col items-start 3xl:w-80 sm:w-full sm:mt-10 bg-gray 3xl:px-4 py-4 sm:col-span-2">
            <div className="text-xl font-light">
              Subscribe to our newsletter to get all the stories straight in your inbox
            </div>

            <form className="my-4 flex w-full">
              <Input type="text" placeholder="Enter your @mail address" className="border border-gray rounded-lg px-3 py-2" />
              
              <Button className="py-4 w-20">
                <img src="/assets/images/icons/arrows/right.png" alt="send" className="h-3 w-3" />
              </Button>
            </form>

            <div className="text-sm font-light mb-8">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id 
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-5 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 bg-primary text-white">
        <div className="flex flex-col sm:flex-col  md:flex-col 3xl:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/images/logo/Logo-white.png" alt="3rdweblabs" className="h-10" />
          </div>

          <div className="flex items-center">
            {/* Navigation links */}
            <span className="3xl:px-4 lg:px-3 md:px-3 font-light xl:text-sm">

              © 2022 3WEBLABS <span className="font-bold">Powered by ABCD.</span> All Rights Reserved.

            </span>
          </div>

          <div className="flex items-center">
            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/facebook.png" alt="3rdweblabs" className="h-10" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/instagram.png" alt="3rdweblabs" className="h-10" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/twitter.png" alt="3rdweblabs_facebook_icon" className="h-10" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/linkedin.png" alt="3rdweblabs_linkedin_icon" className="h-10" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
