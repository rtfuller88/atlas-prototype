import { rtoQuestion } from './rto';
import { iceShootingQuestion } from './ice-shooting';
import { tiktokBanQuestion } from './tiktok-ban';
import { tariffsQuestion } from './tariffs';
import { socialMediaKidsQuestion } from './social-media-kids';
import { Question } from '../types';

export const QUESTIONS: Record<string, Question> = {
  'ice-shooting': iceShootingQuestion,
  'tiktok-ban': tiktokBanQuestion,
  'tariffs': tariffsQuestion,
  'rto-mandate': rtoQuestion,
  'social-media-kids': socialMediaKidsQuestion,
};

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS[id];
}
