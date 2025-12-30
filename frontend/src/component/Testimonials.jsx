import React from "react";
import Marquee from "./ui/Marquee";

const testimonials = [
    {
        name: "Sarah Johnson",
        username: "@sarahj_designs",
        body: "This AI invoice generator saved me hours every week! The automation is incredible and the invoices look so professional.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        role: "Freelance Designer",
    },
    {
        name: "Michael Chen",
        username: "@mchen_dev",
        body: "Best invoicing tool I've used. The AI understands my requirements perfectly and generates invoices in seconds!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        role: "Software Developer",
    },
    {
        name: "Emily Rodriguez",
        username: "@emily_consult",
        body: "Game changer for my consulting business. Professional invoices with zero hassle. Highly recommend!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        role: "Business Consultant",
    },
    {
        name: "David Kim",
        username: "@davidkim_photo",
        body: "As a photographer, I need quick invoicing between shoots. This tool is perfect - fast, beautiful, and reliable.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        role: "Professional Photographer",
    },
    {
        name: "Jessica Martinez",
        username: "@jess_marketing",
        body: "The AI feature is mind-blowing! Just describe what I need and boom - perfect invoice every time.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
        role: "Marketing Specialist",
    },
    {
        name: "Alex Thompson",
        username: "@alex_writes",
        body: "Clean interface, powerful features. Managing invoices has never been this easy. Love it!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        role: "Content Writer",
    },
    {
        name: "Priya Patel",
        username: "@priya_coach",
        body: "This tool transformed my billing process. Professional invoices in minutes, not hours. Absolutely fantastic!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        role: "Life Coach",
    },
    {
        name: "James Wilson",
        username: "@james_architect",
        body: "The customization options are excellent. Every invoice looks polished and matches my brand perfectly.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        role: "Architect",
    },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({ img, name, username, body, role }) => {
    return (
        <figure className="relative w-80 cursor-pointer overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-row items-center gap-3 mb-4">
                <img
                    className="rounded-full ring-2 ring-blue-100"
                    width="48"
                    height="48"
                    alt={name}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-base font-semibold text-gray-900">
                        {name}
                    </figcaption>
                    <p className="text-sm text-gray-500">{role}</p>
                    <p className="text-xs text-blue-600 font-medium">{username}</p>
                </div>
            </div>
            <blockquote className="text-sm text-gray-600 leading-relaxed">
                "{body}"
            </blockquote>

            {/* Star rating */}
            <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                ))}
            </div>
        </figure>
    );
};

const Testimonials = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        Loved by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Thousands</span> of Users
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        See what our amazing customers have to say about their experience with AI Invoice
                    </p>
                </div>
            </div>

            {/* Marquee testimonials */}
            <div className="relative flex flex-col items-center justify-center gap-6">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
            </div>

            {/* Bottom CTA */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <p className="text-lg text-gray-600 mb-4">
                    Join thousands of satisfied users today
                </p>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get Started Free
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
