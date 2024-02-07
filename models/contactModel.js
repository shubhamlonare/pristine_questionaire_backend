const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    userRole: {
      type: String,
    },
    intern: {
      type: String,
      required: [true, "please add intern name."],
    },
    name: {
      type: String,
      required: [true, "please add contact name."],
    },
    email: {
      type: String,
      required: [true, "please add contact email address."],
    },
    phone: {
      type: String,
      required: [true, "please add contact Phone number."],
    },
    age: {
      type: String,
      required: [true, "please add contact age."],
    },
    city: {
      type: String,
      required: [true, "please add city."],
    },
    state: {
      type: String,
      required: [true, "please add state."],
    },
    income: {
      type: String,
      required: [true, "please add income."],
    },
    service: {
      type: String,
      required: [true, "please add service."],
    },
    profession: {
      type: String,
      required: [true, "please add profession."],
    },
    industry: {
      type: String,
      required: [true, "please add industry."],
    },
    religion: {
      type: String,
      required: [true, "please add religion."],
    },
    language: {
      type: String,
      required: [true, "please add language."],
    },
    additionalLanguage: String,

    stime: {
      type: String,
    },
    things: {
      type: String,
    },

    practices: {
      type: String,
    },
    values: {
      type: String,
    },
    typeActivity: {
      type: String,
    },
    emotionalActivity: {
      type: String,
    },
    discipline: {
      type: String,
    },
    culturalActivity: {
      type: String,
    },
    challenges: {
      type: String,
    },
    workshop: {
      type: String,
    },
    wish: {
      type: String,
    },
    advice: {
      type: String,
    },
    noOfChildren: {
      type: Number,
      required: [true, "please add no of children."],
    },

    activityInfo: [
      {
        serialNo: String,
        activityName: String,
        qualities: String,
        activityTimeWeekly: String,
        activityDuration: String,
        prefferedAge: String,
      },
    ],
    // childInfo:[
    //     {
    //         name: String,
    //         gender: String,
    //         academicStandard: String,
    //         age: String
    //     },
    // ],
    bookInfo: [
      {
        bookname: String,
        author: String,
        language: String,
        age: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
