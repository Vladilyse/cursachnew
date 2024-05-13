import { Gender } from "./gender";

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: Gender;
}
