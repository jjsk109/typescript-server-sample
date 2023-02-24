import express from 'express';
import sampleMiddlewareRouter from './routes/SampleRoutes';
import ErrorHandler from './utils/ErrorHandler';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const port = 3012;

// import cors from 'cors';
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
// }));


app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'stackpath.bootstrapcdn.com']
      }
    }
  })
);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/sample', sampleMiddlewareRouter);


app.use(ErrorHandler.handle404Error);

app.use(ErrorHandler.handle500Error);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
