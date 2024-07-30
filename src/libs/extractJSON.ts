import { toast } from "sonner";

export function extractJSON(text: string) {
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
      toast("Error parsing JSON");
      return [];
    }
  } else {
    console.error("No JSON found in the text");
    return [];
  }
}
