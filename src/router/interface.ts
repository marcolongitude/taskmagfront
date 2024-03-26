export interface RouteMenu {
    text: Category;
    menu: Menu[];
}

export interface Menu {
    text: string;
    icon: React.ReactNode;
    navigate?: string;
    selected?: boolean;
    subMenu?: SubMenu[]; // Remova o "undefined" aqui, pois já é opcional
}

interface SubMenu {
    text?: string;
    icon?: React.ReactNode;
    navigate?: string;
}

type Category = string;
