const SobreMercado = () => {
  return (
    <div className="flex h-[560px] items-center justify-evenly py-[80px]">
      <div className="flex flex-col gap-[20px]">
        <h2 className="max-w-[540px] text-[40px] font-bold text-[#001E27]">
          Estamos revolucionando o mercado
        </h2>
        <p className="max-w-[550px] text-[20px] text-[#001E27]">
          A Omie une liberdade e conhecimento para superar qualquer barreira.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-[35px]">
          <li className="flex min-h-[85px] w-full items-center gap-1.5 rounded-lg bg-white p-[16px] shadow-[1px_1px_16px_1px_rgba(0,0,0,0.15)]">
            <span className="text-[35px] font-bold">+ de R$ 31 Bi</span>{" "}
            <span className="text-[30px]">Notas emitidas por mês</span>
          </li>
          <li className="flex min-h-[85px] w-full items-center gap-1.5 rounded-lg bg-white p-[16px] shadow-[1px_1px_16px_1px_rgba(0,0,0,0.15)]">
            <span className="text-[35px] font-bold">+ de 130</span>{" "}
            <span className="text-[30px]">Franquias Omie</span>
          </li>
          <li className="flex min-h-[85px] w-full items-center gap-1.5 rounded-lg bg-white p-[16px] shadow-[1px_1px_16px_1px_rgba(0,0,0,0.15)]">
            <span className="text-[35px] font-bold">+ de 170K</span>{" "}
            <span className="text-[30px]">Clientes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SobreMercado;
