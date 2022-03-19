const config = require("config.json");
const mongoose = require("mongoose");
const Account = require("accounts/account.model");
const Service = require("services/service.model");
const Checkout = require("checkout/checkout.model");
const RefreshToken = require("accounts/refresh-token.model");
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  process.env.MONGODB_URI || config.connectionString,
  connectionOptions
);
mongoose.Promise = global.Promise;

module.exports = {
  init,
  Account,
  Service,
  Checkout,
  RefreshToken,
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function init() {
  const data = [
    {
      name: "Resume Writing",
      slug: "resume-writing",
      description: "This is resume writing",
      tiers: [
        {
          name: "Basic",
          price: 5,
          description: "This is Basic tier",
        },
        {
          name: "Professional",
          price: 10,
          description: "This is Professional tier",
        },
        {
          name: "Executive",
          price: 15,
          description: "This is Executive tier",
        },
      ],
    },
    {
      name: "Career Coaching",
      slug: "career-coaching",
      description: "This is Career Coaching",
      tiers: [
        {
          name: "Basic",
          price: 5,
          description: "This is Basic tier",
        },
        {
          name: "Professional",
          price: 10,
          description: "This is Professional tier",
        },
        {
          name: "Executive",
          price: 15,
          description: "This is Executive tier",
        },
      ],
    },
    {
      name: "Linkedin profile update",
      slug: "linkedin-profile-update",
      description: "This is Linkedin profile update",
      tiers: [
        {
          name: "Basic",
          price: 5,
          description: "This is Basic tier",
        },
        {
          name: "Professional",
          price: 10,
          description: "This is Professional tier",
        },
        {
          name: "Executive",
          price: 15,
          description: "This is Executive tier",
        },
      ],
    },
  ];
  Service.find({}, function (err, docs) {
    if (!docs.length) {
      Service.insertMany(data)
        .then(function () {
          console.log("Resume Writing added");
          console.log("Career Coaching added");
          console.log("Linkedin profile update added");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
}
