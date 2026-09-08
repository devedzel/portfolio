import { useEffect, useState } from 'react';

export function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof localStorage !== 'undefined' && localStorage.theme) {
            return localStorage.theme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.theme = isDark ? 'dark' : 'light';
    }, [isDark]);

    return { isDark, toggle: () => setIsDark((v) => !v) };
}
