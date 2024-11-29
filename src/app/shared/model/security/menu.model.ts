//Metadata
export interface Menu {
    factory: string;
    nombre: string;
    type: string;
    imagen: string;
    collapse?: string;
    subMenu?: Menu[];
}

