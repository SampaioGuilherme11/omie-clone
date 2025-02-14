import Button from "./ui/button";

const Titulo = () => {
  return (
    <div className="flex h-[70px] w-full items-center justify-center gap-5 bg-[#FF601F] pt-4 pb-4">
      <h1 className="text-base font-normal text-white">
        Mais controle e melhores resultados
      </h1>
      <Button
        className="bg-[#001e27] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#001e277c]"
        buttonText="Teste grátis"
      />
    </div>
  );
};

export default Titulo;
