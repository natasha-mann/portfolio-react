import "./IconLink.css";

const IconLink = ({ link, logo }) => {
  return (
    <a className="icon-links" target="_blank" rel="noreferrer" href={link}>
      {logo}
    </a>
  );
};

export default IconLink;
