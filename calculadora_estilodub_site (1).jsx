import { useState } from "react";

const precos = [
  { nome: "REMAP", preco: 150000 },
  { nome: "CAMBAGEM", preco: 150000 },
  { nome: "Suspensão a ar", preco: 150000 },

  { nome: "Freio Lvl 1", preco: 20000 },
  { nome: "Freio Lvl 2", preco: 40000 },
  { nome: "Freio Lvl 3", preco: 60000 },

  { nome: "Motor Lvl 1", preco: 20000 },
  { nome: "Motor Lvl 2", preco: 40000 },
  { nome: "Motor Lvl 3", preco: 60000 },
  { nome: "Motor Lvl 4", preco: 80000 },

  { nome: "Suspensão Lvl 1", preco: 20000 },
  { nome: "Suspensão Lvl 2", preco: 40000 },
  { nome: "Suspensão Lvl 3", preco: 60000 },
  { nome: "Suspensão Lvl 4", preco: 80000 },

  { nome: "Turbina Importada", preco: 100000 },

  { nome: "Blindagem 60%", preco: 50000 },
  { nome: "Blindagem 80%", preco: 80000 },
  { nome: "Blindagem 100%", preco: 100000 },

  { nome: "Full Tuning Popular", preco: 180000 },
  { nome: "Full Tuning Popular c/ Blindagem", preco: 230000 },
  { nome: "Full Tuning VIP", preco: 200000 },
  { nome: "Full Tuning VIP c/ Blindagem", preco: 250000 },
  { nome: "Full Tuning Exclusivo", preco: 250000 },
  { nome: "Full Tuning Exclusivo c/ Blindagem", preco: 280000 },

  { nome: "Vidros", preco: 20000 },
  { nome: "Rodas Básicas", preco: 20000 },
  { nome: "Rodas Importadas", preco: 40000 },
  { nome: "Pintura sem perolado", preco: 20000 },
  { nome: "Pintura com perolado", preco: 40000 },
  { nome: "Xênon", preco: 10000 },
  { nome: "Para-choque/Saia", preco: 15000 },
  { nome: "Retrovisor/placa/baú", preco: 10000 },
  { nome: "Buzina", preco: 10000 },
  { nome: "Som", preco: 10000 },

  { nome: "Full Tuning Helicóptero", preco: 500000 },
  { nome: "Turbo Helicóptero", preco: 120000 },
  { nome: "Blindagem Heli 20%", preco: 100000 },
  { nome: "Blindagem Heli 40%", preco: 150000 },
  { nome: "Blindagem Heli 60%", preco: 200000 },
  { nome: "Blindagem Heli 80%", preco: 250000 },
  { nome: "Blindagem Heli 100%", preco: 300000 },
];

export default function CalculadoraEstiloDUB() {
  const [selecionados, setSelecionados] = useState([]);

  const toggleItem = (item) => {
    setSelecionados((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const limpar = () => setSelecionados([]);

  const total = selecionados.reduce((soma, nome) => {
    const item = precos.find((p) => p.nome === nome);
    return soma + (item ? item.preco : 0);
  }, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto text-white bg-zinc-900 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Calculadora EstiloDUB</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto p-2">
        {precos.map((item) => (
          <label key={item.nome} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selecionados.includes(item.nome)}
              onChange={() => toggleItem(item.nome)}
            />
            <span>{item.nome} - R$ {item.preco.toLocaleString("pt-BR")}</span>
          </label>
        ))}
      </div>
      <div className="text-center my-4 text-xl">Total: R$ {total.toLocaleString("pt-BR")}</div>
      <div className="flex justify-center gap-4">
        <button
          onClick={limpar}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-2xl"
        >
          Apagar
        </button>
      </div>
    </div>
  );
}
