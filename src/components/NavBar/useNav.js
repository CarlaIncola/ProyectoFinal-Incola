import { useState } from "react";

const useNav = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return { isMenuOpen, toggleMenu }

}

export default useNav