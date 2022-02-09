import React, { useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavLinksContainer,
    NavLink,
    Logo,
    OpenLinksButton,
    NavbarExtendedContainer,
    NavLinkExtended
} from './Styles/Navbar.Styles';

const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);


    return (
        <>
            <NavbarContainer extendNavbar={extendNavbar}>
                <NavbarInnerContainer>

                    <LeftContainer>
                        <NavLinksContainer>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                            <NavLink to="/about">About Us</NavLink>

                            <OpenLinksButton onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                            >
                                {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
                            </OpenLinksButton>

                        </NavLinksContainer>
                    </LeftContainer>
                    <RightContainer>
                        <Logo to="/"><b>SAQIB ZAMAN</b></Logo>
                    </RightContainer>
                </NavbarInnerContainer>

                {extendNavbar && (
                    <NavbarExtendedContainer>

                        <NavLinkExtended to="/">Home</NavLinkExtended>
                        <NavLinkExtended to="/products">Products</NavLinkExtended>
                        <NavLinkExtended to="/services">Services</NavLinkExtended>
                        <NavLinkExtended to="/contact">Contact Us</NavLinkExtended>
                        <NavLinkExtended to="/about">About Us</NavLinkExtended>

                    </NavbarExtendedContainer>
                )}
            </NavbarContainer>
        </>
    );
};

export default Navbar;
