import { Schema, model } from 'mongoose';
import { Word } from './NumberOfWord.interface';

const wordSchema = new Schema<Word>({
  content: { type: String, required: true },
});

export const WordModel = model<Word>('Word', wordSchema);
