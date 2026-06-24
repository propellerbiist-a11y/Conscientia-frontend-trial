import Hourglass from "../components/Hourglass";
import FloatingCards from "../components/FloatingCards";

export default function Home() {
  return (
    <main className="hero-container">
      <Hourglass />

      <FloatingCards
        radius={320}
        items={[
          "HOME",
          "EVENTS",
          "WORKSHOPS",
          "ACCOMMODATION",
          "CONTACT US",
        ]}
      />

      <FloatingCards
        radius={220}
        items={[
          "ROBOWARS",
          "DRONETRIX",
          "PATHFINDER",
          "CANSAT",
          "ROCKETRY",
          "ROBOTICS",
        ]}
      />
    </main>
  );
}