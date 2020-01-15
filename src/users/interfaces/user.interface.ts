import { Document } from 'mongoose';

export interface User extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly password: string;
    readonly email: string;
    readonly avatar: string;
    readonly weight: string,
    readonly weight_unit: string,
    readonly age: string,
    readonly birthday: string,
    readonly address: string,
    readonly zip: string,
    readonly state: string,
    readonly city: string,
}