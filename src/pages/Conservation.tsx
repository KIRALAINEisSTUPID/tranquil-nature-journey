const Conservation = () => {
  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-forest mb-12">Conservation Efforts</h1>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-earth mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We are dedicated to preserving and protecting our natural heritage for future generations.
              Through education, research, and community engagement, we work tirelessly to ensure the
              sustainability of our ecosystems.
            </p>
            
            <h3 className="text-xl font-bold text-earth mb-3">Current Initiatives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Habitat restoration projects</li>
              <li>Wildlife monitoring programs</li>
              <li>Environmental education workshops</li>
              <li>Community clean-up events</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-forest mb-3">Get Involved</h3>
              <p className="text-gray-700 mb-4">
                Join our conservation efforts and make a difference. Here's how you can help:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                  Volunteer for conservation projects
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                  Support local wildlife initiatives
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                  Participate in educational programs
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                  Spread awareness in your community
                </li>
              </ul>
            </div>
            
            <div className="bg-forest text-cream rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Conservation Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Habitat Restored</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-forest-light rounded-full h-2">
                    <div className="bg-cream h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Species Protected</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-forest-light rounded-full h-2">
                    <div className="bg-cream h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conservation;