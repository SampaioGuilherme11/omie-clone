import Button from "./ui/button";

const DepoimentoClientes = () => {
  return (
    <div className="flex justify-center gap-[50px] bg-[#001E27] py-[80px]">
      <div className="flex max-w-[650px] flex-col gap-5">
        <h2 className="text-[35px] font-bold text-[#FF601F]">
          Depoimentos de nossos clientes e parceiros
        </h2>
        <p className="max-w-[650px] text-white">
          Nossos clientes falam sobre o impacto que o sistema de gestão Omie
          teve na aceleração do crescimento dos seus negócios.
        </p>
        <div className="flex gap-2.5">
          <Button
            className="h-[40px] bg-[#fff] text-[16px] text-[#001E27] shadow-none transition-all hover:shadow-[0_5px_0_0_#ffffffa4]"
            buttonText="Quero conhecer"
          />
          <Button
            className="h-[40px] border-2 border-white bg-[#001E27] text-[16px] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#ffffff7e]"
            buttonText="Outros depoimentos"
          />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <a
          href="https://www.youtube.com/watch?v=tJMkPgz_bdg&list=PLT_nh7d0FvPX2fiwADvgHlxd3Z2ePKFrK&index=6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative">
            <img
              src="/public/capa-1.webp"
              alt="PESSOA 1"
              className="rounded-[15px]"
            />
            <img
              src="/public/play-dep.png"
              alt="Play"
              className="absolute top-1/2 left-34 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform"
            />
          </div>
          <h3 className="font-medium text-[#FF601F]">Marcelo Galbe</h3>
          <h4 className="font-medium text-white">INOVTI</h4>
          <p className="max-w-[300px] text-[15px] text-white">
            &quot;Não preciso acessar o banco para ver meu extrato bancário,
            faço isso com o Omie. Antes gastávamos dias tentando reconciliar,
            hoje esse processo é diário.&quot;
          </p>
        </a>
        <a
          href="https://www.youtube.com/watch?v=MGXit9fRTGA&list=PLT_nh7d0FvPX2fiwADvgHlxd3Z2ePKFrK&index=10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative">
            <img
              src="/public/capa-2.webp"
              alt="PESSOA 2"
              className="rounded-[15px]"
            />
            <img
              src="/public/play-dep.png"
              alt="Play"
              className="absolute top-1/2 left-34 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform"
            />
          </div>
          <h3 className="font-medium text-[#FF601F]">Joice Andrade</h3>
          <h4 className="font-medium text-white">Bolos da Dinda</h4>
          <p className="max-w-[300px] text-[15px] text-white">
            &quot;O fato da Omie ser totalmente online possibilitou que eu
            trabalhe de casa, então passei grande parte da minha
            licença-maternidade acompanhando tudo que acontecia na empresa
            através do sistema.&quot;
          </p>
        </a>
      </div>
    </div>
  );
};

export default DepoimentoClientes;
