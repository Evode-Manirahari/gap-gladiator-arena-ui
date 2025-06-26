
import React, { useState } from "react";
import {
  Play,
  Plus,
  Upload,
  Camera,
  Image,
  Github
} from "lucide-react";

const GapGladiatorUI = () => {
  const [productSpec, setProductSpec] = useState("");
  const [competitorSpec, setCompetitorSpec] = useState("");
  const [gameState, setGameState] = useState("setup");
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showCompetitorMenu, setShowCompetitorMenu] = useState(false);

  const toggleProductMenu = () => {
    setShowProductMenu(!showProductMenu);
  };

  const toggleCompetitorMenu = () => {
    setShowCompetitorMenu(!showCompetitorMenu);
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Brand Name - Fixed at top left */}
      <div className="fixed top-8 left-8 z-20">
        <h3 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          Dejavas
        </h3>
      </div>

      <div className="max-w-5xl mx-auto p-8 pt-40 space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Gap Gladiator Arena
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium">
            Enterprise AI-powered feature prioritization and competitive analysis
          </p>
        </header>

        {/* Form Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Spec */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm p-8 relative">
            <h2 className="text-2xl font-semibold mb-2">Your Product Spec</h2>
            <p className="text-base text-zinc-500 dark:text-zinc-400 mb-6">
              One-page product description or roadmap
            </p>
            <textarea
              className="w-full h-48 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-4 text-base placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type/Paste here..."
              value={productSpec}
              onChange={(e) => setProductSpec(e.target.value)}
            />
            {/* Plus icon in bottom left corner */}
            <div className="absolute bottom-8 left-8">
              <button 
                onClick={toggleProductMenu}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-green-300 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-105"
              >
                <Plus className="w-3 h-3 text-zinc-700" />
              </button>
              
              {/* Dropdown Menu */}
              {showProductMenu && (
                <div className="absolute bottom-8 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-3 min-w-56 z-10">
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Upload className="w-5 h-5" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Image className="w-5 h-5" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Camera className="w-5 h-5" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Github className="w-5 h-5" />
                    Upload from GitHub
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Competitor Spec */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm p-8 relative">
            <h2 className="text-2xl font-semibold mb-2">Key Competitor</h2>
            <p className="text-base text-zinc-500 dark:text-zinc-400 mb-6">
              Competitor analysis or feature comparison
            </p>
            <textarea
              className="w-full h-48 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-4 text-base placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type/Paste here..."
              value={competitorSpec}
              onChange={(e) => setCompetitorSpec(e.target.value)}
            />
            {/* Plus icon in bottom left corner */}
            <div className="absolute bottom-8 left-8">
              <button 
                onClick={toggleCompetitorMenu}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-green-300 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-105"
              >
                <Plus className="w-3 h-3 text-zinc-700" />
              </button>
              
              {/* Dropdown Menu */}
              {showCompetitorMenu && (
                <div className="absolute bottom-8 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-3 min-w-56 z-10">
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Upload className="w-5 h-5" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Image className="w-5 h-5" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Camera className="w-5 h-5" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Github className="w-5 h-5" />
                    Upload from GitHub
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={() => setGameState("running")}
            disabled={!productSpec.trim() || !competitorSpec.trim()}
            className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-10 py-5 rounded-2xl text-lg font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
          >
            <Play className="w-6 h-6" />
            Start Battle (2 min)
          </button>
        </div>
      </div>
    </div>
  );
};

export default GapGladiatorUI;
