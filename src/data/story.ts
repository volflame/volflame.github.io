export interface StorySegment {
  text: string;
  choices?: {
    text: string;
    next: string;
  }[];
}

export const storyData: Record<string, StorySegment> = {
  intro: {
    text: `OCE 122. August 1.

We didn't know what to do with the world above. We are the last bastion of humanity. There is no civilization among the titans.

My whole life, I was told that long ago, humans ruled the world above. But one day, the Titans appeared. At first, it was slow. Large humanoids would show up to farms in the countryside, attempting to eat the farmers whole.

Then, they rampaged. Titans, some fifteen meters tall, ravaged the cities above. In response, humans created a bastion in the only place safe from the Titans: the ocean floor. The government put all their money into researching a technology that would allow us to safely live under the massive pressure in the ocean. As a result, they built a massive, 10-kilometer dome which had artificial day-and-night cycles, and an eerily realistic sky.

My life under the Dome was decent. As the Old Books would describe it, we lived a life of luxury. We had servants powered with artificial intelligence, private chefs, luxury homes (or, as many as you could fit under the dome). I had a loving mom and dad. There was no room for sadness, no room for a want—a need—to leave.

One day, I felt an inexplicable urge. It was a lull in the wind, a nudge from above to see the world above. It was one of those feelings: a hum, a breath, something so involuntary. What did I want? Was it freedom? Was it to understand those beings above which ruled us? How could we survive under this Dome as our population continues to increase?

These were the lies I told myself, lies meant to justify the wind, the hum, the breath.

OCE 122. June 13.
It's 2 in the morning. I arrived at the edge of the Dome. The glass, curving towards an apex one hundred meters up, and another one hundred meters back, was calling to me. I could feel the hairs on my skin rising, an electric force pulling me to it. I turned around—nobody was looking.`,
    choices: [
      {
        text: "Touch the dome?",
        next: "dome_choice"
      }
    ]
  },
  dome_choice_no: {
    text: `I decided to turn back. There was no reason to confront this life. My parents provide. The Dome provides.`,
    choices: [
      {
        text: "Play again?",
        next: "intro"
      }
    ]
  },
  dome_choice_yes: {
    text: `Taking a deep breath, I stepped forward, hand stretched, volts sparking between my fingertips and the Dome. ZZZAPP. The moment I opened my eyes, I was in another world, surrounded by a white mist dotted with shadows.

I looked at the figures around me. Closely, I saw the figure of my mom, my dad. The figure of my schoolteacher, my classmates. All their eyes were closed, almost as if they were sleeping, but they were still standing, arms crossed over their chest.

"Mom?" I said. "Are you there?"

She didn't respond. I walked up to her, trying to touch her, wanting to get her attention. The moment I touched her shoulder, my hand phased through where her body should have been. She remained standing, eyes closed.

"Be careful. You don't want to wake them."

A voice from behind me boomed. I turned around, and I saw a woman, veiled in a white mist.

"What's going on? Who are you?"

"I'm the queen of our city. It seems you've entered our dream dimension."

"What dream dimension? What are you talking about?"

"Listen, girl. I'll tell you this much. There is no Dome without the dream dimension. In order for us to maintain it, we need to steal the dreams of the people. The people cannot have a desire to leave, to dream of the world above. So we must steal them from their slumber."

I paused. I was in the dream dimension? Wait—more importantly, where did the Dome get its power from? Why was everyone I know standing in this dimension like corpses?

"This can't be the only thing you're doing," I said.

"Clever girl. Every dream is a source of life and energy. With the dreams we steal, we can use them to sustain the energy of our dome."

"You're stealing… the life energy of your own citizens? Won't that kill them?"

"The Titans will kill them. Or, that's what they think. Clever girl, I think you can join me. There's only a special few who can enter the dream dimension, and you have the spiritual power it takes. Together, we can rule the world underwater, sustain new generations of this Atlantis."

I couldn't face her. Since a few days ago, I felt a calling to reach the surface. It was forbidden, but the shadows called to me. Were we, as a race, meant to stay trapped under the Dome? Did God provide only to take away our freedom? Or are we meant to seek the truth in the unexplored—in the uninhabitable?

"So, what do you think? Will you join me? Or will you leave this dimension, all your memories erased?" She extended her hand.`,
    choices: [
      {
        text: "Join her?",
        next: "queen_choice"
      }
    ]
  },
  queen_choice_yes: {
    text: `The Titans above would eat us. I needed to protect the world underwater. I needed to protect my parents. I steeled my resolve, and took her hand.`,
    choices: [
      {
        text: "Play again?",
        next: "intro"
      }
    ]
  },
  queen_choice_no: {
    text: `"That's too bad. I'll have to erase your memories, then."

That same instinctual feeling arose. Suddenly, I felt a burning sensation in my stomach. It screamed at me, begging me torun. And run, I did. I ran.

"Wait! Girl! You cannot leave this dimension unless I pardon you. God has entrusted me with the souls of our people."

I continued running. Step by step. I ran until the mist around me was unveiled. I ran until I saw… the sun? An expanse of millions of plants. An unruly wild of trees and forest. To the left, I see deer. To the right, I see a village. I do a double take. A village? There were no forests under the sea. We only had streets and oceanscrapers. Where was I?

I walked up to the village and immediately noticed a hustle and bustle of humans. Together, they weaved in and out, a system of souls, perusing what seemed to be vendors selling abundant apples and oranges and strawberries, hard commodities to come by underwater. I pulled a stranger aside, a pregnant woman with a pomegranate in hand.

"Where am I?"

"Where are you? You're on Earth, silly!"

"Well, yes, but where am I? Are we still in the underwater bastion?"

"Underwater bastion? Where?"

"About 100 kilometers off the Japanese coast of the Pacific Ocean?"

"What are you talking about? Of course we're not under an ocean?"

"Then, what about the Titans?"

"Oh, silly girl, where have you come from? What are these Titans you speak of?"`,
    choices: [
      {
        text: "Play again?",
        next: "intro"
      }
    ]
  }
}; 