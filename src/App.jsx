import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Status from "./components/Status";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(45deg, #1a1a1a 0%, #003366 100%),
        repeating-linear-gradient(
          45deg,
          rgba(0, 255, 255, 0.1) 0px,
          rgba(0, 255, 255, 0.1) 20px,
          rgba(0, 255, 0, 0.1) 20px,
          rgba(0, 255, 0, 0.1) 40px
        ),
        radial-gradient(
          circle at 50% 50%,
          rgba(32, 196, 232, 0.3) 0%,
          rgba(76, 201, 240, 0.1) 100%
        )`,
          backgroundBlendMode: "normal, overlay, overlay",
          animation: "aurora 8s linear infinite",
        }}
      />
      <Header />
      {/* <Status /> */}
      {/* <Languages /> */}
      <Word />
      {/* <Keyboard /> */}
    </>
  );
}

export default App;
