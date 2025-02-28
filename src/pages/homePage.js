import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WhoAmI from "../components/whoAmI";
import ShowReels from "../components/ShowReels";
import Rewards from "../components/rewards";
import Contact from "../components/contact";
import Hero from "../components/Hero";
const HomePage = () => {
    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const id = params.get("id");
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (_jsxs("div", { children: [_jsx("div", { id: "hero", style: { margin: "40px" }, children: _jsx(Hero, {}) }), _jsx("div", { id: "who-am-i", style: { margin: "40px" }, children: _jsx(WhoAmI, {}) }), _jsx("div", { id: "showreels", style: { margin: "40px" }, children: _jsx(ShowReels, {}) }), _jsx("div", { id: "rewards", style: { margin: "40px" }, children: _jsx(Rewards, {}) }), _jsx("div", { id: "contact", style: { margin: "40px" }, children: _jsx(Contact, {}) })] }));
};
export default HomePage;
