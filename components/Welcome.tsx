import { signIn, useSession } from "next-auth/react";
import Avatar from '@mui/material/Avatar';
import { motion } from "framer-motion";

export default function Welcome() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const handleSignin = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      signIn()
    }
    return (
        <div className='justify-center flex'>
            {loading && <div>Loading...</div>}
            {
            session &&
                <div className='justify-center flex'>
                    <Avatar alt="Profile Picture" src={session.user!.image!} />
                    
                    {/* <p className='pl-2'>Welcome, {session.user!.name ?? session.user!.email}</p> */}
                    <p className='pl-2'>Welcome {(session.user.name !== 'undefined') ? session.user.name : session.user.email } </p>
                </div>
            }
            {
            !session &&
            <>
                <p>
                Sign In to <span className="text-text">Interact!</span>
                </p>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignin} className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer">Sign in</motion.a>
            </>
            }
        </div>
    )
}