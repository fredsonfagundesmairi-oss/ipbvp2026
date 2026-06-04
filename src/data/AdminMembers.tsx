import React, { useState } from 'react';
import { Lock, UserPlus, Search, FileText, Trash2, Edit, ShieldCheck } from 'lucide-react';
import { MEMBERS_DATA } from '../data/members';

const AdminMembers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Todos');

  const handleLogin = () => {
    if (password === '2933') {
      setIsAuthenticated(true);
    } else {
      alert('Senha Incorreta!');
    }
  };

  const filteredMembers = MEMBERS_DATA.filter(member => {
    const matchesSearch = member.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'Todos' || member.status === filterType;
    return matchesSearch && matchesFilter;
  });

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300">
        <Lock size={48} className="text-slate-400 mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Acesso Restrito</h3>
        <p className="text-slate-500 mb-6 text-sm">Apenas para o Conselho da IPVP</p>
        <input 
          type="password" 
          placeholder="Palavra-passe" 
          className="p-3 w-48 rounded-xl border-2 border-slate-200 mb-4 text-center focus:border-amber-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
        />
        <button onClick={handleLogin} className="bg-amber-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-amber-700 shadow-lg">
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      <div className="p-6 bg-slate-800 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Rol de Membros</h2>
          <p className="text-slate-400 text-sm italic">Gestão Administrativa IPVP</p>
        </div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold text-sm transition">
          <UserPlus size={18} /> Novo Membro
        </button>
      </div>

      <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar por nome..." 
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="p-2 rounded-xl border border-slate-200 text-slate-600 bg-white"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="Todos">Todos os Status</option>
          <option value="Comungante">Apenas Comungantes (Assembleia)</option>
          <option value="Não comungante">Não Comungantes</option>
        </select>

        <button className="flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-slate-300">
          <FileText size={18} /> Exportar Lista
        </button>
      </div>

      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table className="w-full text-left">
          <thead className="sticky top-0 bg-white shadow-sm z-10">
            <tr className="text-slate-400 text-xs font-bold border-b border-slate-100">
              <th className="p-4">NOME DO MEMBRO</th>
              <th className="p-4">STATUS</th>
              <th className="p-4">OFÍCIO</th>
              <th className="p-4">TELEFONE</th>
              <th className="p-4 text-center">AÇÕES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredMembers.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 transition">
                <td className="p-4">
                  <div className="font-bold text-slate-700">{member.nome}</div>
                  <div className="text-[10px] text-slate-400 uppercase">Nasc: {member.dataNascimento}</div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    member.status === 'Comungante' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="p-4">
                   <div className="flex items-center gap-1 text-sm text-slate-600">
                    {member.oficio !== 'Não oficial' && <ShieldCheck size={14} className="text-amber-500"/>}
                    {member.oficio}
                   </div>
                </td>
                <td className="p-4 text-sm text-slate-500">{member.celular}</td>
                <td className="p-4 flex justify-center gap-2">
                  <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={16}/></button>
                  <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-slate-50 text-right text-xs text-slate-400 border-t border-slate-100">
        Total: {filteredMembers.length} registros encontrados
      </div>
    </div>
  );
};

export default AdminMembers;