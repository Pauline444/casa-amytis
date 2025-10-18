import React from "react";

export default function CopyEmail() {
    const email = "salud@casaamytis.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert(`E-postadressen ${email} har kopierats!`);
            })
            .catch((err) => {
                console.error("Kunde inte kopiera:", err);
            });
    };

    return (
        <span
            onClick={copyToClipboard}
            style={{ cursor: "pointer", textDecoration: "underline", color: "black" }}
            title="Klicka för att kopiera e-post"
        >
            {email}
        </span>
    );
}
