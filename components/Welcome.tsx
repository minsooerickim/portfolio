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
                <div className='justify-center flex items-center'>
                    <Avatar alt="Profile Picture" src={session.user!.image!} />
                    
                    {/* <p className='pl-2'>Welcome, {session.user!.name ?? session.user!.email}</p> */}
                    <p className='pl-2'>Welcome {(session.user.firstname !== 'undefined') ? session.user.firstname : session.user.name } </p>
                </div>
            }
        </div>
    )
}