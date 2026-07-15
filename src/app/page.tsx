export default function Dashboard() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900">Fáilte! (Bem-vindo)</h1>
      <p className="text-gray-500 mb-8">Continue sua jornada rumo à carreira internacional.</p>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-400 font-bold uppercase">Total XP</p>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-400 font-bold uppercase">Ofensiva</p>
          <p className="text-2xl font-bold text-orange-500">5 Dias</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-400 font-bold uppercase">Progresso</p>
          <p className="text-2xl font-bold text-green-500">12%</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg shadow-blue-50">
        <h2 className="text-xl font-bold mb-2">Próxima Lição</h2>
        <p className="text-gray-600 mb-6">English for Ireland: Volume 1 - The Arrival</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700">Começar Agora</button>
      </div>
    </div>
  );
}
