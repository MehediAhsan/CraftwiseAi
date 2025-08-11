import { Protect } from "@clerk/clerk-react";
import { Sparkles, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const creations = [
    {
      title:
        "Navigating the Technological Frontier: Trends Shaping Our Future",
      type: "article",
      date: "6/11/2025",
      description:
        "An in-depth exploration of emerging technologies and how they will influence our lives, industries, and global economy in the next decade.",
    },
    {
      title: "Background removed from an image.",
      type: "image",
      date: "6/11/2025",
      description:
        "Removed the background from a high-resolution image for professional use in a marketing campaign.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 flex items-center justify-between border-2 border-light">
          <div>
            <p className="text-sm text-gray-500">Total Creations</p>
            <h2 className="text-3xl font-semibold mt-1">3</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <Sparkles className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 flex items-center justify-between border-2 border-light">
          <div>
            <p className="text-sm text-gray-500">Plan Status</p>
            <h2 className="text-lg font-semibold mt-1"><Protect plan='premium' fallback='Free'>Premium</Protect></h2>
          </div>
          <div className="bg-pink-50 p-3 rounded-lg">
            <Star className="text-pink-500" size={24} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Creations</h3>
        <div className="space-y-4">
          {creations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border-2 border-light"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(idx)}
              >
                <div>
                  <h4 className="text-gray-800 font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500">
                    {item.type} • {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full border border-blue-200 bg-blue-50 text-blue-600 capitalize">
                    {item.type}
                  </span>
                  {expandedIndex === idx ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </div>
              </div>

              {expandedIndex === idx && (
                <div className="mt-3 border-t border-gray-100 pt-3 text-sm text-gray-600">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
