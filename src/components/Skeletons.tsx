import { Skeleton } from "@/components/ui/skeleton";

export const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-full mt-3 mb-16">
        <Skeleton className="w-[83px] h-[40px] rounded-lg" />
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-8">
          <Skeleton className="w-[384px] h-[40px] rounded-lg" />
          <Skeleton className="w-[384px] h-[40px] rounded-lg" />
        </div>
        <Skeleton className="h-40 w-40 rounded-xl" />
      </div>
    </div>
  );
};
