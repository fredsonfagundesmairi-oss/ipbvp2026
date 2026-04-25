"use client";

import React, { useState, useEffect } from 'react';
// Importe o seu JSON de membros aqui ou simule o fetch
import membrosData from './membros.json';

export default function GeradorAtas() {
  const [tipoAta, setTipoAta] = useState('Conselho');
  const [numeroAta, setNumeroAta] = useState('');
  const [dataReuniao, setDataReuniao] = useState('');
  const [textoResolucao, setTextoResolucao] = useState('');
  const [presentes, setPresentes] = useState<string[]>([]);
  const [linhasDeFecho, setLinhasDeFecho] = useState(0);

  // Função para formatar o nome com a sigla correta (Rev, Pb, Diác)
  const formatarNome = (membro: any) => {
    return membro.sigla ? `${membro.sigla} ${membro.nome}` : membro.nome;
  };

  // Simulação de cálculo de linhas para o "Z" de fecho
  // Num sistema real, mediríamos a altura do elemento de texto
  useEffect(() => {
    const estimativaLinhasTexto = Math.ceil(textoResolucao.length / 80) + presentes.length + 5;
    const restantes = 44 - estimativaLinhasTexto;
    setLinhasDeFecho(restantes > 0 ? restantes : 0);
  }, [textoResolucao, presentes]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      
      {/* COLUNA ESQUERDA: FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-slate-800">Redigir Nova Ata</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Tipo de Reunião</label>
              <select 
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={tipoAta}
                onChange={(e) => setTipoAta(e.target.value)}
              >
                <option>Conselho</option>
                <option>Assembleia Geral</option>
                <option>UPH</option>
                <option>SAF</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Número da Ata</label>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ex: 87"
                onChange={(e) => setNumeroAta(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Presenças (Rol de 84 Membros)</label>
            <div className="h-48 overflow-y-auto border border-slate-200 p-3 rounded-md bg-slate-50">
              {membrosData.map((membro) => (
                <label key={membro.nome} className="flex items-center space-x-2 mb-1 text-sm">
                  <input 
                    type="checkbox" 
                    className="rounded text-blue-600"
                    onChange={(e) => {
                      const nomeFormatado = formatarNome(membro);
                      if (e.target.checked) setPresentes([...presentes, nomeFormatado]);
                      else setPresentes(presentes.filter(p => p !== nomeFormatado));
                    }}
                  />
                  <span>{formatarNome(membro)}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Resoluções e Deliberações</label>
            <textarea 
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-40"
              placeholder="Digite aqui o corpo da ata..."
              onChange={(e) => setTextoResolucao(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      {/* COLUNA DIREITA: PRÉ-VISUALIZAÇÃO A4 */}
      <div className="flex justify-center bg-slate-200 p-4 overflow-y-auto rounded-lg">
        <div id="ata-a4" className="w-[210mm] min-h-[297mm] bg-white p-[20mm] pl-[30mm] shadow-2xl relative font-['Arial'] text-[12pt] leading-[1.5] text-justify text-black">
          
          {/* Numeração Lateral de 1 a 45 */}
          <div className="absolute left-[15mm] top-[20mm] text-right w-[10mm] text-slate-400 select-none text-[10pt]">
            {Array.from({ length: 45 }, (_, i) => (
              <div key={i+1} className="h-[1.5em]">{i + 1}</div>
            ))}
          </div>

          {/* Cabeçalho e Corpo */}
          <div className="relative z-10">
            <p className="font-bold text-center mb-6 uppercase">
              ATA NÚMERO {numeroAta || "___"} - REUNIÃO DO {tipoAta.toUpperCase()}
            </p>
            
            <p>
              Aos ___ dias do mês de ________ do ano de dois mil e vinte e seis, reuniram-se na sede da 
              Igreja Presbiteriana em Várzea do Poço-BA, situada na Av. Durval Gama, nº 17, 
              estando presentes: {presentes.length > 0 ? presentes.join(", ") : "________________"}.
            </p>
            
            <p className="mt-4 whitespace-pre-wrap">
              {textoResolucao || "As deliberações aparecerão aqui..."}
            </p>

            {/* Linhas de Fechamento (O "Z") */}
            {Array.from({ length: linhasDeFecho }).map((_, i) => (
              <div key={i} className="border-b border-black h-[1.5em] w-full mt-[2px]"></div>
            ))}
          </div>

          {/* Notas de Rodapé Simbolizadas */}
          <div className="absolute bottom-[20mm] left-[30mm] right-[20mm] border-t border-black pt-2 text-[10pt] leading-tight">
            1. Ata {numeroAta} - IPVP Várzea do Poço <br />
            2. {tipoAta} - Registro Administrativo
          </div>
        </div>
      </div>
    </div>
  );
}