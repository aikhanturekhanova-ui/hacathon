import type { ReactNode } from 'react'

interface ButtonProps {
    onClick?: () => void
    children: ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="px-6 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-[#0052FF] to-[#00FFB9] hover:shadow-lg hover:shadow-[#0052FF]/30 transition-all"
        >
            {children}
        </button>
    )
}

