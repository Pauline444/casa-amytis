import Header from "./components/Header";
import Contact from "./components/Contact";
import WelcomeAnimation from "./components/WelcomeAnimation";

export default function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100 background text-center position-relative overflow-hidden">
        <Header />
        <Contact />
        <WelcomeAnimation />
      </div>
    </>
  );
}
