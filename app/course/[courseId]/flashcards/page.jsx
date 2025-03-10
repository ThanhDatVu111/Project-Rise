"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FlashcardItem from "./_components/FlashcardItem";

function Flashcards() {
  const { courseId } = useParams();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState(); // It listens for when a user selects a new flashcard.
  // When a new flashcard is selected, useEffect() resets the flipped state.
  // This ensures that every new flashcard starts on the front side.

  useEffect(() => {
    GetFlashCards();
  }, []); // Empty array means it will run only once (when the component mounts)

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setIsFlipped(false); //// Reset flipped state when switching flashcards
    });
  }, [api]); //

  const GetFlashCards = async () => {
    try {
      console.log("Fetching flashcards for courseId:", courseId);

      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "Flashcard",
      });

      console.log("Flashcards API Response:", result.data);
      setFlashCards(result?.data?.content || []); // Update flashCards
      // Log the data you're about to store in state
      console.log("Setting flashCards with:", result?.data?.content || []);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const handleClick = (index) => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Flashcards</h2>
      <p>Flashcards: The Ultimate Tool to Lock in Concepts!</p>
      <div className=" mt-10">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards.map((flashcard, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <FlashcardItem
                  handleClick={handleClick}
                  isFlipped={isFlipped}
                  flashcard={flashcard}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcards;