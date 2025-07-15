// Get single student
const express = require('express');
const router = express.Router();
const Student = require('../Model/student');

// ✅ Get all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ✅ Get a single student
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  res.json(student);
});

// ✅ Add a new student
router.post('/register', async (req, res) => {
  const { name, email, course } = req.body;
  const newStudent = new Student({ name, email, course });
  await newStudent.save();
  res.redirect(`/success.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&course=${encodeURIComponent(course)}`);
});

// ✅ Update student
router.put('/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// ✅ Delete student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;




// READ all
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
});

module.exports = router;
