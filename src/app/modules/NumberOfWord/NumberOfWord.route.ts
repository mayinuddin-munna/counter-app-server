import express from 'express';
import { WordControllers } from './NumberOfWord.controller';

const router = express.Router();

router.post('/create-word', WordControllers.createWord);
router.get('/', WordControllers.getAllWords);

export const NumberOfWordRoutes = router;

/* number-of-word
number-of-character
number-of-sentence
number-of-paragraphs
words-in-paragraph */
