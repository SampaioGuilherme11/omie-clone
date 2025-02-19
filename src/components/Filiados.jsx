import Button from "./ui/button";

const Filiados = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#00E2F4] py-[50px]">
      <div>
        <img src="/public/faixa-franqui-mob.webp" alt="franqueado" />
      </div>
      <div>
        <h2 className="max-w-[800px] pb-[20px] text-4xl font-bold text-[#001E27]">
          Já somos mais de 130 franquias revolucionando o empreendedorismo
          brasileiro. Venha ser um franqueado Omie.
        </h2>
        <Button
          className="h-[40px] bg-[#d8fe00] text-[18px] text-[#001E27] shadow-none transition-all hover:shadow-[0_5px_0_0_#98b300c9]"
          buttonText="Seja Franqueado"
        />
      </div>
    </div>
  );
};

export default Filiados;
