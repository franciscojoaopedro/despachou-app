export interface ImovelProps {
    _id: string;
    tipo: string;
    titulo: string;
    descricao: string;
    endereco: string;
    referencia: string;
    provincia: string;
    bairro: string;
    area: number;
    quartos: number;
    banheiros: number;
    vagasGaragem: string;
    valor: number;
    fotos: [string];
    proprietario: string;
  }

  export interface loginProps {
    email:string
    senha:string
  }
  
  export interface UserProps {
    _id: string;
    avatar: string;
    email: string;
    nome: string;
    telefone: string;
    tipo: string;
  }
  export interface UserContextValueProps {
    user: UserProps | null;
    login: (data: loginProps) => void;
    logout: () => void;
  }