import NextImage from "@/components/NextImage";
import UnoptimizedNextImage from "@/components/UnoptimizedNextImage";

export default function Default() {
  return (
    <div className="flex w-full justify-center">
      <UnoptimizedNextImage
        src={"/images/loading.gif"}
        height={370}
        width={300}
        alt="loading"
      />
    </div>
  );
}
