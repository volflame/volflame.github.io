'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { storyData, StorySegment } from '@/data/story';

interface GameState {
  currentText: string;
  isTyping: boolean;
  currentSegment: string;
  choices: StorySegment['choices'];
}

interface StoryGameProps {
  setCurrentSegment?: (segment: string) => void;
}

const StoryGame = ({ setCurrentSegment }: StoryGameProps) => {
  const [gameState, setGameState] = useState<GameState>({
    currentText: '',
    isTyping: false,
    currentSegment: 'intro',
    choices: []
  });

  const typeText = async (text: string) => {
    setGameState(prev => ({ ...prev, isTyping: true }));
    let currentText = '';
    
    for (const char of text) {
      currentText += char;
      setGameState(prev => ({ ...prev, currentText }));
      await new Promise(resolve => setTimeout(resolve, 12));
    }
    
    setGameState(prev => ({ ...prev, isTyping: false }));
  };

  const loadSegment = async (segmentId: string) => {
    const segment = storyData[segmentId];
    if (!segment) return;

    setGameState(prev => ({
      ...prev,
      currentSegment: segmentId,
      choices: segment.choices || []
    }));

    if (setCurrentSegment) setCurrentSegment(segmentId);
    await typeText(segment.text);
  };

  const handleChoice = async (choice: 'yes' | 'no') => {
    const currentSegment = storyData[gameState.currentSegment];
    if (!currentSegment?.choices) return;

    const nextSegmentId = `${currentSegment.choices[0].next}_${choice}`;
    await loadSegment(nextSegmentId);
  };

  useEffect(() => {
    loadSegment('intro');
    if (setCurrentSegment) setCurrentSegment('intro');
    // eslint-disable-next-line
  }, []);

  // Check if in dream dimension state
  const isDreamDimension = gameState.currentSegment === 'dome_choice_yes';
  const isIntro = gameState.currentSegment === 'intro';
  const isSurface = gameState.currentSegment === 'queen_choice_no';

  // Ending segments
  const isEnding = [
    'dome_choice_no',
    'queen_choice_yes',
    'queen_choice_no'
  ].includes(gameState.currentSegment);

  return (
    <div className="space-y-4">
      {isIntro && (
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Image src="/titans_sky.jpg" alt="Titans in the Sky" width={300} height={200} className="rounded-lg shadow-lg" />
          <Image src="/atlantis_surface.jpg" alt="Atlantis Surface" width={300} height={200} className="rounded-lg shadow-lg" />
          <Image src="/dome_underwater.jpg" alt="Underwater Dome" width={300} height={200} className="rounded-lg shadow-lg" />
        </div>
      )}
      {isDreamDimension && (
        <div className="flex gap-8 justify-center mb-4">
          <Image src="/spirit1.jpg" alt="Spirit 1" width={180} height={180} className="rounded-full shadow-2xl" />
          <Image src="/spirit2.jpg" alt="Spirit 2" width={180} height={180} className="rounded-full shadow-2xl" />
          <Image src="/spirit3.jpg" alt="Spirit 3" width={180} height={180} className="rounded-full shadow-2xl" />
        </div>
      )}
      {isSurface && (
        <div className="flex gap-8 justify-center mb-4">
          <Image src="/earth1.jpg" alt="Earth 1" width={180} height={180} className="rounded-lg shadow-2xl" />
          <Image src="/earth2.jpg" alt="Earth 2" width={180} height={180} className="rounded-lg shadow-2xl" />
          <Image src="/earth3.jpg" alt="Earth 3" width={180} height={180} className="rounded-lg shadow-2xl" />
        </div>
      )}
      <div className="min-h-[200px] font-mono text-lg leading-relaxed whitespace-pre-wrap">
        {gameState.currentText}
        {gameState.isTyping && <span className="animate-pulse">|</span>}
        {isEnding && !gameState.isTyping && (
          <div className="text-2xl font-bold text-center mt-6">END</div>
        )}
      </div>
      
      {!gameState.isTyping && gameState.choices && gameState.choices.length > 0 && (
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleChoice('yes')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => handleChoice('no')}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            No
          </button>
        </div>
      )}

      {!gameState.isTyping && isEnding && (
        <div className="text-center">
          <button
            onClick={() => loadSegment('intro')}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryGame; 