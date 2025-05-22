'use client';

import Image from 'next/image';
import { useState } from 'react';
import StoryGame from '@/components/StoryGame';

export default function Home() {
  const [currentSegment, setCurrentSegment] = useState('intro');

  // Determine background image
  let bgImage = '/dome_underwater.jpg';
  if (currentSegment === 'dome_choice_yes') {
    bgImage = '/spirit1.jpg';
  } else if (currentSegment === 'queen_choice_no') {
    bgImage = '/earth3.jpg';
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 drop-shadow-lg">The Dome</h1>
        <div className="max-w-3xl mx-auto bg-black/60 p-6 rounded-lg shadow-xl backdrop-blur-sm">
          <StoryGame setCurrentSegment={setCurrentSegment} />
        </div>
      </div>
    </main>
  );
}
