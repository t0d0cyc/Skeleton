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

  return (
    <>
      <div className = "skeleton">
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
