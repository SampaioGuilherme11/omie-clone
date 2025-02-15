import CardBeneficios from "./ui/CardBeneficios";

const SecaoBeneficios = () => {
  return (
    <div className="pt-[80px] pb-[80px]">
      <h2 className="text-center text-[30px] font-bold text-[#001E27]">
        Reduza custos e ganhe até 20x mais eficiência em suas operações
      </h2>
      <CardBeneficios
        imgSrc="/public/ico-controle.svg"
        altText="engrenagem"
        titulo="Vendas e NF-e"
        subtitulo="Controle total da sua gestão de vendas"
        descricao="A eficiência do processo de vendas é essencial para o sucesso da sua empresa. Venda mais com menos trabalho manual e atinja todo o potencial do seu negócio."
      />
    </div>
  );
};

export default SecaoBeneficios;
