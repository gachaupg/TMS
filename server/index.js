import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";
import milestone from './routes/milestone.js'
import vacation from './routes/vacation.js'
import complain from './routes/complain.js'
import users from './routes/admin.js'
import analysis from './routes/admin.js'
import mile from './routes/admin.js'
import match from './routes/match.js'
import twilio  from 'twilio'
import complainMatch from './routes/matchVacation.js'
import tenantRouter from './routes/tenant.js'
import noticeRouter from './routes/tenantNotice.js'
import complainRouter from './routes/caretakerComment.js'
import vacationRouter from './routes/caretakerVacation.js'
import expenses from './routes/expenses.js'
import specific  from './routes/specificVacations.js'
import specificRouter  from './routes/specificComplain.js'
import servicesRouter  from './routes/services.js'
import userCrudRouter  from './routes/userCrud.js'
import summaryRouter  from './routes/summary.js'
import singleSummaryRouter  from './routes/summarySingles.js'
import mpesaRouter from './routes/mpesa.js'
//twilio requirements -- Texting API .js
// const accountSid = '___YOUR___ACCOUNT__SID';
// const authToken = '___YOUR___AUTHENTICATION__TOKEN'; 
// const client = new twilio(accountSid, authToken);

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/project", tourRouter);
app.use('/milestone', milestone)
app.use('/vacation', vacation)
app.use('/complain', complain)
app.use('/stats', users)
app.use('/stats', analysis)
app.use('/stats', mile)
app.use('/stats', match)
app.use('/expenses', expenses)
app.use('/stats', complainMatch)
app.use('/tenant', tenantRouter)
app.use('/notice', noticeRouter)
app.use('/caretakervacation', vacationRouter)
app.use('/caretakercomplain', complainRouter)
app.use('/start/vacation', specific)
app.use('/start/complain', specificRouter)
app.use('/start/services', servicesRouter)
app.use('/usercrud', userCrudRouter)
app.use('/summary', summaryRouter)
app.use('/stk', mpesaRouter)
app.use('/status', singleSummaryRouter)
app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});


//Twilio 
// app.get('/send-text', (req, res) => {
//   //Welcome Message
//   res.send('Hello to the Twilio Server')

//   //_GET Variables
//   const { recipient, textmessage } = req.query;


//   //Send Text
//   client.messages.create({
//       body: textmessage,
//       to: recipient,  // Text this number
//       from: '+15074734314' // From a valid Twilio number
//   }).then((message) => console.log(message.body));
// })

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
