"use client";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import styles from "./page.module.scss";
import React, { useState, useRef, useEffect } from "react";
import Chart from "@/components/organisms/Chart";
import Search from "@/components/organisms/Search";
import APIKey from "@/components/organisms/APIKey";
import Ad from "@/components/atoms/Ad";
import Logs from "@/components/organisms/Logs";
import { prompt } from "@/libs/prompt";
import { Toaster, toast } from "sonner";
import Spinner from "@/components/atoms/Spinner";

export default function Home() {
  const textAreaRef = useRef<any>(null);
  const [spinner, setSpinner] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [modelInput, setModelInput] = useState("llama-3-sonar-small-32k-chat");
  const [search, setSearch] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [response, setResponse] = useState("");

  // Configuración del proveedor de OpenAI con la clave de API
  const openaiProvider = createOpenAI({
    apiKey: apiKey,
    baseURL: "https://api.perplexity.ai",
    compatibility: "compatible", // Modo estricto para usar la API de OpenAI
  });

  const fetchStreamingText = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (apiKey.length === 0) {
      toast("Debes introducir tu Perplexity API Key");
      return;
    }
    setIsStreaming(true);
    try {
      const model = openaiProvider.chat(modelInput);
      const { textStream } = await streamText({
        model: model,
        prompt: prompt(search === "" ? "ser un hombre" : search),
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
      toast("Error solicitando los datos.");
    } finally {
      setIsStreaming(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.main}>
      <APIKey apiKey={apiKey} setApiKey={setApiKey} modelInput={modelInput} setModelInput={setModelInput} />
      <Search
        search={search}
        setSearch={setSearch}
        fetchStreamingText={fetchStreamingText}
        setIsStreaming={setIsStreaming}
      />
      <Chart response={response} isStreaming={isStreaming} />
      <Logs response={response} textAreaRef={textAreaRef} />
      <Ad />
      <Toaster style={{ fontFamily: "var(--motiva400)" }} />
      {spinner && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
    </div>
  );
}
