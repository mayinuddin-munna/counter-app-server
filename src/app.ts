import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { NumberOfWordRoutes } from './app/modules/NumberOfWord/NumberOfWord.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/number-of-word', NumberOfWordRoutes);
// app.use('/api/v1/number-of-character', NumberOfCharacterRoutes);
// app.use('/api/v1/number-of-sentence', NumberOfSentenceRoutes);
// app.use('/api/v1/number-of-paragraphs', NumberOfParagraphsRoutes);
// app.use('/api/v1/words-in-paragraph', WordsInParagraphRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Server is running!');
};

app.get('/', getAController);

export default app;

/* number-of-word
number-of-character
number-of-sentence
number-of-paragraphs
words-in-paragraph */
