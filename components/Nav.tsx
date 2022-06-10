import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';
export function Nav() {
    const { data: session } = useSession();
    const handleSignin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        signOut()
    }
    return(
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
            <div className="flex-1 flex justify-between items-center">
                <a href="#">
                    <h1>Minsoo Kim</h1>
                </a>
            </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"><Link href="/">Home</Link></li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"><Link href="/Projects">Projects</Link></li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"><Link href="/Experience">Experience</Link></li>
                    {session && <a href="#" onClick={handleSignout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</a>  }
                    {!session && <a href="#" onClick={handleSignin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</a>  }
                </ul>
            </nav>
            <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            {/* <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz"> */}
            </a>
        </div>

        </header>

        // <nav className='flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain'>
        //     {/* <div className="container flex flex-wrap justify-between items-center mx-auto"> */}
        //         <a href="/" className="flex items-center">
        //             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Minsoo Kim</span>
        //         </a>
        //         <div className="flex md:order-2">
        //             {session && <a href="#" onClick={handleSignout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</a>  }
        //             {!session && <a href="#" onClick={handleSignin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</a>  }
        //             <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule={"evenodd"}></path></svg>
        //             <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule={"evenodd"}></path></svg>
        //             </button>
        //         </div>
        //         <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
        //             <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        //                 <li>
        //                     <Link href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/Projects" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/Experience" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     {/* </div> */}
        // </nav>
    )
}