interface User {
  id: string;
  name: string;
  avatarImage: string;
  birthday: string;
  bio: string;
  role: string;
}

interface UserPreview extends Pick<User, "id" | "name" | "avatarImage"> {}
