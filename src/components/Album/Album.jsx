import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";
import { CoverImage } from "./CoverImage";
import { ArtistName } from "./ArtistName";

export const Album = ({ name, image, artists, url }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName name={name} url={url}/>
      <ArtistName artists={artists} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired
};
