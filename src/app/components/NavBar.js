import Link from 'next/link';
import react from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        title: "About",
        href: "#about"
        
    },
    {
        title: "Experience",
        href: "#experience"
    },
    {
        title: "Projects",
        href: "#projects"
    }
]

const NavBar = () => {
    return(
      <aside className='w-[270px] max-w-xs h-screen fixed left-0 top-0 border-r'>
        <div className="px-3 py-4">
            <Link href="/" className="text-5xl text-black font-thin">Matthew</Link>
            <ul >
                {navLinks.map((link, index) => (
                    <li key={link}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
                }
            </ul>
        </div>
      </aside>  
    );
};

export default NavBar;

