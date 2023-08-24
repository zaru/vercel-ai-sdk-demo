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
    <div className="h-screen">
      <div className="h-full overflow-hidden">
        <div className="flex h-full flex-col gap-4 overflow-scroll p-8 pb-32">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 ${
                message.role === "user" ? "bg-white" : "bg-gray-50"
              }`}
            >
              {message.role === "user" ? "user" : "assistant"}
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-6 right-6 z-10 bg-transparent"
      >
        <div className="relative flex items-center justify-center bg-transparent p-4">
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full rounded-xl border p-4 pr-20 shadow-md"
            placeholder="メッセージを入力"
          />
          <button
            type="submit"
            className="absolute right-8 rounded-md bg-sky-600 px-2 py-1.5 text-sm text-white"
          >
            投稿
          </button>
        </div>
      </form>
    </div>
  );
}
