import PropTypes from "prop-types";

const CardBeneficios = ({
  imgSrc,
  altText,
  titulo,
  subtitulo,
  descricao,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`w-full cursor-pointer rounded-lg border border-gray-300 p-4 transition-all duration-300 ${
        isActive ? "bg-gray-100 shadow-md" : "bg-white"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <img src={imgSrc} alt={altText} className="h-10 w-10" />
        <h2 className="text-lg font-bold">{titulo}</h2>
      </div>

      {/* Exibe subtítulo e descrição apenas se ativo */}
      {isActive && (
        <div className="mt-2">
          <h3 className="text-sm font-semibold">{subtitulo}</h3>
          <p className="text-sm text-gray-700">{descricao}</p>
        </div>
      )}
    </div>
  );
};

CardBeneficios.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardBeneficios;
