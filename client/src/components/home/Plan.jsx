import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {

    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
            </p>
            <div className="w-full max-w-2xl mx-auto">
                <PricingTable />
            </div>
        </section>
    );
};

export default Plan;
