import { useState } from 'react';

function ToggleButton() {
    const [state, setState] = useState("unpressed");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/toggle_button', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ state }),
            });
            const data = await response.json();

            setState(data.state);
            setMessage(data.message);
            setButtonText(data.button_text);
        } catch (error) {
            console.error("Error toggling button:", error);
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <button className="btn btn-primary btn-sm" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
}

export default ToggleButton;
