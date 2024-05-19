const express = require("express");
var cors = require("cors");
const { ObjectId } = require("mongodb");
const app = express();
const port = 5000;

// Middlewar
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://developer-employee:<>Password<>@crud-mongodb.bkqhhcm.mongodb.net/?retryWrites=true&w=majority&appName=crud-mongodb";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect to the "pandaDelivery" database and access its "employees" collection
    const database = client.db("pandaDelivery");
    const employeesCollection = database.collection("employees");

    //  Get API Method
    app.get("/employees", async (req, res) => {
      const cursor = employeesCollection.find({});
      const employees = await cursor.toArray();
      res.send(employees);
    });

    // Dynamic Get API Method
    app.get("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await employeesCollection.findOne(query);
      res.send(result);
    });

    // POST API Method
    app.post("/employees", async (req, res) => {
      const addEmployee = req.body;
      const result = await employeesCollection.insertOne(addEmployee);
      res.json(result);
    });

    // PUT API Method
    app.put("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const updateEmployee = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          idNumber: updateEmployee.idNumber,
          name: updateEmployee.name,
          email: updateEmployee.email,
          phone: updateEmployee.phone,
          address: updateEmployee.address,
          salary: updateEmployee.salary,
          joiningDate: updateEmployee.joiningDate,
          // image: updateEmployee.image,
          employeeType: updateEmployee.employeeType,
        },
      };
      const result = await employeesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // DELETE API Method
    app.delete("/employees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await employeesCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(
    "Hi, I'm a node server. Now I'm working.... so please don't distrube me. Thankyou!"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
