"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onResponse: (response) => {
      console.log(response);
    },
    onFinish: () => {
      console.log("finish");
    },
    body: {
      foo: "bar",
    },
  });
  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? "user" : "assistant"}
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} className="border" />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}
