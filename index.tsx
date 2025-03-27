import SkeletonCard from "./SkeletonCard";
import "./index.css";

const index = () => {
  return (
    <>
      <SkeletonCard
        count={8}
        height={"250px"}
        width={"250px"}
      />
    </>
  );
}

export default index;
