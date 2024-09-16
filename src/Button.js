import React, {useContext} from "react";
import { ThemeContext } from "./context";
const Button = (props) => {
    const [theme, setTheme] = useContext(ThemeContext)
    const {children, clickHandler} = props;
     const handleFn = () => {
        clickHandler?.();
        setTheme((prev) => (prev ==='dark' ? 'light' : 'dark'))
     }

    return <button onClick={handleFn}>{children} {theme}</button>;
}

export default Button; 