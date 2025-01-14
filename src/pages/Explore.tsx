const Explore = () => {
  const locations = [
    {
      name: "Mystic Valley",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      description: "A hidden gem nestled between ancient mountains",
      difficulty: "Moderate",
      distance: "5.2 miles",
    },
    {
      name: "Eagle's Peak",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Reach new heights with panoramic mountain views",
      difficulty: "Challenging",
      distance: "7.8 miles",
    },
    {
      name: "Whispering Woods",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      description: "Walk through centuries-old forest trails",
      difficulty: "Easy",
      distance: "3.1 miles",
    },
    {
      name: "Crystal River",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Follow the pristine waters of mountain streams",
      difficulty: "Moderate",
      distance: "4.5 miles",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-forest mb-8">Explore Natural Wonders</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-forest mb-2">{location.name}</h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-forest-light">
                    Difficulty: {location.difficulty}
                  </span>
                  <span className="text-sm text-forest-light">
                    Distance: {location.distance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;