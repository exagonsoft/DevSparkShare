"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("api/prompt");
        const promptsList = await res.json();
        const prompts = JSON.parse(promptsList);

        // Ensure that the received data is an array
        if (Array.isArray(prompts)) {
          setPosts(prompts);
        } else {
          console.error("Error: Data received is not an array");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
