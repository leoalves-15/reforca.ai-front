import { GRADES } from '../grades/grades';

export function isValidGrade(gradeId: string): boolean {
  return GRADES.some(g => g.id === gradeId);
}