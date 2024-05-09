import Link from 'next/link';

export default function Home() {
    return (
        <>
            <main>
                <div className='w-full h-20 bg-slate-100 text-black font-semibold text-2xl flex justify-center items-center '>
                    <h2>SECURED AUTH SYSTEM</h2>
                </div>
                <div className='w-full h-20 bg-slate-100 text-white font-semibold text-xl flex justify-center items-center  gap-8'>
                <Link href={'/login'}><button className=' rounded-lg px-4 py-1 bg-cyan-500 hover:bg-cyan-600'>Login</button></Link>
                <Link href={'/signup'}><button className='rounded-lg px-4 py-1 bg-cyan-500 hover:bg-cyan-600'>Signup</button></Link>
                </div>
            </main>
        </>
    );
}
