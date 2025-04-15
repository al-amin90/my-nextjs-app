import Image from "next/image";
import nextImage from "@/assets/next.png";

const page = () => {
  return (
    <div className="text-center">
      <h1>Regular image</h1>
      <img
        className="mx-auto"
        width={500}
        height={500}
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Image"
      />

      <h1>Regular image</h1>
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Image"
        alt="next image"
      />

      <h1>Local image</h1>
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src={nextImage}
        alt="next image"
      />
    </div>
  );
};

export default page;
