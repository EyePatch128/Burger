import React from 'react';


// Icons
import PhoneIcon from "../../public/icons/phone.svg";
import LocationIcon from "../../public/icons/location.svg";
import BagIcon from "../../public/icons/bag.svg";

import {NavList, NavLink, NavLinkInfo, OrderButton} from "./navbar-styles";


function NavigationList (props){

    return(
        <NavList>
                { 
                    props.isMobile &&
                    <React.Fragment>                                                
                        <NavLink>HOME</NavLink>
                        <NavLink>MENU</NavLink>
                        <NavLink>CONTACT US</NavLink>

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
                        <NavLink>HOME</NavLink>
                        <NavLink>MENU</NavLink>
                        <NavLink>CONTACT US</NavLink>

                        <OrderButton>
                            <BagIcon />
                            2
                        </OrderButton>
                    </React.Fragment>
                }
            </NavList>
    );
}

export default NavigationList;


