/// <reference types="vite/client" />

declare module 'react-dom/client' {
    import { ReactElement } from 'react';
    export function createRoot(container: Element | DocumentFragment | null): {
        render(element: ReactElement): void;
    };
}