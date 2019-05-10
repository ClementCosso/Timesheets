const bcrypt = require("bcrypt");

const bcryptSalt = 10;

module.exports = [
  {
    username: "Clément C",
    administrator: true,
    employee: true,
    teamleader: true,
    email: "clement@relevanc.com",
    role: "Projet",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "User1",
    administrator: false,
    employee: true,
    teamleader: false,
    email: "user1@relevanc.com",
    role: "Data Scientist",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "User2",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "user2@relevanc.com",
    role: "Finance",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "Flores Black",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "floresblack@coash.com",
    role: "Finance",
    password: bcrypt.hashSync(
      "+33 (971) 550-2128",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Cecilia Perez",
    administrator: false,
    employee: false,
    teamleader: true,
    email: "ceciliaperez@coash.com",
    role: "Autre",
    password: bcrypt.hashSync(
      "+33 (839) 573-2883",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Mindy Sampson",
    administrator: false,
    employee: false,
    teamleader: true,
    email: "mindysampson@coash.com",
    role: "UX/UI",
    password: bcrypt.hashSync(
      "+33 (909) 499-2799",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Kim Roman",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "kimroman@coash.com",
    role: "Développeur",
    password: bcrypt.hashSync(
      "+33 (805) 434-2818",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Elena Clarke",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "elenaclarke@coash.com",
    role: "Data Scientist",
    password: bcrypt.hashSync(
      "+33 (972) 498-2848",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Charity Richmond",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "charityrichmond@coash.com",
    role: "Finance",
    password: bcrypt.hashSync(
      "+33 (929) 590-3356",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Billie Ewing",
    administrator: false,
    employee: false,
    teamleader: true,
    email: "billieewing@coash.com",
    role: "UX/UI",
    password: bcrypt.hashSync(
      "+33 (936) 420-3912",
      bcrypt.genSaltSync(bcryptSalt)
    )
  },
  {
    username: "Millicent Branch",
    administrator: false,
    employee: true,
    teamleader: true,
    email: "millicentbranch@coash.com",
    role: "Projet",
    password: bcrypt.hashSync(
      "+33 (912) 484-3568",
      bcrypt.genSaltSync(bcryptSalt)
    )
  }
];
