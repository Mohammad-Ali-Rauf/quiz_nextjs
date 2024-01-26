"use client";

import React, { useState } from "react";
import { quizData } from "@/app/constants";
import { useRouter } from "next/navigation";

interface Props {
  searchParams: {
    maxQuestions: number;
    userAnswers: string[];
  };
}

const Results = ({ searchParams: { userAnswers, maxQuestions } }: Props) => {

  const { push } = useRouter()

  if (!userAnswers || !maxQuestions) {
    push('/')
  }

  const correctAnswersCount = userAnswers?.reduce(
    (count, userAnswer, index) =>
      userAnswer === quizData[index].correctAnswer ? count + 1 : count,
    0,
  );

  // State to manage modal visibility
  const [showSurpriseModal, setShowSurpriseModal] = useState(
    correctAnswersCount === maxQuestions,
  );

  const openSurpriseModal = () => {
    setShowSurpriseModal(true);
  };

  const closeSurpriseModal = () => {
    setShowSurpriseModal(false);
  };

  // Unique surprise for the user when all answers are correct
  const surpriseModal = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-center">
        <p className="mb-4 text-2xl font-bold text-yellow-300">
          🎉 Congratulations! You got all answers correct! 🎉
        </p>
        <button
          onClick={closeSurpriseModal}
          className="rounded-md bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500"
        >
          Let&apos;s Celebrate
        </button>
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-700 to-purple-800 p-4 text-white md:p-6">
      <div className="w-full max-w-full rounded-lg bg-gray-800 p-4 shadow-lg md:max-w-4xl md:p-8">
        <h1 className="mb-4 text-center text-3xl font-bold text-yellow-400 md:mb-8 md:text-4xl lg:text-5xl">
          🌟 Your Results 🌟
        </h1>
        {showSurpriseModal && surpriseModal}
        <div className="mb-4 text-lg md:mb-8 md:text-xl">
          <p className="mb-2 flex justify-center text-xl md:mb-4 md:text-2xl">
            Your Score:{" "}
            <span className="pl-2 text-purple-400">{correctAnswersCount}</span>
          </p>
          <p className="mb-2 flex justify-center text-2xl md:mb-4 md:text-3xl">
            Your Answers:
          </p>
          <ul className="pl-2 md:pl-6">
            {userAnswers?.map((userAnswer, index) => {
              const correctAnswer = quizData[index].correctAnswer;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <li
                  key={index}
                  className={`mb-2 md:mb-4 ${
                    isCorrect ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-base md:text-lg lg:text-xl">
                      {index + 1}.
                    </span>
                    <span className="text-sm md:text-base">
                      {userAnswer}{" "}
                      {!isCorrect && (
                        <>
                          <span className="text-white">|{"  "}</span>
                          <span className="text-gray-300">
                            The correct answer is:{" "}
                          </span>
                          <span className="text-green-500">
                            {correctAnswer}
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {correctAnswersCount === maxQuestions && (
          <button
            onClick={openSurpriseModal}
            className=" w-full rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-white hover:from-yellow-500 hover:to-orange-600 focus:border-yellow-500 focus:outline-none focus:ring"
          >
            Celebrate My Success! 🎉🎉🎉
          </button>
        )}
      </div>
    </main>
  );
};

export default Results;
