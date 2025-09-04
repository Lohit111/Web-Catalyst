'use client'; // Mark as client component
import Hero from '@/components/Hero';
import { useTheme } from '@/contexts/ThemeProvider'; // Import useTheme

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Hero/>
    </div>
  );
}
