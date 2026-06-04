export interface Member {
  // Dados Pessoais
  id: string;
  nome: string; [cite: 1965]
  endereco: string; [cite: 1966]
  cidadeUF: string; [cite: 1967]
  cep: string; [cite: 1968]
  email: string; [cite: 1969]
  dataNascimento: string; [cite: 1970]
  naturalidade: string; [cite: 1971]
  sexo: 'Masculino' | 'Feminino'; [cite: 1972]
  celular: string; [cite: 1991]
  telefone?: string; [cite: 1993]

  // Dados Complementares
  estadoCivil: 'Solteiro' | 'Casado' | 'Viúvo' | 'Divorciado'; [cite: 1974]
  nomeConjuge?: string; [cite: 1975]
  dataCasamento?: string; [cite: 1976]
  rg?: string; [cite: 1977]
  escolaridade: string; [cite: 1978]
  profissao: string; [cite: 1979]
  nomePai: string; [cite: 1980]
  nomeMae: string; [cite: 1981]

  // Dados Eclesiásticos
  status: 'Comungante' | 'Não Comungante' | 'Não Membro' | 'Em Disciplina'; [cite: 1983, 1989, 1990]
  oficio: 'Não oficial' | 'Diácono' | 'Presbítero' | 'Presbítero em Disponibilidade'; [cite: 1986, 1987, 1988]
  
  // Histórico
  batismoData?: string; [cite: 1996]
  batismoPastor?: string; [cite: 1997]
  batismoIgreja?: string; [cite: 1998]
  
  profissaoFeData?: string; [cite: 2000]
  profissaoFePastor?: string; [cite: 2001]
  profissaoFeIgreja?: string; [cite: 2002]
}