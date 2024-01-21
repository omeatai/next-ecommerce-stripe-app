export default function Home() {
  return (
    <div className="p-6">
      <div>
        <h2 className="text-2xl font-medium text-gray-600">Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-purple-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt="iphone" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>
            <p className="mt-2 text-sm leading-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              consequuntur doloreore!
            </p>
            <div className="mt-2 flex items-center">
              <div className="text-2xl font-bold grow">$1200</div>
              <button className="bg-violet-400 text-white py-1 px-3 rounded-xl hover:bg-violet-500 hover:scale-125">
                +add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
