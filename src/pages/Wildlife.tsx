const Wildlife = () => {
  const wildlife = [
    {
      category: "Flora",
      items: [
        {
          name: "Mountain Wildflowers",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
          description: "Vibrant alpine flowers that bloom in spring",
        },
        {
          name: "Ancient Pine Forest",
          image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
          description: "Towering pines that have stood for centuries",
        },
      ],
    },
    {
      category: "Fauna",
      items: [
        {
          name: "Mountain Deer",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          description: "Graceful creatures of the forest",
        },
        {
          name: "Forest Birds",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
          description: "Diverse bird species in their natural habitat",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-forest mb-12">Flora & Fauna</h1>
        
        {wildlife.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-earth mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-forest mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wildlife;