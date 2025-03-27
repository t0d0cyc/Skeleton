import {Skeleton} from '@walmart-web/livingdesign-components';

interface SkeletonCardProps {
  count: number;
  height: string | number;  
  width: string | number;   
}

const SkeletonCard = ({
  count,
  height,
  width,
}: SkeletonCardProps) => {

  // const styleObj = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  //   gap: "40px", 
  //   justifyContent: "center", 
  //   alignItems: "center",
  // }
  const styleObj = { display: 'flex', gap: '70px', flexWrap: 'wrap', justifyContent: 'center'}

  return (
    <>
      <div style = {styleObj}>
        {count !== 0 && Array.from({ length: count }).map((_, index) => (
          <Skeleton
            key={index}
            height={height}
            width={width}
            variant="rounded"
            UNSAFE_style={{backgroundColor: "#d2d2d2"}}
          />
        ))}
      </div>
    </>
  );
};

export default SkeletonCard;