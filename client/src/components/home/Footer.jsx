const Footer = () => {
  return (
    <footer className="border-t pt-12 pb-6 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-primary">CraftwiseAi</span>
          </div>
          <p className="text-gray-600">
            Experience the power of AI with CraftwiseAI.
            <br />
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">About us</a></li>
            <li><a href="#" className="hover:text-primary">Contact us</a></li>
            <li><a href="#" className="hover:text-primary">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Subscribe to our newsletter</h4>
          <p className="mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t pt-4 text-center text-gray-500 text-xs">
        Copyright {new Date().getFullYear()} © CraftwiseAi. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
