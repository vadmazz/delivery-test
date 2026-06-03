export type City = 'Moscow' | 'Kazan';

export interface AddressProps {
    city: City;
}

export class Address {
    private readonly _city: City;

    constructor(props: AddressProps) {
        this._city = props.city;
    }

    get city(): City {
        return this._city;
    }
}
