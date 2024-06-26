"use client"
import { HomePageFilters } from '@/constants/filter'
import React from 'react'
import { Button } from '../ui/button'

const HomeFilter = () => {
    const active = 'newest';
    return (
        <div className='mt-10 flex-wrap gap-3 md:flex hidden'>
            {
                HomePageFilters.map((item) => {
                    return <Button key={item.value} onClick={() => { }} className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value ? 'bg-primary-100 text-primary-500' : 'bg-light-800 dark:text-light-500 '}`}>
                        {item.name}
                    </Button>
                })
            }

        </div>
    )
}

export default HomeFilter
