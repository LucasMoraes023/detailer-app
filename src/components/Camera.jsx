import { useRef } from "react";

export default function Camera() {

  const fileInput = useRef();

  return (
    <div>
      <h2>Fotos do Carro</h2>

      <input
        ref={fileInput}
        type="file"
        accept="image/*"
        capture="environment"
      />
    </div>
  );
}
