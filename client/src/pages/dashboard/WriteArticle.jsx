import { useState } from "react";
import { Sparkles, Edit3 } from "lucide-react";

export default function WriteArticle() {
  const [article, setArticle] = useState("");

  const handleGenerate = () => {
    setArticle("This is your AI-generated article. It’s just placeholder text for now.");
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-blue-500" size={20} />
            <h2 className="text-lg font-semibold">AI Article Writer</h2>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Article Topic</label>
            <input
              type="text"
              placeholder="The future of artificial intelligence"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Article Length</label>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm rounded-full border border-gray-200 bg-blue-50 text-blue-600">
                Short (200 - 400 word)
              </button>
              <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:bg-gray-100">
                Long (400 - 800 word)
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            <Edit3 size={16} /> Generate article
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center text-center">
          {article ? (
            <p className="text-gray-700">{article}</p>
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <Edit3 size={40} className="mb-3" />
              <p className="max-w-xs">
                Enter a topic and click “Generate article” to get started
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
