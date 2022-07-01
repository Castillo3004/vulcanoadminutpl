import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Stands {
    title?: string;
    autor?: string;
    image?: File;
    video?: string;
    votacion?: string;

}

export interface EventsId extends Stands{
    id: string
}