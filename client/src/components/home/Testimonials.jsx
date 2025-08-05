import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "This platform elevated our productivity. It's intuitive and efficient.",
    name: "Alice Morgan",
    title: "CEO, Visionary Labs",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    quote: "An essential tool for modern teams. We saw results in days.",
    name: "Michael Lee",
    title: "Product Manager, Buildify",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    quote: "ContentAI helped us scale content without losing quality.",
    name: "Emma Davis",
    title: "Head of Content, CreatorsHub",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    quote: "Streamlined our content workflow completely.",
    name: "John Roberts",
    title: "Marketing Lead, NexaTech",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    quote: "Truly innovative. Our team loves using this daily.",
    name: "Sophia Chen",
    title: "CMO, AlphaWave",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/76.jpg"
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollInterval;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
          // Reset scroll to start for infinite loop
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 10); // control scroll speed
    };

    if (!isHovered) {
      startScroll();
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-2">Loved by Creators</h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Don’t just take our word for it. Here’s what our users are saying.
      </p>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-6 overflow-x-auto overflow-y-hidden 
             [-ms-overflow-style:none] [scrollbar-width:none] 
             [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 min-w-[300px] max-w-sm flex-shrink-0 hover:scale-[1.02] transition"
          >
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < testimonial.rating ? "text-blue-600" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="text-gray-700 italic mb-6 whitespace-normal">"{testimonial.quote}"</p>
            <div className="flex items-center border-t pt-4">
              <img
                src={testimonial.avatar}
                className="w-10 h-10 rounded-full mr-3"
                alt={testimonial.name}
              />
              <div className="text-left">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
