import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./ui/Button";
import DropDownMenu from "./ui/DropDownMenu";

const Header = () => {
  return (
    <header className="flex h-[93px] w-full justify-between bg-[#001E27] pt-[20px] pr-[32px] pb-[20px] pl-[32px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.51)]">
      <div>
        <img src="/logo-omie.png" alt="Logo da empresa" />
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-6 text-base font-medium text-[#9b9b9b]">
          <li className="cursor-pointer p-2 transition-all duration-200 ease-linear hover:text-white">
            Para Empresas
          </li>
          <li className="cursor-pointer p-2 transition-all duration-200 ease-linear hover:text-white">
            Para Colaboradores
          </li>
          <li className="cursor-pointer p-2 transition-all duration-200 ease-linear hover:text-white">
            Preços
          </li>
          <li className="cursor-pointer p-2 transition-all duration-200 ease-linear hover:text-white">
            Funcionalidades
          </li>

          {/* Dropdown Segmentos */}
          <DropDownMenu
            trigger={
              <>
                Segmentos <FontAwesomeIcon icon={faChevronDown} />
              </>
            }
            items={[
              "Comércio",
              "Serviços",
              "Tecnologia",
              "Indústria",
              "E-commerce",
              "Varejo e atacado",
              "Restaurantes",
              "Marketing e propaganda",
              "Transportadoras",
              "Distribuidoras",
              "Consultórios e clínicas médicos",
            ]}
            menuWidth="w-[260px]"
          />

          {/* Dropdown Explore */}
          <DropDownMenu
            trigger={
              <>
                Explore <FontAwesomeIcon icon={faChevronDown} />
              </>
            }
            items={[
              "Soluções Financeiras",
              "Seja um franqueado",
              "Omie.Store",
              "Índice econômico",
              "Omie.Academy",
              "Blog",
              "Sobre a Omie",
              "Fale conosco",
            ]}
            menuWidth="w-[180px]"
          />

          <li className="cursor-pointer p-2 transition-all duration-200 ease-linear hover:text-white">
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
