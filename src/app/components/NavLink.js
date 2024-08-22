import Link from 'next/link';

const NavLink = ({href, title}) => {
    return(
        <Link 
            href={href}
            className="block py-2 px-5"
        >
            {title}
        </Link>
    );
};

export default NavLink;