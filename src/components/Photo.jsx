import photo from "../assets/model_unsplash.jpg";

const Photo = () => {
  return (
    <figure className="photo-wrapper">
      <img src={photo} alt="fashion model" />
    </figure>
  );
};

export default Photo;
