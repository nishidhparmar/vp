"use client"
import { cn } from "@/utils/cn"
import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    className = "",
    style,
    ...props
}) => {
    return (
        <button
            {...props}
            style={{
                background: "radial-gradient(ellipse at 50% 50%,#29c0be, #26a4a2)",
                ...style,
            }}
            className={cn(`w-fit px-6 py-3 rounded-lg font-bold text-netural-black flex items-center gap-4 cursor-pointer btn ${className}`)}
        >
            {icon && <span className="text-xl text-netural-black">{icon}</span>}
            {children}
        </button>
    )
}

export default Button
