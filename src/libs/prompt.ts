export const prompt = (search: string) => {
  return `
        Dame los pros y contras de ${search} y en cada pro o contra agrega un campo de importance que vaya desde el 0 a 100. 
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
};
