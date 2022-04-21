type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  name: string;
  status: string;
  roles?: UserEstablishment[];
}

type Establishment = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  corporateName: string;
  tradeName: string;
  registry: string;
  status: string;
  users?: UserEstablishment[];
  entrances?: Entrance[];
}

type Entrance = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  establishment?: Establishment;
  establishmentId?: number;
  title: string;
  active: boolean;
}

type UserEstablishment = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  userId?: number;
  establishment?: Establishment;
  establishmentId?: number;
  role: number;
}

export type {
  User, Establishment, Entrance, UserEstablishment,
};