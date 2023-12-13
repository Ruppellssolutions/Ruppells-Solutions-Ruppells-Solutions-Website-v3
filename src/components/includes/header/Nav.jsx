import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = ({ type = "ROUTES", onClose = () => {} }) => {
    // type = "ROUTES" | "SECTIONS"
    const navs = [
        {
            title: "Home",
            link: "home",
            type: "SECTIONS",
        },
        {
            title: "Services",
            link: "services",
            type: "SECTIONS",
        },
        {
            title: "Clients",
            link: "clients",
            type: "SECTIONS",
        },
        {
            title: "About Us",
            link: "/about-us",
            type: "SECTIONS",
            isLink: true,
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            type: "SECTIONS",
            isLink: true,
        },
        {
            title: "Home",
            link: "/",
            type: "ROUTES",
        },
        {
            title: "About Us",
            link: "/about-us",
            type: "ROUTES",
        },
        {
            title: "Contact",
            link: "/contact-us",
            type: "ROUTES",
        },
    ];

    return navs
        .filter((nav) => nav.type === type)
        .map((nav, i) => (
            <li key={i}>
                {nav.type === "SECTIONS" && !nav?.isLink ? (
                    <Link
                        spy
                        smooth
                        duration={300}
                        to={nav.link}
                        activeClass="active"
                        onClick={onClose}
                    >
                        {nav.title}
                    </Link>
                ) : (
                    <NavLink
                        to={nav.link}
                        onClick={onClose}
                        className={({ isActive }) => isActive && "active"}
                    >
                        {nav.title}
                    </NavLink>
                )}
            </li>
        ));
};

export default Nav;
