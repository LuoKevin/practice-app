import React, { useState } from "react";

// 🔷 Define props interface
interface ToggleCardProps {
    title: string;
    message: string;
    details: string;
    initiallyExpanded?: boolean;
}

const ToggleCard: React.FC<ToggleCardProps> = ({
                                                   title,
                                                   message,
                                                   details,
                                                   initiallyExpanded = false,
                                               }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);

    const toggleDetails = () => {
        setIsExpanded((prev) => !prev);
    };

    const buttonLabel = isExpanded ? "Hide Details" : "Show Details";

    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <h2>{title}</h2>
            <p>{message}</p>
            <button onClick={toggleDetails}>{buttonLabel}</button>
            {isExpanded && <p style={{ marginTop: "1rem" }}>{details}</p>}
        </div>
    );
};

export default ToggleCard;
