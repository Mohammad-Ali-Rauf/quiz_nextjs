"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { quizData } from "../app/constants";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>();
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const question = quizData[currentQuestionIndex];
  const maxQuestions = 6;

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setError("");
      setUserAnswers((prevAnswers: string[]) => [...prevAnswers, selectedOption]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    } else {
      setError("Please select an option before moving to the next question.");
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setError("");
  };

  const handleClick = () => {
    setLoading(true);
    push("results");
    setLoading(false);
  };

  const renderQuestion = () => {
    return (
      <div className="w-full rounded-md bg-gray-800 p-8 shadow-md md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-wider text-blue-400">
          🚀 Welcome to the Quiz 🚀
        </h1>

        {error && (
          <div className="mb-4 rounded-md bg-rose-500 p-3 text-center text-white">
            {error}
          </div>
        )}

        <section className="mb-8 rounded-md bg-gray-700 p-6">
          <p className="mb-4 text-lg font-semibold tracking-wider text-white">
            {question.question}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`${
                  selectedOption === option
                    ? "bg-teal-500 hover:bg-teal-700"
                    : "bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
                } transform text-wrap rounded-md p-4 tracking-wider text-white transition duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        {currentQuestionIndex < maxQuestions - 1 ? (
          <button
            className="w-full transform rounded-md bg-green-600 px-6 py-3 text-lg text-white transition duration-300 hover:bg-green-700 focus:border-green-300 focus:outline-none focus:ring"
            onClick={handleNextQuestion}
            disabled={loading}
          >
            Next Question
          </button>
        ) : (
          <button>
            <Link
              href={{
                query: {
                  userAnswers: userAnswers,
                  maxQuestions: maxQuestions
                },
                pathname: "/results",
              }}
              className="w-full transform rounded-md bg-yellow-600 px-6 py-3 text-lg text-white transition duration-300 hover:bg-yellow-700 focus:border-blue-300 focus:outline-none focus:ring"
              onClick={handleClick}
            >
              Calculate Results
            </Link>
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      {currentQuestionIndex < maxQuestions ? renderQuestion() : null}
    </main>
  );
};

export default Home;
