function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, we've been at the forefront of innovation and excellence
              in our industry. Our journey began with a simple mission: to provide
              outstanding service to our clients.
            </p>
            <p>
              Today, we continue to grow and evolve, always staying true to our core
              values of integrity, innovation, and customer satisfaction.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li>
                <strong>Integrity</strong> - We conduct our business with the highest
                ethical standards
              </li>
              <li>
                <strong>Innovation</strong> - We constantly seek new ways to improve
                and evolve
              </li>
              <li>
                <strong>Excellence</strong> - We strive for excellence in everything
                we do
              </li>
              <li>
                <strong>Customer Focus</strong> - Our clients' success is our success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;