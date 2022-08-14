import React from 'react'
import Link from 'next/link'
import Button from './Button/Primary'
import SecondaryButton from './Button/Secondary'

export default function Header() {
  return (
    <div className="container mx-auto px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  absolute top-0 bg-white-2 sm:px-16">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
          <img src="/assets/images/logo/Logo.png" alt="3rdweblabs" className="" />
          </Link>
          </div>

        <div className="flex items-center sm:hidden md:hidden">
            {/* Navigation links */}
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/">
                Home
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/about">
                About
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/our-process">
                Our Process
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/blog">
                Blog
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/contact">
                Contact
              </Link>
            </span>
          </div>

        <div className="flex items-center sm:hidden ">
            {/* Action Buttons */}
            <Button className=''>Hire</Button>
            <SecondaryButton className=''>Join</SecondaryButton>

          </div>
    </div>
    </div>
  )
}
