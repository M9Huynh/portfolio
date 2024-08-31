/* eslint-disable @next/next/no-img-element */
import NavLink from './helper/NavLink';
import Image from 'next/image';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import youtube from '../images/youtube.svg';
import headshot from '../images/headshot.jpg'

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
    },
]

const NavBar = () => {
    return(
      <aside className="md:text-right">
        <Image
            src={headshot}
            alt="headshot"
            width={150}
            className="rounded-full justify-center"
        />
        <div className="text-center">
            <ul className="py-3 text-lg">
                {navLinks.map((link, index) => (
                    <li key={link} className="my-3">
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
                }
                <li>
                    <a href="Matthew_Resume.pdf" target="_blank">
                        Resume
                    </a>
                </li>
            </ul>
            <div className="flex flex-row justify-evenly " >
                <a href="https://github.com/M9Huynh/" target="_blank">
                    <Image 
                        src={github} 
                        alt="GitHub Logo"
                        width={20}
                        height={20}
                    />
                </a>
                <a href="https://www.linkedin.com/in/matthew-huynh/" target="_blank">
                    <Image 
                        src={linkedin} 
                        alt="Linkedin Logo"
                        width={20}
                        height={20}
                        className="fill-blue-500"
                    />
                </a>
                <a href="https://www.youtube.com/@madebymattheus" target="_blank">
                    <Image 
                        src={youtube} 
                        alt="Youtube Logo"
                        width={20}
                        height={20}
                        className="fill-blue-500"
                    />
                </a>
            </div>
        </div>
      </aside>  
    );
};

export default NavBar;

