const exp=require('express')
const app=exp()
const PORT=3000
const r1=exp.Router()
const r2=exp.Router()
const r3=exp.Router()

// MUST BE HERE (BEFORE ROUTES)
app.use(exp.json());
app.use(exp.urlencoded({ extended: true })); // Good to add if submitting standard HTML forms too

// ==========================================
// 1. USER ROUTER LOGIC
// ==========================================

// GET: Fetch all users or filter by query (e.g., /users?role=admin)
r1.get('/', (req, res) => {
  const { role } = req.query;
  if (role) {
    return res.json({ message: `Fetching users with role: ${role}` });
  }
  res.json({ message: 'Fetching all users' });
});

// GET: Fetch a single user by ID (e.g., /users/42)
r1.post('/:id', (req, res) => {
  const userId = req.params.id;
const { name, email } = req.body;
  res.json({ id: userId, user: { name, email }  });
});

// POST: Create a new user
r1.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  res.status(201).json({ message: 'User created successfully', user: { name, email } });
});



r2.get("/product",function(req,res){
    res.send("Product Route")
})
r3.get("/order",function(req,res){
    res.send("Order Route")
})

app.use("/user",r1)
app.use("/",r2)
app.use("/",r3)
app.listen(PORT,()=>{
    console.log("Server is Running..")
})