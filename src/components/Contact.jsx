import { FaFacebook, FaInstagram } from "react-icons/fa";
import CopyEmail from "./CopyToClipboard";

export default function Contact() {
    return (
        <div className="mb-4">
            <p className="lead contact">
                Kontakta oss:{" "}
                <a className="text-decoration-underline text-dark">
                    <CopyEmail />
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
