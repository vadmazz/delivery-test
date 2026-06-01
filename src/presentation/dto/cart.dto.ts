export class CartDto {
    //@IsString() class-validator добавить
    id!: string;
    weight!: number;
    size!: number;
    amount!: number;
}