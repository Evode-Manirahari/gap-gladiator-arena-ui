
import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Plus,
  Upload,
  Camera,
  Image,
  Github,
  Save,
  CheckCircle,
  AlertCircle,
  FileText,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GapGladiatorUI = () => {
  const [productSpec, setProductSpec] = useState("");
  const [competitorSpec, setCompetitorSpec] = useState("");
  const [gameState, setGameState] = useState("setup");
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showCompetitorMenu, setShowCompetitorMenu] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [dragStates, setDragStates] = useState({
    product: false,
    competitor: false
  });
  const { toast } = useToast();
  
  const productFileRef = useRef<HTMLInputElement>(null);
  const competitorFileRef = useRef<HTMLInputElement>(null);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout>();

  // Auto-save functionality
  useEffect(() => {
    if (productSpec.trim() || competitorSpec.trim()) {
      setIsAutoSaving(true);
      
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
      
      autoSaveTimeoutRef.current = setTimeout(() => {
        // Simulate auto-save
        localStorage.setItem('gap-gladiator-product', productSpec);
        localStorage.setItem('gap-gladiator-competitor', competitorSpec);
        setIsAutoSaving(false);
        
        if (productSpec.trim() && competitorSpec.trim()) {
          toast({
            title: "Draft saved",
            description: "Your progress has been automatically saved",
            duration: 2000,
          });
        }
      }, 1500);
    }
    
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [productSpec, competitorSpec, toast]);

  // Load saved data on mount
  useEffect(() => {
    const savedProduct = localStorage.getItem('gap-gladiator-product');
    const savedCompetitor = localStorage.getItem('gap-gladiator-competitor');
    
    if (savedProduct) setProductSpec(savedProduct);
    if (savedCompetitor) setCompetitorSpec(savedCompetitor);
  }, []);

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

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent, type: 'product' | 'competitor') => {
    e.preventDefault();
    setDragStates(prev => ({ ...prev, [type]: true }));
  };

  const handleDragLeave = (e: React.DragEvent, type: 'product' | 'competitor') => {
    e.preventDefault();
    setDragStates(prev => ({ ...prev, [type]: false }));
  };

  const handleDrop = (e: React.DragEvent, type: 'product' | 'competitor') => {
    e.preventDefault();
    setDragStates(prev => ({ ...prev, [type]: false }));
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0], type);
    }
  };

  const handleFileUpload = async (file: File, type: 'product' | 'competitor') => {
    if (file.type === 'text/plain' || file.name.endsWith('.md')) {
      const text = await file.text();
      if (type === 'product') {
        setProductSpec(text);
      } else {
        setCompetitorSpec(text);
      }
      
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been loaded`,
      });
    } else {
      toast({
        title: "Unsupported file type",
        description: "Please upload a text or markdown file",
        variant: "destructive",
      });
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'competitor') => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, type);
    }
  };

  const handleStartBattle = () => {
    if (!productSpec.trim() || !competitorSpec.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both product spec and competitor information",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Battle starting!",
      description: "Analyzing your product against the competition...",
    });
    setGameState("running");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all duration-300">
      {/* Auto-save indicator */}
      {isAutoSaving && (
        <div className="fixed top-4 right-4 z-30 flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-2 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <Save className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-medium">Saving...</span>
        </div>
      )}

      {/* Brand Name - Enhanced */}
      <div className="fixed top-8 left-8 z-20 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          Dejavas
        </h3>
      </div>

      <div className="max-w-4xl mx-auto p-8 pt-32 space-y-12">
        {/* Enhanced Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 mb-6">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">ENTERPRISE AI-POWERED</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
            Gap Gladiator Arena
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Intelligent feature prioritization and competitive analysis to dominate your market
          </p>
        </header>

        {/* Enhanced Form Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Spec - Enhanced */}
          <div 
            className={`group relative rounded-3xl border-2 transition-all duration-300 p-8 ${
              dragStates.product 
                ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-500' 
                : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600'
            } shadow-lg hover:shadow-xl`}
            onDragOver={(e) => handleDragOver(e, 'product')}
            onDragLeave={(e) => handleDragLeave(e, 'product')}
            onDrop={(e) => handleDrop(e, 'product')}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Your Product Spec</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Product description, roadmap, or feature list
                </p>
              </div>
              <div className="flex items-center gap-2">
                {productSpec.trim() && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                <span className="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full">
                  {productSpec.length}/2000
                </span>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                className="w-full h-40 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-4 text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Describe your product, paste your roadmap, or drag & drop a file here..."
                value={productSpec}
                onChange={(e) => setProductSpec(e.target.value)}
                maxLength={2000}
                aria-label="Product specification input"
              />
              
              {dragStates.product && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/90 dark:bg-blue-900/50 rounded-xl border-2 border-dashed border-blue-400 dark:border-blue-500">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Drop your file here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Plus Menu */}
            <div className="relative mt-4">
              <button 
                onClick={() => handleMenuToggle('product')}
                className="absolute -top-16 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Add product content"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
              
              {showProductMenu && (
                <div className="absolute -top-60 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl p-3 min-w-56 z-10 animate-fade-in">
                  <input
                    type="file"
                    ref={productFileRef}
                    onChange={(e) => handleFileInputChange(e, 'product')}
                    accept=".txt,.md"
                    className="hidden"
                  />
                  <button 
                    onClick={() => productFileRef.current?.click()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Image className="w-4 h-4" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Camera className="w-4 h-4" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    Import from GitHub
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Competitor Spec - Enhanced */}
          <div 
            className={`group relative rounded-3xl border-2 transition-all duration-300 p-8 ${
              dragStates.competitor 
                ? 'border-purple-400 bg-purple-50/50 dark:bg-purple-900/20 dark:border-purple-500' 
                : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600'
            } shadow-lg hover:shadow-xl`}
            onDragOver={(e) => handleDragOver(e, 'competitor')}
            onDragLeave={(e) => handleDragLeave(e, 'competitor')}
            onDrop={(e) => handleDrop(e, 'competitor')}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Key Competitor</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Competitor analysis or feature comparison
                </p>
              </div>
              <div className="flex items-center gap-2">
                {competitorSpec.trim() && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                <span className="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full">
                  {competitorSpec.length}/2000
                </span>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                className="w-full h-40 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-4 text-sm placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Describe your competitor, their features, or drag & drop analysis here..."
                value={competitorSpec}
                onChange={(e) => setCompetitorSpec(e.target.value)}
                maxLength={2000}
                aria-label="Competitor specification input"
              />
              
              {dragStates.competitor && (
                <div className="absolute inset-0 flex items-center justify-center bg-purple-50/90 dark:bg-purple-900/50 rounded-xl border-2 border-dashed border-purple-400 dark:border-purple-500">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Drop your file here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Plus Menu */}
            <div className="relative mt-4">
              <button 
                onClick={() => handleMenuToggle('competitor')}
                className="absolute -top-16 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                aria-label="Add competitor content"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
              
              {showCompetitorMenu && (
                <div className="absolute -top-60 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl p-3 min-w-56 z-10 animate-fade-in">
                  <input
                    type="file"
                    ref={competitorFileRef}
                    onChange={(e) => handleFileInputChange(e, 'competitor')}
                    accept=".txt,.md"
                    className="hidden"
                  />
                  <button 
                    onClick={() => competitorFileRef.current?.click()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Upload a file
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Image className="w-4 h-4" />
                    Upload photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Camera className="w-4 h-4" />
                    Take photo
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    Import from GitHub
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Start Button */}
        <div className="text-center space-y-4">
          <button
            onClick={handleStartBattle}
            disabled={!productSpec.trim() || !competitorSpec.trim()}
            className="group relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-white dark:to-zinc-100 text-white dark:text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3 mx-auto min-w-64"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Start Battle</span>
            <span className="text-sm opacity-80">(2 min)</span>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
          
          {(!productSpec.trim() || !competitorSpec.trim()) && (
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">Fill in both sections to start the analysis</span>
            </div>
          )}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${productSpec.trim() ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-600'} transition-colors`}></div>
            <span>Product Spec</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${competitorSpec.trim() ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-600'} transition-colors`}></div>
            <span>Competitor Info</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${productSpec.trim() && competitorSpec.trim() ? 'bg-blue-500 animate-pulse' : 'bg-zinc-300 dark:bg-zinc-600'} transition-colors`}></div>
            <span>Ready to Battle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GapGladiatorUI;
