import NavLink from './helper/NavLink';
import Image from 'next/image';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import youtube from '../images/youtube.svg';

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
    {
        title: "Resume",
        href: "/"
    }
]

const NavBar = () => {
    return(
      <aside className="md:text-right">
        <div className="">
            <ul className="py-5">
                {navLinks.map((link, index) => (
                    <li key={link}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
                }
            </ul>
            <div className="flex flex-row justify-evenly">
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
                    />
                </a>
                <a href="https://www.youtube.com/@madebymattheus" target="_blank">
                    <Image 
                        src={youtube} 
                        alt="Youtube Logo"
                        width={20}
                        height={20}
                    />
                </a>
            </div>
        </div>
      </aside>  
    );
};

export default NavBar;

