import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardBeneficios from "./ui/CardBeneficios";

const beneficios = [
  {
    id: "vendas",
    imgSrc: "/public/ico-controle.svg",
    altText: "engrenagem",
    titulo: "Vendas e NF-e",
    subtitulo: "Controle total da sua gestão de vendas",
    descricao:
      "A eficiência do processo de vendas é essencial para o sucesso da sua empresa. Venda mais com menos trabalho manual e atinja todo o potencial do seu negócio.",
    gif: "/public/vendas-e-nf-e.gif",
  },
  {
    id: "servicos",
    imgSrc: "/public/ico-guia.svg",
    altText: "serviços",
    titulo: "Serviços e NFS-e",
    subtitulo: "Sua gestão de serviços mais eficiente",
    descricao:
      "Tem muitos contratos para faturar? Com Omie você visualiza todos em uma única tela de gerenciamento e fatura tudo de uma só vez.",
    gif: "/public/servicos-e-nfs-e.gif",
  },
  {
    id: "financas",
    imgSrc: "/public/ico-compras.svg",
    altText: "finanças",
    titulo: "Finanças",
    subtitulo: "Controle financeiro empresarial e gestão simplificada",
    descricao:
      "Conquiste mais transparência e saiba como está a saúde financeira da sua empresa em tempo real.",
    gif: "/public/modulos-financeiro.gif",
  },
  {
    id: "estoque",
    imgSrc: "/public/ico-integracao.svg",
    altText: "integração",
    titulo: "Compras, estoque e produção",
    subtitulo: "Gestão inteligente de compras e estoque",
    descricao:
      "Evite prejuízos: gerencie seu estoque de maneira eficiente com a captura automática de NF-es e CT-es.",
    gif: "/public/compras-estoque-e-producao.gif",
  },
];

const SecaoBeneficios = () => {
  const [selectedCard, setSelectedCard] = useState("vendas");

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="max-w-[800px] pb-10 text-center text-3xl font-bold text-[#001E27]">
        Reduza custos e ganhe até 20x mais eficiência em suas operações
      </h2>

      <div className="flex w-full max-w-[1200px] items-center justify-between gap-6">
        <div className="flex w-[50%] flex-col gap-4">
          {beneficios.map((beneficio) => (
            <CardBeneficios
              key={beneficio.id}
              imgSrc={beneficio.imgSrc}
              altText={beneficio.altText}
              titulo={beneficio.titulo}
              subtitulo={beneficio.subtitulo}
              descricao={beneficio.descricao}
              isActive={selectedCard === beneficio.id}
              onClick={() => setSelectedCard(beneficio.id)}
            />
          ))}
        </div>

        <div className="relative flex justify-start">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedCard}
              src={beneficios.find((b) => b.id === selectedCard)?.gif}
              alt="GIF vendas"
              className="h-auto max-h-[350px] w-auto rounded-xl object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SecaoBeneficios;
