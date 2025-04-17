import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PersonaSelection() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [saveStatus, setSaveStatus] = useState({
    loading: false,
    success: false,
    error: null,
    lastSaved: null
  });

  const personas = [
    {
      name: "Innovator",
      color: "bg-pink-500",
      description: "Forward-thinkers shaping tomorrow.",
    },
    {
      name: "Traditionalist",
      color: "bg-yellow-500",
      description: "Stable investors valuing time-tested methods.",
    },
    {
      name: "Adventurer",
      color: "bg-blue-500",
      description: "Daring risk-takers seeking new challenges.",
    },
    {
      name: "Athlete",
      color: "bg-green-500",
      description: "Disciplined and competitive in every move.",
    },
    {
      name: "Artist",
      color: "bg-purple-500",
      description: "Creative minds making unique financial decisions.",
    },
  ];

  // Auto-dismiss success/error messages after 3 seconds
  useEffect(() => {
    if (saveStatus.success || saveStatus.error) {
      const timer = setTimeout(() => {
        setSaveStatus(prev => ({
          ...prev, 
          success: false,
          error: null
        }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [saveStatus.success, saveStatus.error]);

  // Enhanced save function with retry logic
  const savePersona = async (persona, retries = 2) => {
    setSaveStatus({
      loading: true,
      success: false,
      error: null,
      lastSaved: null
    });

    try {
      const payload = {
        name: persona.name,
        color: persona.color.replace('bg-', ''),
        description: persona.description
      };

      const response = await fetch("/api/savePersona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Retry if failed
        if (retries > 0) {
          console.log(`Retrying... attempts left: ${retries}`);
          return savePersona(persona, retries - 1);
        }
        throw new Error(data.error || 'Failed to save persona');
      }

      setSaveStatus({
        loading: false,
        success: true,
        error: null,
        lastSaved: data.data
      });
      
      return data;
    } catch (error) {
      console.error("Save error:", error);
      setSaveStatus({
        loading: false,
        success: false,
        error: error.message,
        lastSaved: null
      });
      throw error;
    }
  };

  const handlePersonaClick = async (persona) => {
    if (saveStatus.loading) return; // Prevent multiple clicks
    
    setSelectedPersona(persona);
    try {
      await savePersona(persona);
    } catch (error) {
      // Error already handled in savePersona
    }
  };

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center py-10 px-4 relative">
      {/* Enhanced Status Notifications */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
        {saveStatus.loading && (
          <div className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Saving your selection...
          </div>
        )}
        
        {saveStatus.success && (
          <div className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Saved: {saveStatus.lastSaved?.name || 'Persona'} selected!
          </div>
        )}

        {saveStatus.error && (
          <div className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {saveStatus.error}
          </div>
        )}
      </div>

      {/* Rest of your UI remains unchanged */}
      <h1 className="font-orbitron font-bold text-4xl sm:text-5xl text-center text-gray-800 mb-10">
        Choose Your Persona
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg text-white text-center transform ${persona.color} ${
              selectedPersona?.name === persona.name ? 'ring-4 ring-white' : ''
            } cursor-pointer ${saveStatus.loading ? 'opacity-70' : ''}`}
            variants={cardVariants}
            whileHover={!saveStatus.loading ? {
              boxShadow: "0px 0px 30px 10px rgba(255, 255, 255, 0.8)",
              scale: 1.02,
            } : {}}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            onClick={() => handlePersonaClick(persona)}
          >
            <h2 className="text-2xl font-montserrat font-bold mb-2">
              {persona.name}
            </h2>
            <p className="font-montserrat text-sm">{persona.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedPersona && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white py-2 px-6 rounded-lg font-montserrat font-bold shadow-lg"
          onClick={() => setShowOverlay(true)}
          disabled={saveStatus.loading}
        >
          {saveStatus.loading ? 'Saving...' : 'Next: Meet Your Financial Companion'}
        </motion.button>
      )}

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-montserrat z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-lg mb-6">
              Meet your AI Financial Companion in the upcoming section.
            </p>
            <Link href="/chatbot">
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-montserrat font-bold shadow-lg">
                Proceed to Chatbot Placeholder
              </button>
            </Link>
            <button
              className="mt-4 ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-lg font-montserrat font-bold"
              onClick={() => setShowOverlay(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}