function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p>
                <strong>Address:</strong><br />
                123 Business Street<br />
                City, State 12345
              </p>
              
              <p>
                <strong>Phone:</strong><br />
                (123) 456-7890
              </p>
              
              <p>
                <strong>Email:</strong><br />
                info@example.com
              </p>
              
              <p>
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;