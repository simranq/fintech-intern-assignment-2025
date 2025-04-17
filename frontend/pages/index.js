import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="m-0 h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/fintech.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl text-center bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-500 bg-clip-text text-transparent mt-12 mb-6">
          Welcome to the Financial Multiverse
        </h1>

        {/* Description */}
        <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl text-center mb-8 text-pink-500">
          Empowering Gen Z to shape their financial future with confidence.
        </p>

        {/* CTA Button */}
        <Link href="/persona">
          <button className="bg-white text-pink-600 hover:bg-pink-700 hover:text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 font-montserrat mt-48">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
