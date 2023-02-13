import { Injectable } from "@nestjs/common";
import { ArrayMinSize, IsArray, IsOptional, IsString } from "class-validator";

@Injectable()
export class AtualizarCategoriaDto {

    @IsString()
    @IsOptional()
    descricao: string;

    @IsArray()
    @ArrayMinSize(1)
    eventos: Array<Evento>
}

interface Evento { 
    nome: string;
    operacao: string;
    valor: number;
}