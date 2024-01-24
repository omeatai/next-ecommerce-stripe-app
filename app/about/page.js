import categories from "../../data/categories.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const bg_color = {
    gray: "bg-gray-100 hover:bg-gray-200",
    blue: "bg-blue-100 hover:bg-blue-200",
    rose: "bg-rose-100 hover:bg-rose-200",
  };

  return (
    <>
      <div className="p-8">
        <Navbar />
        <div className="max-w-4xl text-justify my-4">
          <h1 className="text-2xl font-bold my-4">About Our Products</h1>
          <h3>
            Welcome to EShop TechWorld, your ultimate destination for
            cutting-edge technology and electronic wonders! At TechWorld, we
            take pride in offering a curated selection of premium phones,
            laptops, audio devices, and gaming devices that redefine the
            boundaries of innovation. Our passion for delivering top-notch
            gadgets is reflected in our commitment to providing our customers
            with the latest and greatest in the world of technology.
          </h3>
        </div>
        <div className="my-8 flex flex-wrap justify-center items-center gap-4">
          {categories.selection.map((category) => (
            <div key={category.id}>
              <h2 className="text-lg font-bold mt-4 text-center">
                {category.name}
              </h2>
              <div
                className={`w-72 ${
                  bg_color[category.bgColor]
                } p-12 rounded-xl mt-4 cursor-pointer`}
              >
                <img src={`/products/${category.img}`} alt="audio"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
