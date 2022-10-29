import { DocumentData } from "@firebase/firestore";

export interface IplayerData {
    playerName: string,
    playerScore: number,
    position: string
}

export interface IPlayerInfo {
    data: DocumentData;
    id: string;
  }