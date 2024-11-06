import { useState, useEffect } from "react";
export default function PostCard({ title, body }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }