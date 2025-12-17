import React, { useState } from "react";

export default function MovieForm(props) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    props.addMovie({ title, comment, rating });
    setTitle("");
    setComment("");
    setRating(0);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  
  function handleRatingChange(event) {
    setRating(Number(event.target.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Movie title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <label>Rating:</label>
      <select
        value={rating}
        onChange={handleRatingChange}
      >
        <option value={0}>0</option>
        <option value={1}>1⭐</option>
        <option value={2}>2⭐</option>
        <option value={3}>3⭐</option>
        <option value={4}>4⭐</option>
        <option value={5}>5⭐</option>
      </select>
      <button type="submit">Add Movie</button>
    </form>
  );
}