import {City} from "../../domain";

export class AddressDto {
    //@IsString() class-validator добавить
    city!: City;
}