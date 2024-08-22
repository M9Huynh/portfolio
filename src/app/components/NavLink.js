import Link from 'next/link';

const NavLink = ({href, title}) => {
    return(
        <Link 
            href={href}
            className="hover:text-blue-700"
        >
            {title}
        </Link>
    );
};

export default NavLink;