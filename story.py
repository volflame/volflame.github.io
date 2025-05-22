import time
import sys

def print_slow(text):
    """Print text with a typing effect"""
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(0.03)
    print()

def get_choice(prompt):
    """Get user input and validate it's Y or N"""
    while True:
        choice = input(prompt).upper()
        if choice in ['Y', 'N']:
            return choice
        print("Please enter Y or N")

def play_story():
    print_slow("\nOCE 122. August 1.")
    print_slow("\nWe didn't know what to do with the world above. We are the last bastion of humanity. There is no civilization among the titans.")
    print_slow("\nMy whole life, I was told that long ago, humans ruled the world above. But one day, the Titans appeared. At first, it was slow. Large humanoids would show up to farms in the countryside, attempting to eat the farmers whole.")
    print_slow("\nThen, they rampaged. Titans, some fifteen meters tall, ravaged the cities above. In response, humans created a bastion in the only place safe from the Titans: the ocean floor. The government put all their money into researching a technology that would allow us to safely live under the massive pressure in the ocean. As a result, they built a massive, 10-kilometer dome which had artificial day-and-night cycles, and an eerily realistic sky.")
    
    print_slow("\nMy life under the Dome was decent. As the Old Books would describe it, we lived a life of luxury. We had servants powered with artificial intelligence, private chefs, luxury homes (or, as many as you could fit under the dome). I had a loving mom and dad. There was no room for sadness, no room for a want—a need—to leave.")
    
    print_slow("\nOne day, I felt an inexplicable urge. It was a lull in the wind, a nudge from above to see the world above. It was one of those feelings: a hum, a breath, something so involuntary. What did I want? Was it freedom? Was it to understand those beings above which ruled us? How could we survive under this Dome as our population continues to increase?")
    
    print_slow("\nThese were the lies I told myself, lies meant to justify the wind, the hum, the breath.")
    
    print_slow("\nOCE 122. June 13.")
    print_slow("\nIt's 2 in the morning. I arrived at the edge of the Dome. The glass, curving towards an apex one hundred meters up, and another one hundred meters back, was calling to me. I could feel the hairs on my skin rising, an electric force pulling me to it. I turned around—nobody was looking.")
    
    choice = get_choice("\nTouch the dome? (Y/N): ")
    
    if choice == 'N':
        print_slow("\nI decided to turn back. There was no reason to confront this life. My parents provide. The Dome provides.")
        print_slow("\nEND.")
        return play_again()
    
    print_slow("\nTaking a deep breath, I stepped forward, hand stretched, volts sparking between my fingertips and the Dome. ZZZAPP. The moment I opened my eyes, I was in another world, surrounded by a white mist dotted with shadows.")
    
    print_slow("\nI looked at the figures around me. Closely, I saw the figure of my mom, my dad. The figure of my schoolteacher, my classmates. All their eyes were closed, almost as if they were sleeping, but they were still standing, arms crossed over their chest.")
    
    print_slow('\n"Mom?" I said. "Are you there?"')
    
    print_slow("\nShe didn't respond. I walked up to her, trying to touch her, wanting to get her attention. The moment I touched her shoulder, my hand phased through where her body should have been. She remained standing, eyes closed.")
    
    print_slow('\n"Be careful. You don\'t want to wake them."')
    
    print_slow("\nA voice from behind me boomed. I turned around, and I saw a woman, veiled in a white mist.")
    
    print_slow('\n"What\'s going on? Who are you?"')
    
    print_slow('\n"I\'m the queen of our city. It seems you\'ve entered our dream dimension."')
    
    print_slow('\n"What dream dimension? What are you talking about?"')
    
    print_slow('\n"Listen, girl. I\'ll tell you this much. There is no Dome without the dream dimension. In order for us to maintain it, we need to steal the dreams of the people. The people cannot have a desire to leave, to dream of the world above. So we must steal them from their slumber."')
    
    print_slow("\nI paused. I was in the dream dimension? Wait—more importantly, where did the Dome get its power from? Why was everyone I know standing in this dimension like corpses?")
    
    print_slow('\n"This can\'t be the only thing you\'re doing," I said.')
    
    print_slow('\n"Clever girl. Every dream is a source of life and energy. With the dreams we steal, we can use them to sustain the energy of our dome."')
    
    print_slow('\n"You\'re stealing… the life energy of your own citizens? Won\'t that kill them?"')
    
    print_slow('\n"The Titans will kill them. Or, that\'s what they think. Clever girl, I think you can join me. There\'s only a special few who can enter the dream dimension, and you have the spiritual power it takes. Together, we can rule the world underwater, sustain new generations of this Atlantis."')
    
    print_slow("\nI couldn't face her. Since a few days ago, I felt a calling to reach the surface. It was forbidden, but the shadows called to me. Were we, as a race, meant to stay trapped under the Dome? Did God provide only to take away our freedom? Or are we meant to seek the truth in the unexplored—in the uninhabitable?")
    
    print_slow('\n"So, what do you think? Will you join me? Or will you leave this dimension, all your memories erased?" She extended her hand.')
    
    print_slow("\nI trusted in my calling to the surface. With either decision I made, I felt that my soul's compass would direct me to the world above.")
    
    choice = get_choice("\nJoin her? (Y/N): ")
    
    if choice == 'Y':
        print_slow("\nThe Titans above would eat us. I needed to protect the world underwater. I needed to protect my parents. I steeled my resolve, and took her hand.")
        print_slow("\nEND.")
        return play_again()
    
    print_slow('\n"That\'s too bad. I\'ll have to erase your memories, then."')
    
    print_slow("\nThat same instinctual feeling arose. Suddenly, I felt a burning sensation in my stomach, one telling me to run. And run, I did. I ran.")
    
    print_slow('\n"Wait! Girl! You cannot leave this dimension unless I pardon you. God has entrusted me with the souls of our people."')
    
    print_slow("\nI continued running. Step by step. I ran until the mist around me was unveiled. I ran until I saw… the sun? An expanse of millions of plants. An unruly wild of trees and forest. To the left, I see deer. To the right, I see a village. I do a double take. A village? There were no forests under the sea. We only had streets and oceanscrapers. Where was I?")
    
    print_slow("\nI walked up to the village and immediately noticed a hustle and bustle of humans. Together, they weaved in and out, a system of souls, perusing what seemed to be vendors selling abundant apples and oranges and strawberries, hard commodities to come by underwater. I pulled a stranger aside, a pregnant woman with a pomegranate in hand.")
    
    print_slow('\n"Where am I?"')
    
    print_slow('\n"Where are you? You\'re on Earth, silly!"')
    
    print_slow('\n"Well, yes, but where am I? Are we still in the underwater bastion?"')
    
    print_slow('\n"Underwater bastion? Where?"')
    
    print_slow('\n"About 100 kilometers off the Japanese coast of the Pacific Ocean?"')
    
    print_slow('\n"What are you talking about? Of course we\'re not under an ocean?"')
    
    print_slow('\n"Then, what about the Titans?"')
    
    print_slow('\n"Oh, silly girl, where have you come from? What are these Titans you speak of?"')
    
    return play_again()

def play_again():
    choice = get_choice("\nPlay again? (Y/N): ")
    if choice == 'Y':
        return play_story()
    print("\nThank you for playing!")
    return

if __name__ == "__main__":
    print_slow("Welcome to the Dome")
    print_slow("A story of choices and consequences...")
    play_story() 