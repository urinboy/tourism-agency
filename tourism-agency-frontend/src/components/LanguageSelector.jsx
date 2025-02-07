import { useState } from "react";

const LanguageSelector = () => {
    const [language, setLanguage] = useState("uz");

    const handleChange = (e) => {
        setLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
    };

    return (
        <select value={language} onChange={handleChange} className="border p-2 rounded">
            <option value="uz">O‘zbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
        </select>
    );
};

export default LanguageSelector;
