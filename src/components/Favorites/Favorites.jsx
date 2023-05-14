import Card from "../Card/Card.jsx";
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
return (
    <div>

    {myFavorites?.map(
        ({ id, name, status, species, gender, origin, image, onClose }) => {
        return (
            <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
            />
            );
        }
    )}
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);