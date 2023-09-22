"use client";

import React, { useState, useEffect } from "react";
import UnoptimizedNextImage from "@/components/UnoptimizedNextImage";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

export default function NotFound() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState<string | null>(
    "Let's head back home and give the cat a break.",
  );
  const router = useRouter();

  const startGame = () => {
    setGameStarted(true);
  };

  const incrementScore = () => {
    if (gameStarted) {
      setScore(score + 1);

      if (score + 1 === 10) {
        setMessage(
          "Stop, please don't click this cute cat or you will regret it!",
        );
      } else if (score + 1 === 20) {
        setMessage("Seriously, you don't want to continue, trust me!");
      } else if (score + 1 === 25) {
        setMessage("Last warning! You're about to enter the danger zone!");
      } else if (score + 1 === 30) {
        setMessage("I told you!");
        new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
          router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        });
      }
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
  };

  useEffect(() => {
    if (score >= 100) {
      resetGame();
    }
  }, [score]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <UnoptimizedNextImage
        src="/images/not-found.gif"
        width={300}
        height={300}
        alt={gameStarted ? "cute cat is clicked by you" : "not found"}
        onClick={gameStarted ? incrementScore : startGame}
      />
      <h1 className="mt-4 text-center text-3xl">Oops! Page not found</h1>
      <p className="mt-2 text-center text-gray-600">
        {gameStarted
          ? message
          : "Don't worry, even the best of us get lost sometimes"}
      </p>
      {gameStarted ? (
        <>
          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={resetGame}
          >
            Go Back!!!
          </button>
        </>
      ) : (
        <Link
          as={NextLink}
          href={"/"}
          className="mt-4 text-blue-500 hover:underline"
        >
          Go back to the home page
        </Link>
      )}
    </div>
  );
}
