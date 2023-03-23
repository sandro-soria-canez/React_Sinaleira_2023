import "./styles.css";
import { useState } from "react";
export default function App() {
  // useState: permite rastrear o estado em um componente de função.
  const [foto, setFoto] = useState("vermelho.png");
  const [mensa, setmensa] = useState("Proibido passar");
  function trocacor() {
    let novafoto;
    if (foto === "vermelho.png") {
      novafoto = "verde.png";
    } else if (foto === "amarelo.png") {
      novafoto = "vermelho.png";
    } else {
      novafoto = "amarelo.png";
    }
    if (novafoto === "vermelho.png") {
      setmensa("Proibido passar");
    } else if (novafoto === "amarelo.png") {
      setmensa("Atenção, Cuidado");
    } else {
      setmensa("Pode passar");
    }
    setFoto(novafoto);
  }

  return (
    <div className="text-center">
      <h1>Educação do trânsito : Semáforo</h1>
      <img src={foto} alt="sinaleira" onClick={trocacor} />

      <h3 className="mt-3">{mensa}</h3>
    </div>
  );
}
