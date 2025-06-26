
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

  // Close menus when clicking outside
  const handleMenuToggle = (menu: 'product' | 'competitor') => {
    if (menu === 'product') {
      setShowProductMenu(!showProductMenu);
      setShowCompetitorMenu(false);
    } else {
      setShowCompetitorMenu(!showCompetitorMenu);
      setShowProductMenu(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Brand Name - Fixed at top left */}
      <div className="fixed top-6 left-6 z-20">
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
          Dejavas
        </h3>
      </div>

      <div className="max-w-3xl mx-auto p-6 pt-32 space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Gap Gladiator Arena
          </h1>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium">
            Enterprise AI-powered feature prioritization and competitive analysis
          </p>
        </header>

        {/* Form Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Spec */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm p-6 relative">
            <h2 className="text-lg font-semibold mb-1">Your Product Spec</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              One-page product description or roadmap
            </p>
            <textarea
              className="w-full h-28 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type/Paste here..."
              value={productSpec}
              onChange={(e) => setProductSpec(e.target.value)}
            />
            {/* Plus icon positioned at bottom left of textarea */}
            <div className="relative">
              <button 
                onClick={() => handleMenuToggle('product')}
                className="absolute -top-12 left-3 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-green-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-105"
              >
                <Plus className="w-3 h-3 text-zinc-700" />
              </button>
              
              {/* Dropdown Menu */}
              {showProductMenu && (
                <div className="absolute -top-44 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-2 min-w-48 z-10">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Image className="w-4 h-4" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Camera className="w-4 h-4" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Github className="w-4 h-4" />
                    Upload from GitHub
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Competitor Spec */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm p-6 relative">
            <h2 className="text-lg font-semibold mb-1">Key Competitor</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              Competitor analysis or feature comparison
            </p>
            <textarea
              className="w-full h-28 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type/Paste here..."
              value={competitorSpec}
              onChange={(e) => setCompetitorSpec(e.target.value)}
            />
            {/* Plus icon positioned at bottom left of textarea */}
            <div className="relative">
              <button 
                onClick={() => handleMenuToggle('competitor')}
                className="absolute -top-12 left-3 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-green-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-105"
              >
                <Plus className="w-3 h-3 text-zinc-700" />
              </button>
              
              {/* Dropdown Menu */}
              {showCompetitorMenu && (
                <div className="absolute -top-44 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-2 min-w-48 z-10">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Image className="w-4 h-4" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Camera className="w-4 h-4" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors">
                    <Github className="w-4 h-4" />
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
            className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
          >
            <Play className="w-4 h-4" />
            Start Battle (2 min)
          </button>
        </div>
      </div>
    </div>
  );
};

export default GapGladiatorUI;
