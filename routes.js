const express = require('express');
const router = express.Router();
const Student = require('./model/schema');

// Home page – show all students
router.get('/', async (req, res) => {

  // const students = await Student.find();


  const {page=1, limit=3 }=req.query
  
  const option={
  page:parseInt(page),
  limit:parseInt(limit)

  }
  const result = await Student.paginate({},option );

//  res.send(result)
  res.render('home', {

totalDocs:result.totalDocs ,
  limit:result.limit,
  totalPages:result.totalPages,
  currentPage:result.page,
  counter:result.pagingCounter,
  hasPrevPage:result.hasPrevPage,
  hasNextPage:result.hasNextPage,
  prevPage:result.prevPage,
  nextPage:result.nextPage,
  students:result.docs

   });




});

router.get('/add', async (req, res) => {
  res.render('add');
});

// Show edit page for a single student
router.get('/change/:id', async (req, res) => {
  const student = await Student.findById(req.params.id); // ❗get one student
  res.render('change', { student }); // ❗send one student only
});

// Add new student
router.post('/add', async (req, res) => {
  const { First_name,Last_name, Age, Course,Email } = req.body;
  await Student.create({  First_name,Last_name, Age, Course,Email});
  res.redirect('/');
});

// Update student
router.post('/change/:id', async (req, res) => {
  const {  First_name,Last_name, Age, Course,Email } = req.body;
  await Student.findByIdAndUpdate(req.params.id, {  First_name,Last_name, Age, Course,Email });
  res.redirect('/');
});

// Delete student
router.post('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
module.exports = router;




