import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Calendar, Menu, X, Instagram, Youtube,
  Heart, Users, BookOpen, Music, Star, Cake, ShieldCheck,
  Plus, Search, ArrowUp, Download, Book, Library, Music2, ChevronRight, Edit, Trash2, Printer
} from 'lucide-react';
import { cn } from './lib/utils';
import { LEADERSHIP, BIRTHDAYS, ANNUAL_AGENDA, ANNOUNCEMENTS, SONGS } from './constants';

// --- CORES MODERNIZADAS IPVP ---
const colors = {
  primary: "#0f172a", 
  greenIPB: "#163328", 
  gold: "#D4B36D",    
  bgLight: "#f8fafc", 
  textDark: "#1e293b"
};

const BIBLE_BOOKS = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "1Samuel", "2Samuel", "1Reis", "2Reis", "1Crônicas", "2Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cânticos", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oseias", "Joel", "Amós", "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias",
  "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1Coríntios", "2Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1Tessalonicenses", "2Tessalonicenses", "1Timóteo", "2Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "1Pedro", "2Pedro", "1João", "2João", "3João", "Judas", "Apocalipse"
];

const getMonthName = (monthIndex: number) => {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return months[monthIndex];
};

// --- DADOS REAIS DO ROL DE MEMBROS (85 IRMÃOS) ---
const DADOS_MEMBROS = [
  { id: 1, nome: "Adeílda Gomes de Oliveira", celular: "74 99963-6488", status: "Comungante", oficio: "Não oficial" },
  { id: 2, nome: "Adevaldo Marques Rios", celular: "74 9979-5490", status: "Comungante", oficio: "Presbítero" },
  { id: 3, nome: "Adonel Oliveira", celular: "Não informado", status: "Comungante", oficio: "Diácono" },
  { id: 4, nome: "Agnaldo de Sá", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 5, nome: "Alzerita Santos de Souza", celular: "74 99956-6871", status: "Comungante", oficio: "Não oficial" },
  { id: 6, nome: "Anderson Hangel Souza Franco", celular: "74 9927-1727", status: "Comungante", oficio: "Não oficial" },
  { id: 7, nome: "Antônio jacinto Filho Do Nascimento", celular: "74 99986-7018", status: "Comungante", oficio: "Diácono" },
  { id: 8, nome: "Antonio ferreira da silva", celular: "74 99964-6651", status: "Comungante", oficio: "Não oficial" },
  { id: 9, nome: "Antonio Rios dos Santos", celular: "Não informado", status: "Comungante", oficio: "Diácono" },
  { id: 10, nome: "Arnobio Lopes da Silva", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 11, nome: "Benigno Senhorinho de Jesus", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 12, nome: "Berenalva Souza Rios Nascimento", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 13, nome: "Bereni Lopes Rios", celular: "74 99908-1604", status: "Comungante", oficio: "Não oficial" },
  { id: 14, nome: "Berenice Maria da Silva Lopes", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 15, nome: "Bernadet Araújo da Silva", celular: "74 9946-2612", status: "Comungante", oficio: "Não oficial" },
  { id: 16, nome: "Carlito Oliveira Cunha", celular: "74 99911-354X", status: "Comungante", oficio: "Presbítero em disponibilidade" },
  { id: 17, nome: "Dalva Cerqueira Silva Matos", celular: "74 99919-8603", status: "Comungante", oficio: "Não oficial" },
  { id: 18, nome: "Daniel Oliveira Santos", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 19, nome: "Debura Rios Ribeiro", celular: "74 99946-4400", status: "Comungante", oficio: "Não oficial" },
  { id: 20, nome: "Diana Rios Alves Fagundes", celular: "74 99967-9797", status: "Comungante", oficio: "Não oficial" },
  { id: 21, nome: "Edelice Lopes da Silva", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 22, nome: "Edivaldo Emídio Santos", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 23, nome: "Elida Suzart Lima", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 24, nome: "Elique Rios Filho", celular: "74 99991-0068", status: "Comungante", oficio: "Presbítero" },
  { id: 25, nome: "Elisa Silva Silva Sena", celular: "74 99949-8421", status: "Não Comungante", oficio: "Não oficial" },
  { id: 26, nome: "Elizania Gonçalves da Silva rios", celular: "74 99979-5490", status: "Comungante", oficio: "Não oficial" },
  { id: 27, nome: "Eritom Marques Rios", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 28, nome: "Euflorsina da Cunha Oliveira", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 29, nome: "Evangelina de Oliveira Santos", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 30, nome: "Evanuzia Santos dos Reis", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 31, nome: "Fabiana de Carvalho Barbosa", celular: "74 98144-4303", status: "Comungante", oficio: "Não oficial" },
  { id: 32, nome: "Gehanne de Matos Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 33, nome: "Gildete Souza Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 34, nome: "Guilherina Barbosa Costa", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 35, nome: "HELOISA BARBOSA DA SILVA", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 36, nome: "Iara Silva Sena", celular: "74 99997-4632", status: "Não Membro", oficio: "Não oficial" },
  { id: 37, nome: "Imarcélia Lima Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 38, nome: "Irada Rios de Abreu", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 39, nome: "Iradi Maria de Matos Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 40, nome: "Irandir da Silva Rios", celular: "74 99913-9959", status: "Comungante", oficio: "Não oficial" },
  { id: 41, nome: "Ivoneide Sousa Rios Oliveira", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 42, nome: "Izabel Rios Oliveira", celular: "74 99819-0934", status: "Comungante", oficio: "Não oficial" },
  { id: 43, nome: "Izabela Mota de Souza Cunha", celular: "74 9999-7747", status: "Comungante", oficio: "Não oficial" },
  { id: 44, nome: "Joelma Cristina Rios Lima Pinho", celular: "74 99958-5052", status: "Comungante", oficio: "Não oficial" },
  { id: 45, nome: "Jonatas Rios Guilherme", celular: "74 99955-1293", status: "Comungante", oficio: "Não oficial" },
  { id: 46, nome: "José Carlos Brasileiro Sena", celular: "74 99924-4119", status: "Não Membro", oficio: "Não oficial" },
  { id: 47, nome: "José de Oliveira Cunha", celular: "Não informado", status: "Comungante", oficio: "Presbítero em disponibilidade" },
  { id: 48, nome: "José dos Santos Oliveira", celular: "(74) 99811-9515", status: "Comungante", oficio: "Não oficial" },
  { id: 49, nome: "Joseane da Silva Souza", celular: "74 99964-2376", status: "Comungante", oficio: "Não oficial" },
  { id: 50, nome: "Jucielle da Silva Cunha Santos", celular: "(74) 99915-6401", status: "Comungante", oficio: "Não oficial" },
  { id: 51, nome: "Jucineide Rios Oliveira", celular: "74 99808-7226", status: "Comungante", oficio: "Não oficial" },
  { id: 52, nome: "Jucirene Lopes da Silva cunha", celular: "74 9967-5053", status: "Comungante", oficio: "Não oficial" },
  { id: 53, nome: "Leonildio Ferreira dos Santos", celular: "74 99970-1358", status: "Comungante", oficio: "Não oficial" },
  { id: 54, nome: "LEVI RIOS ALVES FAGUNDES", celular: "74 99867-3305", status: "Comungante", oficio: "Não oficial" },
  { id: 55, nome: "Luana Lima Mendes Oliveira", celular: "74 99985-9324", status: "Comungante", oficio: "Não oficial" },
  { id: 56, nome: "Lucineide Oliveira Nascimento", celular: "74 99954-4521", status: "Comungante", oficio: "Não oficial" },
  { id: 57, nome: "Maria Betina Cunha Franco", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 58, nome: "Maria Cecília Cunha Franco", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 59, nome: "Marilene Gonçalves da Silva", celular: "74 99964-1431", status: "Comungante", oficio: "Não oficial" },
  { id: 60, nome: "Matheus Almeida Evangelista", celular: "(74) 99942-9016", status: "Não Comungante", oficio: "Não oficial" },
  { id: 61, nome: "Meire da Silva Almeida Evangelista", celular: "74 9930-3935", status: "Comungante", oficio: "Não oficial" },
  { id: 62, nome: "Milton Pereira Rios", celular: "74 99919-4112", status: "Comungante", oficio: "Não oficial" },
  { id: 63, nome: "Naudja Sousa Rios Theodoro", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 64, nome: "Oseas da Silva Cunha", celular: "74 99914-9304", status: "Comungante", oficio: "Não oficial" },
  { id: 65, nome: "Osmária Sousa Rios", celular: "74 9813-2159", status: "Comungante", oficio: "Não oficial" },
  { id: 66, nome: "Otoniel DA Silva Cunha", celular: "74 99819-2191", status: "Comungante", oficio: "Não oficial" },
  { id: 67, nome: "Otoniel de Souza Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 68, nome: "Ozenilde Sousa Rios", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 69, nome: "Ozileia da silva Cunha Ferreira", celular: "74 99980-2611", status: "Comungante", oficio: "Não oficial" },
  { id: 70, nome: "Ozuel da Silva cunha", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 71, nome: "Patrícia Lopes Rios Cunha", celular: "74 9817-1902", status: "Comungante", oficio: "Não oficial" },
  { id: 72, nome: "Paulo Sérgio Vieira dos Santos", celular: "Não informado", status: "Comungante", oficio: "Não oficial" },
  { id: 73, nome: "Pedro Leonel da Cunha Ferreira", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 74, nome: "Ridair da Cunha Santos", celular: "74 99970-1358", status: "Comungante", oficio: "Não oficial" },
  { id: 75, nome: "Roberio Araújo Evangelista", celular: "(74) 99942-9016", status: "Comungante", oficio: "Presbítero em disponibilidade" },
  { id: 76, nome: "Sidelcina da Cunha Oliveira", celular: "74 99901-4329", status: "Comungante", oficio: "Não oficial" },
  { id: 77, nome: "Suelivania Santos da Silva Sena", celular: "74 99976-3212", status: "Comungante", oficio: "Não oficial" },
  { id: 78, nome: "Thayz Mota Cunha Franco", celular: "74 99938-6757", status: "Comungante", oficio: "Não oficial" },
  { id: 79, nome: "Uriel da Silva cunha", celular: "74 9937-3626", status: "Comungante", oficio: "Não oficial" },
  { id: 80, nome: "Vitor Manoel da Cunha Ferreira", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 81, nome: "Wélida Ticiana almeida Araújo Rios", celular: "74 99964-2782", status: "Comungante", oficio: "Não oficial" },
  { id: 82, nome: "YASMIM BARBOSA SILVA", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 83, nome: "ZACK SAMUEL BARBOSA SILVA", celular: "Não informado", status: "Não Comungante", oficio: "Não oficial" },
  { id: 84, nome: "Zailde Rios Santos", celular: "74 99980-8547", status: "Comungante", oficio: "Não oficial" },
  { id: 85, nome: "Zenilda Maria da Silva Cunha", celular: "Não informado", status: "Comungante", oficio: "Não oficial" }
];


// --- SISTEMA DE MEMBRESIA 100% FUNCIONAL ---
const AdminMembers = () => {
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);
  
  // O '_v3' garante que o navegador vai esquecer a lista velha de 9 nomes e puxar a de 85
  const [membros, setMembros] = useState(() => {
    const salvos = localStorage.getItem('ipvp_membros_v3');
    if (salvos) return JSON.parse(salvos);
    return DADOS_MEMBROS;
  });
  
  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');

  const [modalAberto, setModalAberto] = useState(false);
  const [membroEditando, setMembroEditando] = useState<any>(null);
  const [form, setForm] = useState({ nome: '', celular: '', status: 'Comungante', oficio: 'Não oficial' });

  // Salva no navegador sempre que alterar
  useEffect(() => {
    localStorage.setItem('ipvp_membros_v3', JSON.stringify(membros));
  }, [membros]);

  const abrirModal = (membro: any = null) => {
    if (membro) {
      setMembroEditando(membro);
      setForm(membro);
    } else {
      setMembroEditando(null);
      setForm({ nome: '', celular: '', status: 'Comungante', oficio: 'Não oficial' });
    }
    setModalAberto(true);
  };

  const salvarMembro = () => {
    if (!form.nome) return alert('O nome é obrigatório!');
    if (membroEditando) {
      setMembros(membros.map((m: any) => m.id === membroEditando.id ? { ...form, id: m.id } : m));
    } else {
      setMembros([...membros, { ...form, id: Date.now() }]);
    }
    setModalAberto(false);
  };

  const excluirMembro = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este irmão(ã)?")) {
      setMembros(membros.filter((m: any) => m.id !== id));
    }
  };

  if (!logado) {
    return (
      <div className="text-center py-24 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xl mx-auto mt-10">
        <ShieldCheck size={64} className="mx-auto mb-6 text-[#D4B36D]" />
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Acesso Restrito</h2>
        <p className="text-slate-500 mb-10 uppercase tracking-widest text-sm">Apenas Liderança IPVP</p>
        
        <input 
          type="password" 
          placeholder="Digite a Senha" 
          className="border-2 border-slate-200 p-4 rounded-xl outline-none focus:border-[#D4B36D] mr-2 text-center text-lg font-bold w-64"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button 
          onClick={() => { if(senha === '2933') setLogado(true); else alert('Senha incorreta!'); }}
          className="bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#D4B36D] transition-colors mt-4 md:mt-0"
        >
          Entrar
        </button>
      </div>
    );
  }

  const membrosFiltrados = membros.filter((m: any) => {
    const matchBusca = m.nome.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = filtro === 'Todos' || m.status === filtro;
    return matchBusca && matchStatus;
  });

  return (
    <>
      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            #area-impressao, #area-impressao * { visibility: visible; }
            #area-impressao { position: absolute; left: 0; top: 0; width: 100%; }
            .nao-imprime { display: none !important; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd !important; padding: 8px !important; color: black !important; }
            th { background-color: #f1f1f1 !important; -webkit-print-color-adjust: exact; }
          }
        `}
      </style>

      <div id="area-impressao" className="py-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-10 mt-10 animate-in fade-in zoom-in duration-500 min-h-[80vh] relative">
        
        <div className="hidden print:block mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-black uppercase">Igreja Presbiteriana em Várzea do Poço</h1>
          <h2 className="text-xl text-black mt-2 font-bold">Relatório de Membros ({filtro})</h2>
          <p className="text-black mt-1">Total listado: {membrosFiltrados.length} membros</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-100 pb-6 gap-4 nao-imprime">
          <h2 className="text-3xl font-serif font-bold text-[#163328]">Rol de Membros</h2>
          <div className="flex gap-2">
            <button onClick={() => window.print()} className="bg-[#D4B36D] text-slate-900 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 shadow-lg">
              <Printer size={18} /> Imprimir
            </button>
            <button onClick={() => abrirModal()} className="bg-[#163328] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 flex items-center gap-2 shadow-lg">
              <Plus size={18}/> Cadastrar
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 nao-imprime">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4B36D]" size={20} />
            <input 
              type="text" 
              placeholder="Buscar irmão por nome..." 
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-medium text-slate-700 bg-slate-50 focus:bg-white transition-colors"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <select 
            className="border-2 border-slate-200 px-6 py-3 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-700 bg-slate-50 uppercase tracking-widest text-xs cursor-pointer"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Comungante">Comungantes</option>
            <option value="Não Comungante">Não Comungantes</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0f172a] text-white uppercase tracking-widest text-[10px] md:text-xs">
                <th className="p-4 md:p-5 font-bold">Nome do Membro</th>
                <th className="p-4 md:p-5 font-bold">Celular</th>
                <th className="p-4 md:p-5 font-bold">Status</th>
                <th className="p-4 md:p-5 font-bold">Ofício</th>
                <th className="p-4 md:p-5 font-bold text-right nao-imprime">Ações</th>
              </tr>
            </thead>
            <tbody>
              {membrosFiltrados.map((m: any) => (
                <tr key={m.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-slate-800">{m.nome}</td>
                  <td className="p-4 md:p-5 text-slate-600 font-medium">{m.celular}</td>
                  <td className="p-4 md:p-5 font-bold">
                    <span className={m.status === 'Comungante' ? 'text-green-700' : 'text-amber-600'}>
                      {m.status}
                    </span>
                  </td>
                  <td className="p-4 md:p-5 text-slate-600 font-medium">{m.oficio}</td>
                  <td className="p-4 md:p-5 text-right nao-imprime">
                    <button onClick={() => abrirModal(m)} className="text-slate-400 hover:text-blue-600 p-2"><Edit size={18}/></button>
                    <button onClick={() => excluirMembro(m.id)} className="text-slate-400 hover:text-red-600 p-2"><Trash2 size={18}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs text-right nao-imprime">
          Total listado: {membrosFiltrados.length} membros
        </div>

        <AnimatePresence>
          {modalAberto && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 nao-imprime">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl relative">
                <button onClick={() => setModalAberto(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><X size={24}/></button>
                
                <h3 className="text-2xl font-serif font-bold text-[#163328] mb-6">
                  {membroEditando ? 'Atualizar Membro' : 'Novo Membro'}
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Nome Completo</label>
                    <input type="text" className="w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800" value={form.nome} onChange={(e) => setForm({...form, nome: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Celular</label>
                    <input type="text" placeholder="(74) 99999-9999" className="w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800" value={form.celular} onChange={(e) => setForm({...form, celular: e.target.value})} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Status</label>
                      <select className="w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800" value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
                        <option>Comungante</option>
                        <option>Não Comungante</option>
                        <option>Não Membro</option>
                        <option>Em Disciplina</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Ofício</label>
                      <select className="w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800" value={form.oficio} onChange={(e) => setForm({...form, oficio: e.target.value})}>
                        <option>Não oficial</option>
                        <option>Diácono</option>
                        <option>Presbítero</option>
                        <option>Presbítero em disponibilidade</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button onClick={() => setModalAberto(false)} className="flex-1 py-4 rounded-xl font-bold uppercase tracking-widest bg-slate-100 text-slate-600 hover:bg-slate-200">Cancelar</button>
                  <button onClick={salvarMembro} className="flex-1 py-4 rounded-xl font-bold uppercase tracking-widest bg-[#163328] text-white hover:bg-[#D4B36D] hover:text-slate-900 transition-colors">Salvar</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

// --- COMPONENTES VISUAIS DO SITE ---

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105" style={{ backgroundImage: "url('/fundo-igreja.jpg')" }} />
      <div className="absolute inset-0 bg-black/60" /> 
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
    </div>
    <div className="relative z-10 text-center px-6 mt-16 w-full flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-8xl md:text-[140px] font-serif font-bold text-white tracking-tighter mb-4">
        IPVP
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-sm md:text-xl font-bold uppercase tracking-[0.3em] text-[#D4B36D] mb-6">
        Igreja Presbiteriana em Várzea do Poço - BA
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-4xl md:text-6xl text-white mt-4" style={{ fontFamily: '"Great Vibes", "Brush Script MT", cursive' }}>
        Vivendo Um Novo Tempo
      </motion.p>
    </div>
  </section>
);

const Avisos = () => {
  // Descobre o mês atual (lembrando que Janeiro = 0, Fevereiro = 1, Maio = 4, Junho = 5)
  const currentMonth = new Date().getMonth();
  
  // Filtra automaticamente: só mostra os avisos do mês atual ou de meses futuros
  const avisosAtivos = ANNOUNCEMENTS.filter(m => m.month >= currentMonth).flatMap(m => m.announcements);

  // Se não houver nenhum aviso ativo para o mês, a secção inteira fica invisível
  if (avisosAtivos.length === 0) return null;

  return (
    <section id="avisos" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Avisos da Igreja</h2>
          <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {avisosAtivos.map((ann, idx) => (
            <div key={idx} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
              {ann.image && (
                <div className="w-full bg-black/50 overflow-hidden">
                  <img src={ann.image} alt="Aviso" className="w-full h-[400px] object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="p-8 flex items-start gap-4">
                <Star size={24} className="text-[#D4B36D] shrink-0 mt-1" />
                <p className="text-lg font-serif italic text-white/90">{ann.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Birthdays = () => {
  const currentMonthIndex = new Date().getMonth();
  const monthList = useMemo(() => BIRTHDAYS.filter(b => b.month === currentMonthIndex).sort((a, b) => a.day - b.day), [currentMonthIndex]);
  
  // CORREÇÃO DA EXTENSÃO DA IMAGEM PARA .JPG CONFORME O SEU GITHUB
  let niverImage = "";
  if (currentMonthIndex === 3) niverImage = "/niverabril2026.jpg"; 
  else if (currentMonthIndex === 4) niverImage = "/nivermaio2026.jpg";
  else if (currentMonthIndex === 5) niverImage = "/niverjunho2026.jpg";
  else if (currentMonthIndex === 6) niverImage = "/niverjulho2026.jpg"; // <-- ADICIONE ESTA LINHA PARA JULHO;

  return (
    <section id="birthdays" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Aniversariantes</h2>
          <p className="text-xl text-slate-500 uppercase tracking-widest mt-4">Mês de {getMonthName(currentMonthIndex)}</p>
          <div className="w-16 h-1 bg-[#163328] mx-auto mt-6" />
        </div>
        
        {niverImage && (
          <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 max-w-4xl mx-auto">
            <img src={niverImage} className="w-full h-auto hover:scale-105 transition-transform duration-700" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {monthList.map((b, i) => (
            <div key={i} className="px-6 py-4 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#163328] hover:text-white transition-colors group">
              <span className="font-serif text-3xl font-bold text-[#D4B36D] mb-2">{b.day}</span>
              <span className="font-bold text-slate-800 group-hover:text-white transition-colors">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnnualAgenda = () => {
  const [selMonth, setSelMonth] = useState(new Date().getMonth());
  const agendaMes = useMemo(() => ANNUAL_AGENDA.find(m => m.month === selMonth), [selMonth]);

  return (
    <section id="agenda" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Agenda 2026</h2>
          <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ANNUAL_AGENDA.map((m) => (
            <button key={m.month} onClick={() => setSelMonth(m.month)} className={cn("px-6 py-3 rounded-full text-xs font-bold transition-all uppercase tracking-widest", selMonth === m.month ? "bg-[#163328] text-white shadow-lg" : "bg-white text-slate-500 hover:bg-slate-200")}>
              {m.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {agendaMes && (
            <motion.div key={selMonth} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="text-center mb-10 border-b border-slate-100 pb-10">
                <p className="font-bold text-sm uppercase tracking-[0.2em] text-[#D4B36D] mb-4">{agendaMes.theme}</p>
                <p className="text-2xl font-serif italic text-slate-800">"{agendaMes.verse}"</p>
              </div>
              <div className="space-y-4 max-w-3xl mx-auto">
                {agendaMes.events.map((ev, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <Calendar size={24} className="text-[#163328]" />
                    <p className="text-slate-700 font-medium text-lg">{ev}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Leadership = () => (
  <section id="leadership" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Nossa Liderança</h2>
        <div className="w-16 h-1 bg-[#163328] mx-auto mt-6" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="group text-center">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative">
            <img src="/foto-pastor.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => e.currentTarget.src='https://via.placeholder.com/300?text=Pastor'} />
            <div className="absolute inset-0 border-4 border-[#D4B36D] rounded-full z-10" />
          </div>
          <h4 className="text-3xl font-serif font-bold text-slate-900 mb-2">{LEADERSHIP.pastor.name}</h4>
          <p className="text-sm uppercase tracking-widest text-[#D4B36D] font-bold mb-6">Pastor Titular</p>
          <a href={`https://wa.me/55${LEADERSHIP.pastor.phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-900 text-white hover:bg-[#D4B36D] transition-colors"><Phone size={14}/> Falar</a>
        </div>
        
        {LEADERSHIP.elders.map((elder, i) => (
          <div key={i} className="group text-center">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative">
              <img src={elder.name.includes('Adevaldo') ? '/foto-adevaldo.jpg' : '/foto-elique.jpg'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => e.currentTarget.src='https://via.placeholder.com/300?text=Presbítero'} />
              <div className="absolute inset-0 border-4 border-[#163328] rounded-full z-10" />
            </div>
            <h4 className="text-3xl font-serif font-bold text-slate-900 mb-2">{elder.name}</h4>
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-6">Presbítero</p>
            <a href={`https://wa.me/55${elder.phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-100 text-slate-900 hover:bg-[#163328] hover:text-white transition-colors"><Phone size={14}/> Falar</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SpiritualResources = () => (
  <section id="resources" className="py-24 px-6 bg-[#0f172a] text-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Crescimento Espiritual</h2>
        <p className="text-slate-400 mt-4 uppercase tracking-widest">Documentos, Planos & Estudos</p>
        <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
      </div>
      
      {/* Botões de Download de Manuais */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a href="/estatuto_ipvp_2026.pdf" download className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all"><Download size={18} className="text-[#D4B36D]"/> Estatuto 2026</a>
        <a href="/guia_trabalho_saf.pdf" download className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all"><Download size={18} className="text-[#D4B36D]"/> Guia SAF</a>
        <a href="/guia_trabalho_uph.pdf" download className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all"><Download size={18} className="text-[#D4B36D]"/> Guia UPH</a>
        <a href="/manual_unificado.pdf" download className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all"><Download size={18} className="text-[#D4B36D]"/> Manual Unificado</a>
        <a href="/manual_presbiteriano_2025.pdf" download className="flex items-center gap-3 px-6 py-4 bg-[#D4B36D] text-slate-900 rounded-xl font-bold text-sm transition-all shadow-lg"><Download size={18}/> Manual IPB</a>
      </div>

      {/* Cards de Planos e Estudos (RESTAURADOS E MODERNIZADOS) */}
      <div className="grid md:grid-cols-3 gap-8">
        <a href="https://www.bible.com/pt/reading-plans" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4B36D] hover:bg-white/10 transition-all flex flex-col group">
          <Calendar size={40} className="text-[#D4B36D] mb-6 group-hover:scale-110 transition-transform" />
          <h5 className="font-serif text-2xl mb-3 font-bold text-white">Planos de Leitura</h5>
          <p className="text-slate-400 text-sm font-medium flex-1">Leitura bíblica diária organizada e estruturada.</p>
        </a>
        <a href="https://ipcuiaba.com.br/noticias/118538/hinario-novo-cantico" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4B36D] hover:bg-white/10 transition-all flex flex-col group">
          <Music size={40} className="text-[#D4B36D] mb-6 group-hover:scale-110 transition-transform" />
          <h5 className="font-serif text-2xl mb-3 font-bold text-white">Novo Cântico</h5>
          <p className="text-slate-400 text-sm font-medium flex-1">Letras e partituras do hinário oficial presbiteriano.</p>
        </a>
        <a href="https://drive.google.com/drive/folders/1NlippJmh36vxHQRFnPI8ivxSUfCHPP5D" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4B36D] hover:bg-white/10 transition-all flex flex-col group">
          <Library size={40} className="text-[#D4B36D] mb-6 group-hover:scale-110 transition-transform" />
          <h5 className="font-serif text-2xl mb-3 font-bold text-white">Estudos Bíblicos</h5>
          <p className="text-slate-400 text-sm font-medium flex-1">Material ministrado em nossa igreja no Google Drive.</p>
        </a>
      </div>
    </div>
  </section>
);

const BibleQuickSearch = () => {
  const [bibleSearch, setBibleSearch] = useState({ book: 'João', cap: '3', ver: '16' });
  const handleBibleSearch = (e: React.FormEvent) => { 
    e.preventDefault(); 
    window.open(`https://www.bibliaonline.com.br/nvi/${bibleSearch.book.toLowerCase()}/${bibleSearch.cap}/${bibleSearch.ver}`, '_blank'); 
  };
  
  return (
    <section id="bible" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen size={48} className="mx-auto mb-6 text-[#163328]" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Bíblia Sagrada</h2>
          <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
        </div>
        <form onSubmit={handleBibleSearch} className="bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-4 border border-slate-100">
          <select value={bibleSearch.book} onChange={(e) => setBibleSearch({...bibleSearch, book: e.target.value})} className="flex-1 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-slate-700">
            {BIBLE_BOOKS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <input type="number" placeholder="Cap" value={bibleSearch.cap} onChange={(e) => setBibleSearch({...bibleSearch, cap: e.target.value})} className="w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center" />
          <input type="number" placeholder="Ver" value={bibleSearch.ver} onChange={(e) => setBibleSearch({...bibleSearch, ver: e.target.value})} className="w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center" />
          <button type="submit" className="px-8 py-4 bg-[#163328] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">Ler</button>
        </form>
      </div>
    </section>
  );
};

const LyricsSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const musicasList = Array.isArray(SONGS) ? SONGS : [];
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filtered = query.length > 2 ? musicasList.filter(s => {
    const searchArea = `${s.title} ${s.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return searchArea.includes(normalizedQuery);
  }) : [];

  return (
    <section id="lyrics" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Louvores</h2>
          <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
        </div>
        
        {!selectedSong ? (
          <div>
            <div className="relative mb-10 shadow-2xl rounded-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={28} />
              <input type="text" placeholder="Digite um trecho ou título..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-20 pr-6 py-6 rounded-2xl border-none outline-none font-serif text-2xl text-slate-800 bg-slate-50 focus:bg-white transition-colors" />
            </div>
            {filtered.length > 0 && (
              <div className="space-y-4">
                {filtered.map((s, i) => (
                  <button key={i} onClick={() => setSelectedSong(s)} className="w-full text-left p-6 rounded-2xl border border-slate-100 hover:border-[#D4B36D] hover:shadow-lg transition-all flex items-center justify-between group bg-white">
                    <span className="font-serif text-xl font-bold text-slate-800 group-hover:text-[#163328]">{s.title}</span>
                    <ChevronRight className="text-slate-300 group-hover:text-[#D4B36D]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem]">
            <div className="flex justify-between items-start mb-10 border-b border-slate-200 pb-8">
              <h3 className="text-4xl font-serif font-bold text-[#163328]">{selectedSong.title}</h3>
              <button onClick={() => {setSelectedSong(null); setQuery('');}} className="p-4 bg-white rounded-full text-slate-500 shadow-sm hover:text-red-500"><X size={24}/></button>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-xl md:text-2xl leading-relaxed text-slate-700 font-medium">{selectedSong.lyrics}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

const YouTubeCourse = () => (
  <section id="curso" className="py-24 px-6 bg-[#0f172a]">
    <div className="max-w-5xl mx-auto text-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Preparando-se para Servir</h2>
        <div className="w-16 h-1 bg-[#D4B36D] mx-auto mt-6" />
      </div>
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/yAu3BtPWi4s" title="Curso" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  </section>
);

const Giving = () => (
  <section id="giving" className="py-24 px-6 bg-slate-50">
    <div className="max-w-4xl mx-auto text-center bg-white rounded-[3rem] p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#D4B36D]" />
      <Heart size={56} className="mx-auto mb-8 text-[#163328]" />
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Dízimos e Ofertas</h2>
      <div className="bg-[#0f172a] text-white py-6 px-10 rounded-2xl inline-block font-mono text-2xl md:text-3xl font-bold tracking-widest mb-8 shadow-xl">
        PIX: 03.507.028/0001-08
      </div>
      <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#D4B36D]">Banco SICOOB | Ag: 3289 | CC: 118524</p>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); const text = `*Site*%0ANome: ${formData.name}%0AContato: ${formData.contact}%0A*Msg:* ${formData.message}`; window.open(`https://wa.me/5574999829797?text=${text}`, '_blank'); };
  
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Fale Conosco</h2>
          <div className="w-16 h-1 bg-[#D4B36D] mb-12" />
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" required placeholder="Seu Nome" className="w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="text" required placeholder="Seu Telefone" className="w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
            <textarea required rows={5} placeholder="Sua Mensagem..." className="w-full p-6 bg-slate-50 rounded-2xl border-none resize-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <button type="submit" className="w-full py-6 bg-[#0f172a] text-white rounded-2xl font-bold text-lg tracking-widest uppercase hover:bg-[#163328] transition-colors">Enviar WhatsApp</button>
          </form>
        </div>
        <div className="rounded-[3rem] h-full min-h-[500px] text-white p-12 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#163328]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative z-10 text-center">
            <MapPin size={64} className="mx-auto mb-8 text-[#D4B36D]"/>
            <h3 className="text-4xl font-serif mb-6 font-bold">Localização</h3>
            <p className="text-white/80 mb-12 text-xl font-medium">R. Durval Gama, 17<br/>Várzea do Poço - BA</p>
            <a href="https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000" target="_blank" rel="noreferrer" className="px-12 py-5 bg-[#D4B36D] text-slate-900 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">Abrir Mapa</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpeedDialButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const actions = [
    { icon: <Youtube size={24}/>, href: "https://www.youtube.com/@IPBVARZEADOPOCO", color: "bg-red-600" },
    { icon: <Instagram size={24}/>, href: "https://www.instagram.com/ipvarzeapoco", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
    { icon: <Phone size={24}/>, href: "https://wa.me/5574999829797", color: "bg-green-500" }
  ];
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && actions.map((act, i) => (
          <motion.a key={i} href={act.href} target="_blank" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{opacity: 0, scale: 0.8}} className={cn("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white", act.color)}>{act.icon}</motion.a>
        ))}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all" style={{backgroundColor: isOpen ? '#0f172a' : colors.gold}}><Plus size={36} className={cn(isOpen && "rotate-45")} /></button>
    </div>
  );
};

// --- ESTRUTURA PRINCIPAL ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Avisos', href: '#avisos' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Bíblia', href: '#bible' },
    { name: 'Louvores', href: '#lyrics' },
    { name: 'Dízimos', href: '#giving' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#D4B36D] selection:text-[#0f172a]">
      
      {/* NAVBAR */}
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-[#0f172a]/95 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-8")}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <div className="flex flex-col cursor-pointer" onClick={() => setActiveTab('home')}>
            <span className="font-serif text-3xl font-bold leading-none text-white">IPVP</span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4B36D]">Várzea do Poço</span>
          </div>

          {activeTab === 'home' && (
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((l, i) => <a key={i} href={l.href} className="text-white/80 hover:text-[#D4B36D] text-xs font-bold uppercase tracking-[0.2em] transition-colors">{l.name}</a>)}
            </div>
          )}

          <div className="hidden lg:flex items-center gap-4">
            {activeTab === 'home' && <a href="#contact" className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all">Contato</a>}
            <button onClick={() => setActiveTab(activeTab === 'home' ? 'membros' : 'home')} className="px-6 py-2.5 rounded-full bg-[#D4B36D] text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
              {activeTab === 'home' ? <><ShieldCheck size={16} /> Membresia</> : '← Voltar ao Portal'}
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

       <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl p-6 flex flex-col gap-6 lg:hidden border-t border-white/10">
              {activeTab === 'home' && navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white/80 hover:text-[#D4B36D] border-b border-white/10 pb-4">{link.name}</a>)}
              <button onClick={() => { setActiveTab(activeTab === 'home' ? 'membros' : 'home'); setIsMobileMenuOpen(false); }} className="w-full px-6 py-4 rounded-xl bg-[#D4B36D] text-slate-900 font-bold uppercase tracking-widest flex justify-center items-center gap-2">
                {activeTab === 'home' ? 'Acesso Membresia' : 'Voltar ao Portal'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        {activeTab === 'home' ? (
          <div className="bg-white">
            <Hero />
            <Avisos />
            <Birthdays />
            <AnnualAgenda />
            <Leadership />
            <SpiritualResources />
            <BibleQuickSearch />
            <LyricsSearch />
            <YouTubeCourse />
            <Giving />
            <ContactSection />
          </div>
        ) : (
          <div className="bg-slate-50 pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
               <AdminMembers />
            </div>
          </div>
        )}
      </main>

      <footer className="py-16 text-center bg-[#0f172a] text-white">
        <ShieldCheck size={48} className="mx-auto mb-6 text-[#D4B36D]" />
        <p className="font-serif font-bold text-3xl mb-2">Igreja Presbiteriana de Várzea do Poço</p>
        <p className="text-xs font-semibold text-white/40 tracking-[0.2em] uppercase mb-8">Fidelidade à Palavra de Deus e Compromisso com a Verdade</p>
        <div className="h-1 w-16 bg-[#D4B36D] mx-auto rounded-full" />
      </footer>

      <SpeedDialButton />
    </div>
  );
}