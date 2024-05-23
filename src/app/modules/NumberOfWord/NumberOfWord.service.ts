import { WordModel } from './NumberOfWord.model';
import { Word } from './NumberOfWord.interface';

const createWordIntoDB = async (word: Word) => {
  const result = await WordModel.create(word);
  return result;
};

const getAllWordsFromDB = async () => {
  const result = await WordModel.find();
  return result;
};

export const WordServices = {
  createWordIntoDB,
  getAllWordsFromDB,
};
