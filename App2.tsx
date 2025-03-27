import SkeletonCard2 from "./components/SkeletonCard2";
import "./App.css";

const App2 = () => {
  return (
    <>
      <SkeletonCard2
        count={8}
        height={"250px"}
        width={"250px"}
      />
    </>
  );
}

export default App2;