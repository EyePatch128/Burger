import React, {useContext} from 'react';
import Link from "next/link";

// Context
import Context from "../../context";

// Icons
import PhoneIcon from "../../public/icons/phone.svg";
import LocationIcon from "../../public/icons/location.svg";
import BagIcon from "../../public/icons/bag.svg";

import {NavList, NavLink, NavLinkInfo, OrderButton} from "./navbar-styles";


function NavigationList (props){
    const context  = useContext(Context);
    const [orders, addOrder] = context.cart;
    const [showCart, setShowCart] = context.showCart;
    const ordersNum = orders.length;
    
    return(
        <NavList>

            <NavLink>
                <Link href="/">HOME</Link>
            </NavLink>

            <NavLink>
                <Link href="/menu">MENU</Link>
            </NavLink>

            <NavLink>
                <Link href="/contact">CONTACT US</Link>
            </NavLink>

                { 
                    props.isMobile &&
                    <React.Fragment>                                                
                        <div className="info">
                            <NavLink>
                                <NavLinkInfo>
                                    <div className="icon phone-icon">
                                        <PhoneIcon />
                                    </div>
                                    <span>+555-555-555</span>
                                </NavLinkInfo>
                            </NavLink>
                            <NavLink>
                                <NavLinkInfo>
                                    <div className="icon location-icon">
                                        <LocationIcon />
                                    </div>
                                    <span>8 Street, City, 99004</span>
                                </NavLinkInfo>
                            </NavLink>
                        </div>
                    </React.Fragment>
                } 

                {
                    !props.isMobile &&
                    <React.Fragment>
                        <OrderButton onClick={(e)=>setShowCart(true)}>
                            <BagIcon />
                            {ordersNum}
                        </OrderButton>
                    </React.Fragment>
                }
            </NavList>
    );
}

export default NavigationList;


