export interface Premiacao {
    descricao: string;
    faixa: number;
    ganhadores: number;
    valorPremio: number;
  }
  
  export interface LocalGanhador {
    ganhadores: number;
    municipio: string;
    nomeFatansiaUL: string;
    serie: string;
    posicao: number;
    uf: string;
  }
  
  export interface LoteriaData {
    loteria: string;
    concurso: number;
    data: string;
    local: string;
    dezenasOrdemSorteio: string[];
    dezenas: string[];
    trevos: any[];
    timeCoracao: string | null;
    mesSorte: string | null;
    premiacoes: Premiacao[];
    estadosPremiados: any[];
    observacao: string;
    acumulou: boolean;
    proximoConcurso: number;
    dataProximoConcurso: string;
    localGanhadores: LocalGanhador[];
    valorArrecadado: number;
    valorAcumuladoConcurso_0_5: number;
    valorAcumuladoConcursoEspecial: number;
    valorAcumuladoProximoConcurso: number;
    valorEstimadoProximoConcurso: number;
  }