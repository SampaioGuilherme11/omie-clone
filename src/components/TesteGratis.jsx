import Button from "./ui/Button";

const TesteGratis = () => {
  return (
    <div className="flex items-center justify-center gap-[20%] bg-[#FF601F] py-[80px]">
      <div className="text-white">
        <h2 className="pb-[10px] text-3xl font-bold">
          Teste grátis por 7 dias
        </h2>
        <p className="max-w-[320px] pb-[40px]">
          Reduza custos e aumente a eficiência da sua empresa
        </p>
        <Button
          className="bg-[#001e27] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#001e277c]"
          buttonText="Teste grátis"
        />
      </div>
      <div className="h-full w-[32%] rounded-2xl border border-[#bebebe] bg-white p-[16px]">
        <div className="flex justify-between rounded-[8px] border border-[#bebebe] p-4">
          <h3 className="text-[20px] font-bold text-[#001E27]">Omie ERP</h3>
          <img src="/public/modulos.png" alt="modulos" />
        </div>
        <div className="flex flex-col items-center pt-5">
          <h4 className="text-[24px]">
            7 dias <span className="font-bold">grátis</span>
          </h4>
          <p className="flex min-h-[90px]">
            <span className="flex items-start pt-[25px] font-bold">R$</span>
            <span className="text-[80px] font-bold">0</span>
            <span className="flex items-center pt-[35px] font-bold">,00</span>
          </p>
        </div>
        <ul className="flex flex-col gap-2.5">
          <li className="flex gap-[8px]">
            <img src="/public/check-bg-petroleo.svg" alt="checkbox" />
            Sistema 100% na nuvem
          </li>
          <li className="flex gap-[8px]">
            <img src="/public/check-bg-petroleo.svg" alt="checkbox" />
            Suporte premium ao cliente
          </li>
          <li className="flex gap-[8px]">
            <img src="/public/check-bg-petroleo.svg" alt="checkbox" />
            Não precisa de cartão de crédito
          </li>
          <li className="flex gap-[8px]">
            <img src="/public/check-bg-petroleo.svg" alt="checkbox" />
            Cancelamento rápido e a qualquer momento
          </li>
          <li className="flex gap-[8px]">
            <img src="/public/check-bg-petroleo.svg" alt="checkbox" />
            Contratação online, simples e super prática
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TesteGratis;
