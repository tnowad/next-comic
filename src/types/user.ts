export interface UserPreview {
  id: string;
  name: string;
  avatarImage: string;
  roles: string[];
  username: string;
  email: string;
}

export interface User extends UserPreview {
  birthday: Date;
  bio: string;
}
