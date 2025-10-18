import amytisLogo from '../assets/Casa-amytis-logo.png'

export default function Header() {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={amytisLogo} className="logo react" alt="React logo" />
                </a>
                <h1 className="display-2 mb-3 text-uppercase">Under Construction</h1>
            </div>
        </>
    );
}
