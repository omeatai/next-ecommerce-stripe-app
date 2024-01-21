import { notFound } from "next/navigation";

export default function Products({ params }) {
  if (parseInt(params.productId) > 10) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold">
        Details about Product {params.productId}
      </h1>
    </div>
  );
}
