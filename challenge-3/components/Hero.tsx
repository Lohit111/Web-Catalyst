export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center text-center mt-20 md:mt-32 px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Welcome to WorkConnect</h1>
            <p className="text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl md:max-w-2xl">Your gateway to a world of freelance opportunities. Connect, collaborate, and create with professionals from around the globe.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="/join" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full sm:w-auto">Get Started</a>
                <a href="/explore" className="bg-gray-300 text-gray-900 px-6 py-3 rounded hover:bg-gray-400 transition w-full sm:w-auto">Explore Opportunities</a>
            </div>
        </div>
    )
}