// Ultimate MoodBoard of My Queen 💖 - Max Cringe Supreme Edition 😭💘✨
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const moods = [
  { emoji: "🥰", label: "Loved" },
  { emoji: "😞", label: "Meh" },
  { emoji: "😡", label: "Angy" },
  { emoji: "😭", label: "Crybaby" },
  { emoji: "😇", label: "Okay-ish" },
  { emoji: "💅", label: "Slayin'" },
  { emoji: "🤧", label: "Need Cuddles" },
  { emoji: "🧚‍♀️", label: "Fairycore" }
];

const cuteMessages = {
  "😞": [
    "Who made my sunshine sad?! 100 kisses on the way 😘💋",
    "Meh days deserve extra hugs. Sending warm cuddles rn 🧸💖",
    "I'm gonna wrap you up like a burrito of love 🌯❤️",
    "Sending a pizza topped with love & extra hugs 🍕💕"
  ],
  "😡": [
    "Tell me who to punch, baby 🥊🐻",
    "Grrr! Even your anger is cute 😤💕",
    "I’ll roar louder than you until you smile 🦁💘",
    "I'm your personal rage-absorbing teddy bear 🧸🔥"
  ],
  "😭": [
    "Don’t cry or I’ll cry too 🥺 Let’s sob together",
    "Tears? Who allowed that? Sending 3 truckloads of comfort 🛻🧸",
    "I’ve bottled every tear into a potion of love ✨💧❤️",
    "You cry, I hug. That’s the deal 🤗💕"
  ],
  "🥰": [
    "You’re my reason to blush, cupcake 🧁",
    "You're cuter than 1000 puppies in bowties 🐶🎀",
    "If sweetness was a person, it's YOU 🍯💕",
    "You're the spoonful of sugar in my coffee ☕💞"
  ],
  "💅": [
    "You slay harder than Beyoncé ✨💃",
    "Walk it like the queen you are 💃👑",
    "You're a masterpiece on runway mode 🔥💅",
    "Every step you take deserves a runway ✨"
  ],
  "🤧": [
    "Cuddles en route! 🐻💕",
    "Permission to teleport & hug you: GRANTED 🛸🤗",
    "Emergency cuddle protocol: Activated! 🚨🫂💞",
    "Fluffy blanket mode: Engaged 🧣💗"
  ],
  "🧚‍♀️": [
    "Sprinkling love dust on you ✨💖",
    "Fairies called. They said you're the queen 🧚‍♀️👑",
    "Twinkle toes and cotton candy hugs coming 🩰🍬",
    "You're more magical than moonlight & glitter 🌙✨"
  ],
  "😇": [
    "Stay soft and angelic, sweet pea 🪽",
    "Your halo's shining bright today 💫😇",
    "You're the peace in my storm 🌤️💝",
    "Even angels wish they were you 😇💕"
  ]
};

const compliments = [
  "You're my favorite notification 💬💕",
  "You make the moon jealous with that glow 🌕✨",
  "Your smile cures Mondays 😁💊",
  "You’re my favorite person to annoy 🐣💘",
  "If loving you was a subject, I’d top the class 💯📚",
  "You're the marshmallow in my hot cocoa ☕🍥",
  "My heart does cartwheels when I hear your voice 🤸‍♂️💓",
  "You're art, poetry, and chaos — all in the best way 🎨📖💥",
  "Every day with you is a confetti party 🎉💖",
  "You're the reason stars twinkle 🌟🥺"
];

export default function MoodBoardForMyQueen() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [grievance, setGrievance] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [audio, setAudio] = useState(null);
  const [reward, setReward] = useState(null);

  const handleSubmit = () => {
    setSubmitted(true);
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const getRandomCuteMessage = (mood) => {
    const messages = cuteMessages[mood];
    return messages ? messages[Math.floor(Math.random() * messages.length)] : "I'm always here for you 💗";
  };

  const handleReward = () => {
    const randomGift = [
      "🎟 Free kiss coupon — redeemable anytime 💋",
      "📜 One random poem coming your way 💖 Roses are red...",
      "🍫 You get a surprise sweet delivery next date!",
      "🧸 10-minute forehead kiss reserved just for you 💕"
    ];
    setReward(randomGift[Math.floor(Math.random() * randomGift.length)]);
    setTimeout(() => setReward(null), 7000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCompliment(compliments[Math.floor(Math.random() * compliments.length)]);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 p-6 flex flex-col items-center relative overflow-hidden">
      <Confetti recycle={submitted} numberOfPieces={submitted ? 300 : 0} />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pink-700 mb-4"
      >
        MoodBoard of My Queen 👑💭
      </motion.h1>

      <p className="text-lg text-center text-pink-600 mb-6">
        Because your feelings deserve royal treatment 💌✨
      </p>

      <Card className="w-full max-w-lg bg-white p-4 rounded-2xl shadow-xl">
        <CardContent>
          <h2 className="text-xl font-semibold text-center mb-4">How are you feeling today, love? 🥺</h2>
          <div className="grid grid-cols-4 gap-3 justify-items-center">
            {moods.map((mood) => (
              <button
                key={mood.label}
                className={`text-3xl hover:scale-125 transition-all ${
                  selectedMood === mood.emoji ? "drop-shadow-lg" : ""
                }`}
                onClick={() => setSelectedMood(mood.emoji)}
              >
                {mood.emoji}
              </button>
            ))}
          </div>

          <textarea
            className="w-full mt-6 p-3 rounded-xl border-pink-300 border-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows={5}
            placeholder="Tell me what’s in that beautiful brain 💕🧠"
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
          />

          <label className="block mt-4 text-pink-700 font-medium">
            Upload voice note if words are too hard 🥺🎙️
            <input
              type="file"
              accept="audio/*"
              onChange={handleAudioChange}
              className="block w-full mt-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-200 file:text-pink-700 hover:file:bg-pink-300"
            />
          </label>

          <Button
            onClick={handleSubmit}
            className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white"
          >
            Submit 🐻💖
          </Button>

          {submitted && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 p-3 bg-pink-200 rounded-xl text-center"
            >
              <p>{getRandomCuteMessage(selectedMood)}</p>
              <p className="mt-2 italic text-sm text-pink-800">💘 {compliment}</p>
            </motion.div>
          )}

          <Button
            onClick={handleReward}
            className="w-full mt-3 bg-yellow-300 hover:bg-yellow-400 text-pink-800"
          >
            Reward Me! 🎁💝
          </Button>

          {reward && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center p-3 bg-yellow-100 rounded-xl"
            >
              <p className="text-sm font-medium">{reward}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

