export default function Search({ search, setSearch }) {
  return (
    <section className="">
      <input
        type="text"
        className="text-base text-gray-500 bg-gray-100 font-medium rounded-xl px-4 py-2 w-full focus:outline-none focus:shadow-outline"
        placeholder="Search For products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}
