interface VerifyToken {
  token: string | null;
}

interface User {
  role?: string | null;
  fullName?: string;
  email?: string;
  phoneNumber?: string | null;
  id?: number;
  photoUrl?: string;
  userWarehouse?: any[];
  accessToken?: string;
}
