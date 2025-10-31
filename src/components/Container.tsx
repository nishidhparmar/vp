import { cn } from '@/utils/cn';
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('max-w-[2000px] md:mx-auto px-4 sm:px-6 md:px-8 p-section-padding-x', className)} >
            {children}
        </div>
    )
}

export default Container