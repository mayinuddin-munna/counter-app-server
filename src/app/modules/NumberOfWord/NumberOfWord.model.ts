import { Schema, model } from 'mongoose';
import { Word } from './NumberOfWord.interface';

const wordSchema = new Schema<Word>({
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

export const WordModel = model<Word>('Word', wordSchema);
