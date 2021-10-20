const express = require('express');
require('dotenv').config()
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const authRoutes = require('./routes/auth.routes.js');
const advRoutes = require('./routes/advertisement.routes.js');
const pplRoutes = require('./routes/people.routes.js');
const appliedRoutes = require('./routes/candidacy.routes.js');
const adminRoutes = require('./routes/admin.routes.js');

var cors = require('cors');

app.use(cors({origin:true,credentials: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "*"),
    next()
  })

// AUTH
app.post('/register', authRoutes);
app.post('/login', authRoutes);
app.post('/login/admin', authRoutes);
app.post('/login/company', authRoutes);
app.put('/register/cp', authRoutes);


// ADVERTISEMENTS
app.get('/advertisements', advRoutes);
app.get('/advertisement/by_title', advRoutes);
app.get('/advertisement/by_date', advRoutes);
app.post('/advertisement/add', advRoutes);
app.post('/advertisement/apply', advRoutes);
app.get('/advertisement/by_id', advRoutes);
app.get('/advertisements/cards', advRoutes);
app.post('/advertisement/delete', advRoutes);
app.post('/company/advertisements', advRoutes);
app.put('/advertisements/edit', advRoutes);

//PEOPLE
app.post('/user', pplRoutes);
app.delete('/delete/user', pplRoutes);
app.post('/user/update', pplRoutes);

//CANDIDACY
app.post('/applied/all', appliedRoutes);
app.post('/applied/delete', appliedRoutes);
app.post('/applied/apply', appliedRoutes);
app.post('/company/advertisements/applied/user', appliedRoutes);

//ADMIN
app.get('/admin/users/all', adminRoutes);
app.delete('/admin/users/delete', adminRoutes);
app.delete('/admin/company/delete', adminRoutes);
app.delete('/admin/advertisement/delete', adminRoutes);
app.get('/admin/companies/all', adminRoutes);
app.get('/admin/advertisement/all', adminRoutes);
app.put('/admin/users/add', adminRoutes);
app.put('/admin/users/update', adminRoutes);
app.put('/admin/companies/add', adminRoutes);
app.put('/admin/companies/update', adminRoutes);
app.put('/admin/advertisement/update', adminRoutes);
app.put('/admin/advertisement/create', adminRoutes);

app.get('/table', adminRoutes);

//COMPANY

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})