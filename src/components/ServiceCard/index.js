import PropTypes from "prop-types";

import "./style.scss";

const resolveSrc = (src) => (src && src.startsWith('/') ? `${process.env.PUBLIC_URL}${src}` : src);

const ServiceCard = ({ imageSrc, imageAlt, children }) => (
    <div className="ServiceCard">
      <div className="ServiceCard__imageContainer">
        <img data-testid="card-image-testid" src={resolveSrc(imageSrc)} alt={imageAlt} />
      </div>
      <div className="ServiceCard__textContainer">{children}</div>
    </div>
  );

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ServiceCard.defaultProps = {
  imageAlt: "image"
}

export default ServiceCard;
