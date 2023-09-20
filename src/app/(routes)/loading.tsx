import NextImage from "@/components/NextImage";

export default function Default() {
  return (
    <div className="flex w-full justify-center">
      <NextImage
        src={"/images/loading.gif"}
        height={370}
        width={300}
        alt="loading"
      />
    </div>
  );
}
