export interface IProduto {
    nome: string;
    marca: string;
    utilidade: IUtilidade[];
}

export interface IUtilidade{
    nome : string;
}