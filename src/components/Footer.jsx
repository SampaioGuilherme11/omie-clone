import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between px-[40px] py-[50px] text-[#001E27]">
          <div>
            <h2 className="font-bold">A Omie</h2>
            <ul className="font-medium text-[#5d6263]">
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Quem somos
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Carreiras
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Sala de imprensa
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Indique Omie
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Afiliados
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Compliance e canal de denúncias
              </li>
              <li className="hover:text-[#001E27]">Transparência salarial</li>
            </ul>
          </div>
          <div>
            <div>
              <h2 className="font-bold">Empresas</h2>
              <ul className="font-medium text-[#5d6263]">
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Omie para empresas
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Planos e preços
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Funcionalidades
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Segmentos
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Soluções financeiras
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Omie.Cash
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Treinamentos
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Complementos do sistema
                </li>
              </ul>
            </div>
            <div>
              <h2 className="pt-[25px] font-bold">Segurança e privacidade</h2>
              <ul className="font-medium text-[#5d6263]">
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Política de privacidade
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Segurança de informação
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-bold">Contadores</h2>
              <ul className="font-medium text-[#5d6263]">
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Omie para contadores
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Omie.G-Click
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  OneFlow
                </li>
              </ul>
            </div>
            <div>
              <h2 className="pt-[25px] font-bold">Franquias</h2>
              <ul className="font-medium text-[#5d6263]">
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Benefícios
                </li>
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Unidades franqueadas
                </li>
              </ul>
            </div>
            <div>
              <h2 className="pt-[25px] font-bold">Educação empreendedora</h2>
              <ul className="font-medium text-[#5d6263]">
                <li className="cursor-pointer py-1 hover:text-[#001E27]">
                  Omie.Academy
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="font-bold">
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Ajuda
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Fale conosco
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">Blog</li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Omie.Store
              </li>
              <li className="cursor-pointer py-1 hover:text-[#001E27]">
                Para Desenvolvedores
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#001E27] px-[50px] py-[30px] text-white">
          <div>
            <img src="/logo-omie.png" alt="omie" />
          </div>
          <div className="flex flex-col items-center gap-[20px] text-[14px]">
            <div className="flex gap-[20px]">
              <p>Ouvidoria Omie Instituição de Pagamento Ltda. </p>
              <p>
                E-mail:{" "}
                <span className="cursor-pointer underline">
                  ouvidoria@omie.com.br{" "}
                </span>
              </p>
              <p>
                Telefone:{" "}
                <span className="cursor-pointer underline">0800 942 7592</span>
              </p>
            </div>
            <div>
              <p>Av. Jurubatuba, 460 - São Paulo - SP 0800 942 7592</p>
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <FontAwesomeIcon
              icon={faFacebook}
              className="cursor-pointer text-2xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer text-2xl"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="cursor-pointer text-2xl"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer text-2xl"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
