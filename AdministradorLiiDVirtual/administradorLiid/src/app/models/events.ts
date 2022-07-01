import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Events {
    title?: string;
    dateStar?: Date;
    datefin?:  Date;
    description?:string;
    createDate?: Date;

}

export interface EventsId extends Events{
    id: string
}