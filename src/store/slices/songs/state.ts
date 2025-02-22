import { initialStateCreator } from "../../utils/stateCreator";

export const initialStateMSongs = {
  recents: initialStateCreator("ids", []),
  hits: initialStateCreator("ids", []),
};
