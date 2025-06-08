'use client';

import { useState, useEffect, useRef } from 'react';
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

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const skipRequested = useRef(false);

  const typeText = async (text: string) => {
    setGameState(prev => ({ ...prev, isTyping: true }));
    let currentText = '';
    skipRequested.current = false;
    for (const char of text) {
      if (skipRequested.current) {
        setGameState(prev => ({ ...prev, currentText: text, isTyping: false }));
        return;
      }
      currentText += char;
      setGameState(prev => ({ ...prev, currentText }));
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    setGameState(prev => ({ ...prev, isTyping: false }));
  };

  const handleSkip = () => {
    skipRequested.current = true;
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

  // Add effect for auto-playing music
  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsMusicPlaying(true);
        } catch (error) {
          console.log('Autoplay was blocked by the browser');
        }
      }
    };
    playMusic();
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
      {/* Audio player and attribution */}
      <div className="flex justify-end mb-4">
        <div className="bg-black/80 p-4 rounded-lg text-white text-sm">
          <audio
            ref={audioRef}
            src="/reflected-light-147979.mp3"
            loop
            onPlay={() => setIsMusicPlaying(true)}
            onPause={() => setIsMusicPlaying(false)}
          />
          <button
            onClick={() => {
              if (audioRef.current) {
                if (isMusicPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
              }
            }}
            className="mb-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
          >
            {isMusicPlaying ? 'Pause Music' : 'Play Music'}
          </button>
          <div className="text-xs opacity-80">
            Music by <a href="https://pixabay.com/users/sergepavkinmusic-6130722/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147979" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Sergii Pavkin</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147979" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Pixabay</a>
          </div>
        </div>
      </div>

      {/* Story text and controls */}
      <div className="min-h-[200px] text-lg leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
        {gameState.currentText}
        {gameState.isTyping && <span className="animate-pulse">|</span>}
        {isEnding && !gameState.isTyping && (
          <div className="text-2xl font-bold text-center mt-6">END</div>
        )}
      </div>
      {gameState.isTyping && (
        <div className="flex justify-center mt-2">
          <button
            onClick={handleSkip}
            className="px-4 py-1 bg-gray-700 hover:bg-gray-800 rounded text-sm font-mono"
          >
            Skip
          </button>
        </div>
      )}
      {!gameState.isTyping && gameState.choices && gameState.choices.length > 0 && !isEnding && (
        <div className="flex gap-4 justify-center">
          {/* Yes button */}
          <button
            onClick={() => handleChoice('yes')}
            className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg transition-colors font-medium"
          >
            {gameState.choices[0]?.text || 'Yes'}
          </button>
          {/* No button */}
          <button
            onClick={() => handleChoice('no')}
            className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg transition-colors font-medium"
          >
            {gameState.choices[0]?.text
              ? gameState.choices[0].text.startsWith('You step forward') ? "You decide to step back." :
                gameState.choices[0].text.startsWith('You take her hand') ? "RUN AWAY." :
                gameState.choices[0].text.startsWith('Play again') ? 'No' :
                'No'
              : 'No'}
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
      {/* Images at the bottom */}
      {(isIntro || isDreamDimension || isSurface) && (
        <div className="mt-8">
          {isIntro && (
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Image src="/titans_sky.jpg" alt="Titans in the Sky" width={300} height={200} className="rounded-lg shadow-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043381320/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/atlantis_surface.jpg" alt="Atlantis Surface" width={300} height={200} className="rounded-lg shadow-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043381143/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/dome_underwater.jpg" alt="Underwater Dome" width={300} height={200} className="rounded-lg shadow-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043381201/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
            </div>
          )}
          {isDreamDimension && (
            <div className="flex gap-8 justify-center">
              <div className="relative">
                <Image src="/spirit1.jpg" alt="Spirit 1" width={180} height={180} className="rounded-full shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043381371/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/spirit2.jpg" alt="Spirit 2" width={180} height={180} className="rounded-full shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/211174977212766/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/spirit3.jpg" alt="Spirit 3" width={180} height={180} className="rounded-full shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043381356/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
            </div>
          )}
          {isSurface && (
            <div className="flex gap-8 justify-center">
              <div className="relative">
                <Image src="/earth1.jpg" alt="Earth 1" width={180} height={180} className="rounded-lg shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043560646/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/earth2.jpg" alt="Earth 2" width={180} height={180} className="rounded-lg shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043560655/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
              <div className="relative">
                <Image src="/earth3.jpg" alt="Earth 3" width={180} height={180} className="rounded-lg shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                  <a href="https://www.pinterest.com/pin/782500504043560660/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Source</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StoryGame; 