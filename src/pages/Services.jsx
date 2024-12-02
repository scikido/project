function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Products & Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Service 1</h3>
            <p className="mb-4">
              Comprehensive solution for your business needs with cutting-edge
              technology.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Service 2</h3>
            <p className="mb-4">
              Professional consulting services to help your business grow and
              succeed.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Service 3</h3>
            <p className="mb-4">
              Custom solutions tailored to meet your specific business
              requirements.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;