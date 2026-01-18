export default function Card({ title, description, image}) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">
          {description}
        </p>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}
