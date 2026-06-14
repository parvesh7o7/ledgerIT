import { useState, useEffect, useRef } from "react";
import { House, Info, HandCoins, LogIn, User } from 'lucide-react';
import "./Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const googleBtnRef = useRef(null);

    useEffect(() => {
        // Initialize Google Sign-In once on mount
        if (window.google) {
            initializeGoogle();
        } else {
            window.addEventListener("load", initializeGoogle);
            return () => window.removeEventListener("load", initializeGoogle);
        }
    }, []);

    const initializeGoogle = () => {
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleGoogleResponse,
        });

        // Render a hidden Google button — this avoids the One Tap cooldown issue
        if (googleBtnRef.current) {
            google.accounts.id.renderButton(googleBtnRef.current, {
                type: "standard",
                size: "large",
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    }

    const handleSignUp = () => {
        // Programmatically click the hidden Google button
        const googleBtn = googleBtnRef.current?.querySelector("div[role='button']");
        if (googleBtn) {
            googleBtn.click();
        }
    };

    const handleGoogleResponse = async (response) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken: response.credential }),
            });
            const data = await res.json();
            if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <>
            {/* Hidden Google Sign-In button — clicked programmatically by our custom button */}
            <div ref={googleBtnRef} id="google-signin-btn" style={{ position: "absolute", opacity: 0, pointerEvents: "none", top: "-9999px" }} />

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
                    {isLoggedIn ?
                        <>
                            <div className="navbar-user-logo">
                                <User />
                            </div>
                            {open && (
                                <div className="navbar-user-details">
                                    <p className="navbar-user-info">Welcome {user.name || 'User'}</p>
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