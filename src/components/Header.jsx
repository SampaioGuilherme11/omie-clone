import Button from "./ui/button";

const Header = () => {
  return (
    <header className="flex h-[93px] w-full justify-between bg-[#001E27] pt-[20px] pr-[32px] pb-[20px] pl-[32px]">
      <div>
        <img src="/public/logo-omie.png" alt="Logo da empresa" />
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-6 text-sm font-medium text-[#9b9b9b]">
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Para Empresas
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Para Colaboradores
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Preços
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Funcionalidades
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Segmentos
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Explore
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-linear hover:text-white">
            Entrar
          </li>
        </ul>
        <Button
          className="h-[40px] bg-[#d8fe00] text-[#001E27] shadow-none transition-all hover:shadow-[0_5px_0_0_#d8fe007a]"
          buttonText="Quero conhecer"
        />
        <Button
          className="h-[40px] border-2 border-white bg-[#001E27] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#ffffff7e]"
          buttonText="Experimente grátis"
        />
      </div>
    </header>
  );
};

export default Header;
