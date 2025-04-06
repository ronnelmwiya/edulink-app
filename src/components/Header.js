'use client';
import Navigation from './Navigation.js';
import Notifications from './Notifications.js';

const Header = () => {
    return (
        <div>
            <Header>
                <Navigation />
                <img src="logo.png" alt="Logo" />
                <Notifications />
                <input />
            </Header>
        </div>
    )
}

export default Header;