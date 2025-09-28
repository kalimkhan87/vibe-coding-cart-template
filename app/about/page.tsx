import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About KidsSport</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about providing safe, fun, and high-quality bikes and scooters 
          for children of all ages. Our mission is to help kids stay active and healthy 
          while having the time of their lives!
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, KidsSport began with a simple vision: to make outdoor play 
              accessible and safe for every child. We noticed that many parents struggled 
              to find quality bikes and scooters that were both safe and fun for their kids.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we're proud to be the go-to destination for parents looking for the 
              perfect ride for their little ones. From balance bikes for toddlers to 
              advanced scooters for teenagers, we have something for every age and skill level.
            </p>
            <p className="text-gray-600">
              Our team of experts carefully selects each product, ensuring it meets our 
              high standards for safety, durability, and fun factor.
            </p>
          </div>
          <div>
            <Image 
              src="https://picsum.photos/600/400/?kids,playing,outdoor" 
              alt="Kids playing with bikes and scooters" 
              width={600} 
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16 bg-blue-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety First</h3>
            <p className="text-gray-600">
              Every product we sell meets the highest safety standards. We test and 
              verify each item to ensure your child's safety is never compromised.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">😊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fun & Joy</h3>
            <p className="text-gray-600">
              We believe that outdoor play should be fun! Our products are designed 
              to bring joy and excitement to every ride, creating lasting memories.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality & Durability</h3>
            <p className="text-gray-600">
              We only sell products that are built to last. Our bikes and scooters 
              are made from high-quality materials that can withstand years of play.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image 
              src="https://picsum.photos/300/300/?person,manager" 
              alt="Sarah Johnson - Founder" 
              width={300} 
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-blue-600 font-semibold mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              A mother of three and former physical education teacher, Sarah founded 
              KidsSport to help parents find safe, fun equipment for their children.
            </p>
          </div>
          <div className="text-center">
            <Image 
              src="https://picsum.photos/300/300/?person,engineer" 
              alt="Mike Chen - Product Manager" 
              width={300} 
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
            <p className="text-blue-600 font-semibold mb-2">Product Manager</p>
            <p className="text-gray-600 text-sm">
              With 10 years of experience in children's sports equipment, Mike ensures 
              every product meets our high standards for safety and quality.
            </p>
          </div>
          <div className="text-center">
            <Image 
              src="https://picsum.photos/300/300/?person,consultant" 
              alt="Emily Davis - Customer Success" 
              width={300} 
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Davis</h3>
            <p className="text-blue-600 font-semibold mb-2">Customer Success Manager</p>
            <p className="text-gray-600 text-sm">
              Emily loves helping parents find the perfect bike or scooter for their 
              child. She's always available to answer questions and provide guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-12 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our products? Need help choosing the right bike or scooter 
            for your child? We're here to help!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">1-800-KIDSPORT</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@kidssport.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
