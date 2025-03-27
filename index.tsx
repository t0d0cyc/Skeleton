import SkeletonCard from "./SkeletonCard";

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
