export interface User {
	email: string;
	password: string;
	birthDate: Date;
	addresses: UserAddress[];
}

export interface UserAddress {
	street: string;
	houseNumber: number;
}
