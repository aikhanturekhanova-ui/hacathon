import React from 'react';

// Добавляем описание для TypeScript
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            // Добавляем те самые отступы (padding), чтобы текст не лип к краям
            className="w-full px-6 py-4 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all rounded-xl border border-white/5 bg-white/5"
        >
            {children}
        </button>
    );
};

