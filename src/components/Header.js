'use client';
import Navigation from './Navigation.js';
import Notifications from './Notifications.js';

const Header = () => {
    return (
        <div>
            <Navigation />
            <Notifications />
            <input />
        </div>
    )
}

export default Header;