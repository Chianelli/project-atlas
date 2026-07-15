import './globals.css';
import { LayoutDashboard, Map, BookOpen, Trophy, User } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head><script src="https://cdn.tailwindcss.com"></script></head>
      <body className="flex bg-gray-50 min-h-screen">
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
          <div className="p-6 text-blue-600 font-bold text-xl tracking-tighter">PROJECT ATLAS</div>
          <nav className="flex-1 px-4 space-y-2">
            <a href="/" className="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg font-medium"><LayoutDashboard size={20}/> Dashboard</a>
            <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"><Map size={20}/> Roadmap</a>
            <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"><BookOpen size={20}/> Cursos</a>
            <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"><Trophy size={20}/> Conquistas</a>
          </nav>
          <div className="p-4 border-t"><div className="bg-blue-600 text-white p-4 rounded-xl text-sm font-bold text-center">Destino: Irlanda 🇮🇪</div></div>
        </aside>
        <main className="flex-1 ml-64 p-8">{children}</main>
      </body>
    </html>
  );
}
