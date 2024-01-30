import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DogCard from "./DogCard";
const DogApp = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [dogImageList, setDogImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDogImageList([
        ...dogImageList,
        { url: data.message, id: uuidv4(), likes: 0, comment: "" },
      ]);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getDog();
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setDogImage(data.message));
  }, []);

  // DELETE
  const onXClick = (id) => {
    setDogImageList(dogImageList.filter((el) => el.id !== id));
    console.log(id);
  };
  const onLikeClick = (id) => {
    setDogImageList(
      dogImageList.map((el) =>
        el.id === id ? { ...el, likes: el.likes + 1 } : el
      )
    );
  };

  // Comment

  const onCommentChange = (id, newComment) => {
    setDogImageList(
      dogImageList.map((el) =>
        el.id === id ? { ...el, comment: newComment } : el
      )
    );
  };

  return (
    <div className="container">
      <button className="getDog-btn" onClick={getDog}>
        {" "}
        {isLoading ? "loading..." : "Get dog"}
      </button>
      <div className="dog-card-list">
        {dogImageList.map((el) => (
          <DogCard
            imgSrc={el.url}
            countLikes={el.likes}
            id={el.id}
            onXClick={onXClick}
            onLikeClick={onLikeClick}
            onCommentChange={onCommentChange}
            key={el.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DogApp;
