import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Nature's Beauty</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore the wonders of our natural world and join us in preserving it for future generations
          </p>
          <Link
            to="/explore"
            className="inline-block bg-forest hover:bg-forest-light text-cream px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-forest">Featured Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ancient Forests",
              image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
              description: "Walk among giants in our pristine old-growth forests",
            },
            {
              title: "Mountain Peaks",
              image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
              description: "Experience breathtaking views from majestic summits",
            },
            {
              title: "River Valleys",
              image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
              description: "Follow the flow of crystal-clear mountain streams",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-cream-dark">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;