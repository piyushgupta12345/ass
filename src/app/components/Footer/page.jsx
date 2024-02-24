import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='  bg-[#212731] px-[200px]'>
            <ul className='flex justify-between items-start pt-[50px] flex-wrap pb-[200px] gap-[40px] font-sans font-thin'>
                <Link href={'/categories'}>
                    <h1 className='text-xl mb-[8px] text-white'>CATEGORIES</h1>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Web Builder</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Hosting</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Data Center</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Robotic- Automation</li>
                </Link>
                <Link href={'/contact'}>
                    <h1 className='text-xl mb-[8px] text-white'>CONTACT</h1>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Contact</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Privacy Policy</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Term of Services</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>Categories</li>
                    <li className='mb-[8px] text-[#B6BDC4] hover:text-[#e1e4e8]'>About</li>
                </Link>
                <label htmlFor="location">
                    <select name="" id="location">
                        <option value="united">United States</option>
                        <option value="india">india </option>
                        <option value="usa">USA </option>
                    </select>
                </label>
            </ul>
        </div>
    )
}

export default Footer
