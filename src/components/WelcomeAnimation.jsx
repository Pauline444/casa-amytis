import { useEffect, useState } from "react";
import "../App.css";

export default function WelcomeAnimation() {
    const [welcomes, setWelcomes] = useState([]);

    const greetings = [
        { text: "Välkommen", className: "swedish" },
        { text: "Welcome", className: "english" },
        { text: "Bienvenidos", className: "spanish" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const randomGreeting =
                greetings[Math.floor(Math.random() * greetings.length)];

            const newWelcome = {
                id,
                text: randomGreeting,
                x: Math.random() * 80 + 10,
                y: Math.random() * 70 + 10,
            };

            setWelcomes((prev) => [...prev, newWelcome]);

            setTimeout(() => {
                setWelcomes((prev) => prev.filter((w) => w.id !== id));
            }, 5800);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {welcomes.map((w) => (
                <span
                    key={w.id}
                    className={`position-absolute w-text fade-text ${w.text.className}`}
                    style={{
                        left: `${w.x}%`,
                        top: `${w.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {w.text.text}
                </span>
            ))}
        </>
    );
}
