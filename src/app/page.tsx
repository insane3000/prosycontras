"use client";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Chart from "@/components/molecules/Chart";

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

function extractJSON(text: string) {
  // Expresión regular para buscar el contenido JSON entre corchetes
  const jsonPattern = /\[\s*{[\s\S]*?}\s*]/;
  const match = text.match(jsonPattern);

  if (match) {
    try {
      // Parsear el JSON encontrado
      const jsonObject = JSON.parse(match[0]);
      return jsonObject;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  } else {
    console.error("No JSON found in the text");
    return null;
  }

  //   const matches = [];
  //   let match;

  //   while ((match = jsonPattern.exec(text)) !== null) {
  //     try {
  //       const jsonObject = JSON.parse(match[1]);
  //       matches.push(jsonObject);
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   }
  //   const data = matches[0]?.map((item: any) => {
  //     const key = item.pro ? "pro" : "contra";
  //     return {
  //       type: key,
  //       description: item[key],
  //       importance: item.importance,
  //     };
  //   });
  //   return data;
}
// Componente de React
export default function Home() {
  const [response, setResponse] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const textAreaRef = useRef<any>(null);

  useEffect(() => {
    const prompt = `
Dame los pros y contras de ser un hacker y en cada pro o contra agrega un campo de importance que vaya desde el 0 a 100. 
Devuélveme los resultados en el siguiente formato JSON y ordena primero los pros:
[
    {
        "type": "pro",
        "description": "Mayor longevidad",
        "importance": 85
    },
    {
        "type": "contra",
        "description": "Menor representación en la toma de decisiones",
        "importance": 10
    },
    ...
]

Asegúrate de incluir "type" en lugar de "pro" o "contra" y "description" para la descripción de cada pro o contra, seguido de "importancia_racional".

      `;

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

  const data = extractJSON(response);
  console.log(data);

  return (
    <div>
      {isStreaming ? <p>Loading...</p> : <Chart data={data} />}

      <textarea className={styles.main} value={response} readOnly ref={textAreaRef}></textarea>
    </div>
  );
}
