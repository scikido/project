function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Company</h1>
          <p className="text-xl mb-8">Delivering excellence in every service we provide</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Quality Service</h3>
              <p>We provide top-notch service to all our clients.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p>Our team consists of industry experts.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p>Round-the-clock support for all your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;