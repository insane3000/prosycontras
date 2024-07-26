"use client";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

// Reemplaza esto con tu clave de API de OpenAI
const apiKey = "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";

if (!apiKey) {
  throw new Error("La clave de API es necesaria.");
}

// Configuración del proveedor de OpenAI con la clave de API
const openaiProvider = createOpenAI({
  apiKey: apiKey,
  baseURL: "https://api.perplexity.ai",
  compatibility: "compatible", // Modo estricto para usar la API de OpenAI
});

// Componente de React
export default function Home() {
  const [response, setResponse] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const textAreaRef = useRef<any>(null);

  useEffect(() => {
    const prompt = "Dame los Pros y contras de ser un hombre y dame los resultados en formato json";

    async function fetchStreamingText() {
      setIsStreaming(true);

      try {
        const model = openaiProvider.chat("llama-3-sonar-small-32k-chat");

        const { textStream } = await streamText({
          model: model,
          prompt: prompt,
        });

        let accumulatedText = "";

        for await (const textPart of textStream) {
          accumulatedText += textPart;
          setResponse(accumulatedText);
          // Scroll to the bottom to show the latest text
          if (textAreaRef.current) {
            textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
          }
        }

      } catch (error) {
        console.error("Error fetching streaming text:", error);
      } finally {
        setIsStreaming(false);
      }
    }

    fetchStreamingText();
  }, []);

  return (
    <div>
      <textarea
        className={styles.main}
        value={response}
        readOnly
        ref={textAreaRef}
      ></textarea>
      {isStreaming && <p>Loading...</p>}
    </div>
  );
}
