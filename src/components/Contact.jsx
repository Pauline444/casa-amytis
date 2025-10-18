import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="mb-4">
            <p className="lead contact">
                Kontakta oss:{" "}
                <a href="mailto:salud@casaamytis.com" className="text-decoration-underline text-dark">
                    salud@casaamytis.com
                </a>
            </p>
            <div className="d-flex justify-content-center gap-4 fs-3">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                >
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}
