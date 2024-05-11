import React, {useState} from 'react';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="user-menu" onClick={toggleMenu}>
            <img src="/user.png" alt="User Avatar"/>
            {isOpen && (
                <ul className="menu">
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            )}
        </div>
    );
}

export default UserMenu;