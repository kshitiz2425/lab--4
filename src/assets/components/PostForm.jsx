import { useState, useEffect } from "react";
export default function PostForm({ title, body, onInputChange, onFormSubmit }) {
    return (
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={body}
            onChange={onInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }