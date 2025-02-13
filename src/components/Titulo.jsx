import Button from "./ui/button";

const Titulo = () => {
  return (
    <div className="flex h-16 items-center justify-center gap-5 bg-[#FF601F] pt-4 pb-4">
      <h1 className="text-base font-normal text-white">
        Mais controle e melhores resultados
      </h1>
      <Button props="bg-[#001E27]" buttonText="Teste grátis"></Button>
    </div>
  );
};

export default Titulo;
