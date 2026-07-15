import { getLesson } from '@/lib/markdown';

export default function LessonPage({ params }: { params: { slug: string[] } }) {
  const lesson = getLesson(params.slug);
  
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Lição</span>
      <h1 className="text-4xl font-black text-gray-900 mt-2 mb-8">{lesson.metadata.title}</h1>
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
        {lesson.content}
      </div>
      <div className="mt-10 pt-10 border-t">
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg">Concluir Aula (+{lesson.metadata.xp} XP)</button>
      </div>
    </div>
  );
}
