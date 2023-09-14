export interface PermissionPreview {
  id: string;
  name: string;
}

export interface Permission extends PermissionPreview {
  description: string;
}

export interface RolePreview {
  id: string;
  name: string;
  permissions: PermissionPreview[];
}

export interface Role extends RolePreview {
  description: string;
  permissions: Permission[];
}

export interface UserPreview {
  id: string;
  name: string;
  avatarImage: string;
  roles: RolePreview[];
  username: string;
  email: string;
}

export interface User extends UserPreview {
  roles: Role[];
  birthday: Date;
  bio: string;
}
