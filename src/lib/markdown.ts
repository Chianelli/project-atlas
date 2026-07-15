import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getLesson(slugArray: string[]) {
  const fullPath = path.join(contentDirectory, ...slugArray) + '.md';
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { metadata: data, content };
}
