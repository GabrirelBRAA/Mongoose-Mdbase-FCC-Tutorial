require('dotenv').config();
let mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  age:Number,
  favoriteFoods:[{
    type:String,
  }],
})
const Person = mongoose.model("Person", personSchema)

const createAndSavePerson = (done) => {
  docInstance = new Person({name:"Joao", age:21, favoriteFoods:["Pizza", "Banana"]})
  
  docInstance.save(function(error, data){
    if (error) return done(error)
    done(null, data)
  })
    
}
var arrayOfPeople = [{name:"Maria", age:22, favoriteFoods:["Pizza", "Banana"]},
  {name:"Pedro", age:42, favoriteFoods:["Salsicha", "Cachorro"]},
  {name:"MariaFernanda", age:22, favoriteFoods:["Chocolate", "Gato"]}]
const createManyPeople = (arrayOfPeople, done) => {
  
  [Person.create(arrayOfPeople, function(error, data){
    if (error) return done(error);
    done(null, data);
  })]
};
var personName = "Maria"
const findPeopleByName = (personName, done) => {
  Person.find({name:personName}, function(error, data){
    if (error) return done(error);
    done(null, data)
}
)}

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
