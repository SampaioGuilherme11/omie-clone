import Button from "./ui/Button";

const Iode = () => {
  return (
    <>
      <div className="flex justify-evenly bg-[#001E27] py-[80px]">
        <div>
          <h2 className="text-[17px] font-bold text-[#00E2F4]">IODE-PMEs</h2>
          <p className="max-w-[520px] pb-[40px] text-2xl font-bold text-white">
            Entenda o comportamento do mercado de pequenas e médias empresas no
            Brasil e tome decisões assertivas para o seu negócio
          </p>
          <Button
            className="bg-[#00e4f4] text-[17px] text-[#001E27] shadow-none transition-all hover:shadow-[0_5px_0_0_#00e4f46e]"
            buttonText="Acesse o relatório"
          />
        </div>
        <div className="flex items-center">
          <img src="/public/logo-faixa-iode.webp" alt="Logo Iode" />
        </div>
      </div>
      <div className="flex min-h-[109px] items-center justify-evenly bg-[#F7F7F7] px-[12px] py-[20px]">
        <img src="/public/empresas/logo-astella.png" alt="astella" />
        <img src="/public/empresas/logo-softbank.png" alt="astella" />
        <img src="/public/empresas/logo-riverwood.png" alt="astella" />
        <img src="/public/empresas/logo-aws.png" alt="astella" />
      </div>
    </>
  );
};

export default Iode;
