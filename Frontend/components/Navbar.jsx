import { useState } from "react";
import { House, Info, HandCoins, LogIn, User } from 'lucide-react';
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [authorization, setAuthorization] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleLogout = () => {
        setAuthorization(false);
    }

    const handleSignUp = () => {

    }
    return (
        <>
            <div className={`navbar-container ${open ? 'open' : ''}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className="navbar-header">
                    <div className="navbar-logo">
                        <img src="./assets/logo.png" alt="LedgeIT" />
                    </div>
                    {open && <>
                        <div className="navbar-logo-label">
                            <h3>LedgeIT</h3>
                            <p>Conversational Finance, Autonomous Tracking.</p>
                        </div>
                    </>}
                </div>


                <div className="navbar-links">
                    <div className={`navbar-link nav-dashboard ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                        <House />
                        {open && <>
                            <div className="navbar-label">
                                <p>My Dashboard</p>
                            </div>
                        </>}
                    </div>

                    <div className={`navbar-link nav-about ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
                        <Info />
                        {open && <>
                            <div className="about-label">
                                <p>About</p>
                            </div>
                        </>}
                    </div>

                    <div className={`navbar-link nav-pricing ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>
                        <HandCoins />
                        {open && <>
                            <div className="pricing-label">
                                <p>Pricing</p>
                            </div>
                        </>}
                    </div>
                </div>


                <div className="navbar-footer">
                    {authorization ?
                        <>
                            <div className="navbar-user-logo">
                                <User />
                            </div>
                            {open && (
                                <div className="navbar-user-details">
                                    <p className="navbar-user-info">Welcome 'USER'</p>
                                    <div className="logout-section">
                                        <button className="log-out-button" onClick={() => handleLogout()}>Logout</button>
                                    </div>
                                </div>
                            )}
                        </>
                        :
                        <>
                            <div className="navbar-signup-logo">
                                <LogIn />
                            </div>
                            {open && <>
                                <button className="navbar-signup-button" onClick={() => handleSignUp()}>SignUp</button>
                            </>}
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default Navbar;