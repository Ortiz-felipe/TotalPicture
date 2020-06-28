import { ADD_PICTURE } from "../actions/pictures";
import Picture from "../../models/picture";

const initialState = {
    pictures: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PICTURE:
            const newPicture = new Picture(new Date().toString(), action.pictureData.title, action.pictureData.image);
            return { places: state.places.concat(newPicture) };
        default:
            return state

    }

}