import { Request, Response } from 'express';
import { WordServices } from './NumberOfWord.service';
import wordValidationSchema from './NumberOfWord.validation';

const createWord = async (req: Request, res: Response) => {
  try {
    const word = req.body;

    // data validation schema using zod
    const zodParseData = wordValidationSchema.parse(word);

    const result = await WordServices.createWordIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'word is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

const getAllWords = async (req: Request, res: Response) => {
  try {
    const result = await WordServices.getAllWordsFromDB();

    res.status(200).json({
      success: true,
      message: 'words are retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const WordControllers = {
  createWord,
  getAllWords,
};
