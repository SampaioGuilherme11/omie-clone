import PropTypes from "prop-types";

const CardBeneficios = ({ imgSrc, altText, titulo, subtitulo, descricao }) => {
  return (
    <div className="card cursor-pointer">
      <img src={imgSrc} alt={altText} />
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

CardBeneficios.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default CardBeneficios;
