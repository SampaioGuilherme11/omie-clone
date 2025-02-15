import { useState, useEffect } from "react";
import Button from "./ui/button";

// Palavras a serem digitadas
const palavras = ["controle", "resultado", "previsibilidade"];

const Apresentacao = () => {
  const [palavraIndex, setPalavraIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const palavraAtual = palavras[palavraIndex];

    if (!apagando) {
      if (charIndex < palavraAtual.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 120);
      } else {
        setTimeout(() => setApagando(true), 1500);
      }
    } else {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 100);
      } else {
        setApagando(false);
        setPalavraIndex((palavraIndex + 1) % palavras.length);
      }
    }
  }, [charIndex, apagando, palavraIndex]);

  return (
    <div className="flex h-[540px] items-center justify-evenly bg-[#00E2F4] pt-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-normal tracking-[0.1em]">
          OMIE SISTEMAS DE GESTÃO ONLINE
        </h1>
        <div className="mt-5">
          <h2 className="text-[32px] font-bold">Mais tempo para você.</h2>
          <h2 className="text-[32px] font-bold">
            Mais{" "}
            <span className="inline-block h-[70%] bg-[#D8FE00] px-2 leading-[70%] text-[#001e27]">
              {palavras[palavraIndex].substring(0, charIndex)}
            </span>
          </h2>
          <h2 className="text-[32px] font-bold">Para a sua empresa.</h2>
        </div>
        <p className="mt-4 text-lg font-medium">
          O sistema ERP que descomplica sua gestão.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            className="bg-[#001e27] text-[16px] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#001e277c]"
            buttonText="Quero Conhecer"
          />
          <Button
            className="border-2 border-[#001e27] bg-[#00E2F4] text-[16px] text-[#001e27] shadow-none transition-all hover:shadow-[0_5px_0_0_#001e277c]"
            buttonText="Veja planos e preços"
          />
        </div>
      </div>
      <div className="h-full">
        <img
          src="/public/banner-desk.webp"
          alt="Banner Empresa"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Apresentacao;
