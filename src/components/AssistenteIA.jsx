import { useState } from "react";

export default function AssistenteIA() {

  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  async function perguntarIA() {

    const req = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: pergunta
        })
      }
    );

    const data = await req.json();

    setResposta(data[0]?.generated_text || "Sem resposta");
  }

  return (
    <div>
      <h2>Assistente IA</h2>

      <input
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Pergunte algo..."
      />

      <button onClick={perguntarIA}>
        Perguntar
      </button>

      <p>{resposta}</p>
    </div>
  );
}
