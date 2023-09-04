import Link from "next/link";
import { Product } from "@/types/types";
import { DisplayImage } from "../DisplayImage";
import { getBestsellers } from "@/firebase/functions";

function ThreeItemGridItem({
  item,
  size,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item?.id}`}
      >
        <DisplayImage
          alt={item?.name}
          src={item?.images[0]}
          className="w-full h-full hover:border-brand-primary-100 border-neutral-200"
          interactive
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item?.name,
            amount: "10",
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  const homepageItems = await getBestsellers();

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 mt-4">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
