import Aurora from "./Aurora";
import Profile from "./Profile";

function Home() {
  return (
    <div className="w-full h-full absolute text-white overflow-hidden">
      <div className="absolute w-full h-full">
        <Aurora colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]} speed={0.8} />
      </div>
      <Profile />
    </div>
  );
}

export default Home;
