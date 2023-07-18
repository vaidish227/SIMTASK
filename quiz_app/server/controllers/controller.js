import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
export async function insertQuestions(req, res){
    /*try {
        Questions.insertMany({ questions: [0], answers: [1] }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
       })
    } catch (error) {
        res.json({ error })
    }*/
    await Questions.insertMany({questions, answers }).then((result) => {
        res.json({ msg: "Data Saved Successfully...!"})
    }).catch((err) => {
        res.json({ err })
    });
}
/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
       await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res){
   /*try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }*/
   const { username, result, attempts, points, achived } = req.body;
   if(!username && !result) throw new Error('Data Not Provided...!');
  await Results.create({ username, result, attempts, points, achived }).then((result) => {
    res.json({ msg : "Result Saved Successfully...!"})
   }).catch((err) => {
    res.json({err})
   });
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}