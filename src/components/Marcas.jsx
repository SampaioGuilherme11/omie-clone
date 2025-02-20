import Button from "./ui/button";
import Carousel from "./ui/Carousel";

const brandsData = [
  { name: "Desinchá", image: "/empresas/desincha.webp" },
  { name: "Nomad", image: "/empresas/nomad.webp" },
  { name: "Swile", image: "/empresas/swile.webp" },
  { name: "Logcomex", image: "/empresas/logcomex.webp" },
  { name: "Endeavor", image: "/empresas/logo-endeavor.webp" },
  { name: "O Boticário", image: "/empresas/oboticario.webp" },
  { name: "QuintoAndar", image: "/empresas/quintoandar.webp" },
  { name: "Serasa", image: "/empresas/serasa.webp" },
  { name: "Simple Organic", image: "/empresas/simpleorganic.webp" },
];

const Marcas = () => {
  return (
    <div className="flex min-h-[560px] flex-col items-center gap-[50px] py-[80px] text-[#001E27]">
      <h2 className="mb-4 text-[34px] font-bold">
        Marcas que crescem com a Omie
      </h2>

      <div className="w-full max-w-4xl">
        <Carousel brands={brandsData} />
      </div>

      <div className="mt-6">
        <Button
          className="bg-[#001e27] text-[17px] text-white shadow-none transition-all hover:shadow-[0_5px_0_0_#001e277c]"
          buttonText="Depoimentos de quem usa"
        />
      </div>
    </div>
  );
};

export default Marcas;
