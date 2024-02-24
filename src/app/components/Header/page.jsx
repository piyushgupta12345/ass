import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='bg-[#212731] text-white text-lg font-light font-serif'>
            <ul className=' flex justify-center items-center gap-10 h-[70px]'>
                <Link href={'/categories'}>
                    <li>Categories</li>
                </Link>
                <Link href={'/website'}>
                    <li>Website Builders</li>
                </Link>
                <Link href={'/deals'}>
                    <li>Today's deals</li>
                </Link>
            </ul>
        </div>
    )
}
