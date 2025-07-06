import './index.css';

function App() {
  return (
    <div className="font-sans text-gray-800 w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold text-blue-600">Crown Caregivers Inc.</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-50 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Crown Caregivers Inc.</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
         Caring with Dignity. Supporting with Heart.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          
    Based in Las Vegas, Crown Caregivers Inc. is a licensed personal care agency dedicated to preserving independence and dignity. 
    Our mission is to provide safe, compassionate support through personalized, in-home assistance.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-10 bg-gray-50">
        <h3 className="text-3xl text-center font-semibold mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Personal Care</h4>
            <p className="text-gray-600">Assistance with hygiene, grooming, mobility, and daily routines from compassionate, trained caregivers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Housemaker services</h4>
            <p className="text-gray-600">Support with light housekeeping, meal preparation, and maintaining a safe, comfortable home environment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Companionship</h4>
            <p className="text-gray-600">Engaging conversation, emotional support, and companionship to combat loneliness and <br/>promote well-being.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-6">Let’s talk about how we can help you.</p>
        <a href="mailto:contact@company.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Send Email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm ">
        © Crown Caregivers Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
