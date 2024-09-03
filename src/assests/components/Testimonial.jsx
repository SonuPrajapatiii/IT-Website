import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovations",
    testimonial: "The team was exceptional in delivering our project on time with outstanding quality and dedication. Their innovative solutions exceeded our expectations.",
    image: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg"
  },
  {
    name: "Robert Downey Jr.",
    role: "Product Manager, FutureWorks",
    testimonial: "Working with this team was a fantastic experience. Their expertise and professionalism shone through in every step of our collaboration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIuj3hqnCzbJ_f0fAgfbArcQwxm7shNJpAQ&s"
  },
  {
    name: "Tom Hiddleston",
    role: "CTO, Creative Minds",
    testimonial: "Their attention to detail and dedication to client satisfaction is unmatched. We are incredibly satisfied with the final product!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrf46eP2oGSNo-1blKfYmTp81QW_UtV4tvyg&s"
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
              <img 
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
