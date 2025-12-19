
import { Trigram } from './types';

export const TRIGRAMS: Record<number, Trigram> = {
  1: { id: 1, name: '乾', symbol: '☰', lines: [1, 1, 1], nature: '天' },
  2: { id: 2, name: '兌', symbol: '☱', lines: [1, 1, 0], nature: '澤' },
  3: { id: 3, name: '離', symbol: '☲', lines: [1, 0, 1], nature: '火' },
  4: { id: 4, name: '震', symbol: '☳', lines: [0, 0, 1], nature: '雷' },
  5: { id: 5, name: '巽', symbol: '☴', lines: [0, 1, 1], nature: '風' },
  6: { id: 6, name: '坎', symbol: '☵', lines: [0, 1, 0], nature: '水' },
  7: { id: 7, name: '艮', symbol: '☶', lines: [0, 0, 0], nature: '山' }, // Correction: Gen is 0,0,0 in binary? No, wait. 
  // Standard representation: Gen ☶ is 0-0-1 (from bottom). Lines: [0,0,1]
  // Standard sequence: 1乾 2兌 3離 4震 5巽 6坎 7艮 8坤
};

// Re-defining Trigrams with standard lines (from bottom to top)
export const BA_GUA: Trigram[] = [
  { id: 1, name: '乾', symbol: '☰', lines: [1, 1, 1], nature: '天' },
  { id: 2, name: '兌', symbol: '☱', lines: [1, 1, 0], nature: '澤' },
  { id: 3, name: '離', symbol: '☲', lines: [1, 0, 1], nature: '火' },
  { id: 4, name: '震', symbol: '☳', lines: [1, 0, 0], nature: '雷' },
  { id: 5, name: '巽', symbol: '☴', lines: [0, 1, 1], nature: '風' },
  { id: 6, name: '坎', symbol: '☵', lines: [0, 1, 0], nature: '水' },
  { id: 7, name: '艮', symbol: '☶', lines: [0, 0, 1], nature: '山' },
  { id: 8, name: '坤', symbol: '☷', lines: [0, 0, 0], nature: '地' },
];

export const EARTHLY_BRANCHES = [
  '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'
];

export const HEXAGRAM_NAMES: Record<string, string> = {
  '天天': '乾為天', '天天天': '乾為天', // Indexing by nature combinations
  '天澤': '天澤履', '天火': '天火同人', '天雷': '天雷無妄', '天風': '天風姤', '天水': '天水訟', '天山': '天山遁', '天地': '天地否',
  '澤天': '澤天夬', '澤澤': '兌為澤', '澤火': '澤火革', '澤雷': '澤雷隨', '澤風': '澤風大過', '澤水': '澤水困', '澤山': '澤山咸', '澤地': '澤地萃',
  '火天': '火天大有', '火澤': '火澤睽', '火火': '離為火', '火雷': '火雷噬嗑', '火風': '火風鼎', '火水': '火水未濟', '火山': '火山旅', '火地': '火地晉',
  '雷天': '雷天大壯', '雷澤': '雷澤歸妹', '雷火': '雷火豐', '雷雷': '震為雷', '雷風': '雷風恒', '雷水': '雷水解', '雷山': '雷山小過', '雷地': '雷地豫',
  '風天': '風天小畜', '風澤': '風澤中孚', '風火': '風火家人', '風雷': '風雷益', '風風': '巽為風', '風水': '風水渙', '風山': '風山漸', '風地': '風地觀',
  '水天': '水天需', '水澤': '水澤節', '水火': '水火既濟', '水雷': '水雷屯', '水風': '水風井', '水水': '坎為水', '水山': '水山蹇', '水地': '水地比',
  '山天': '山天大畜', '山澤': '山澤損', '山火': '山火賁', '山雷': '山雷頤', '山風': '山風蠱', '山水': '山水蒙', '山山': '艮為山', '山地': '山地剝',
  '地天': '地天泰', '地澤': '地臨', '地火': '地火明夷', '地雷': '地雷復', '地風': '地風升', '地水': '地水師', '地山': '地山謙', '地地': '坤為地'
};

// Map of indices to names (ShangIndex-XiaIndex)
export const HEX_GRID: string[][] = [
  ['乾', '夬', '大有', '大壯', '小畜', '需', '大畜', '泰'], // Shang: 1 (Qian)
  ['履', '兌', '睽', '歸妹', '中孚', '節', '損', '臨'],     // Shang: 2 (Dui)
  ['同人', '革', '離', '豐', '家人', '既濟', '賁', '明夷'], // Shang: 3 (Li)
  ['無妄', '隨', '噬嗑', '震', '益', '屯', '頤', '復'],     // Shang: 4 (Zhen)
  ['姤', '大過', '鼎', '恒', '巽', '井', '蠱', '升'],       // Shang: 5 (Xun)
  ['訟', '困', '未濟', '解', '渙', '坎', '蒙', '師'],       // Shang: 6 (Kan)
  ['遁', '咸', '旅', '小過', '漸', '蹇', '艮', '謙'],       // Shang: 7 (Gen)
  ['否', '萃', '晉', '豫', '觀', '比', '剝', '坤']        // Shang: 8 (Kun)
];
