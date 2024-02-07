const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  const {
    intern,
    name,
    email,
    phone,
    age,
    city,
    state,
    income,
    service,
    profession,
    industry,
    religion,
    language,
    additionalLanguage,
    noOfChildren,
    childInfo,
    bookInfo,
    activityInfo,
    qualities,
    activityTimeWeekly,
    activityDuration,
    stime,
    things,
    practices,
    values,
    typeActivity,
    emotionalActivity,
    discipline,
    culturalActivity,
    challenges,
    workshop,
    wish,
    advice,
  } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const createContact = await Contact.create({
    intern,
    name,
    email,
    phone,
    age,
    city,
    state,
    income,
    service,
    profession,
    industry,
    religion,
    language,
    additionalLanguage,
    noOfChildren,
    childInfo,
    bookInfo,
    activityInfo,
    qualities,
    activityTimeWeekly,
    activityDuration,
    stime,
    things,
    practices,
    values,
    typeActivity,
    emotionalActivity,
    discipline,
    culturalActivity,
    challenges,
    workshop,
    wish,
    advice,
    userRole: req.user.userRole,
    userId: req.user.id,
  });
  res.status(201).json(createContact);
});

const updateContact = asyncHandler(async (req, res) => {
  const updateContact = await Contact.findById(req.params.id);
  if (!updateContact) {
    res.status(400);
    throw new Error("Contact not Found");
  }

  if (updateContact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(202).json(updatedContact);
});

const getContact = asyncHandler(async (req, res) => {
  console.log(req);
  const getContact = await Contact.findById(req.params.id);
  if (!getContact) {
    res.status(400);
    throw new Error("Contact not Found");
  }
  res.status(200).json(getContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const getContact = await Contact.findById(req.params.id);
  if (!getContact) {
    res.status(400);
    throw new Error("Contact not Found");
  }

  if (getContact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user contacts");
  }

  await Contact.deleteOne(getContact);
  res.status(200).json(getContact);
});

const getListByIntern = asyncHandler(async (req, res) => {
  const intern = req.params.intern;
  const getContact = await Contact.find({ intern });
  if (!getContact) {
    res.status(400);
    throw new Error("Contact not Found");
  }
  res.status(200).json(getContact);
});

// const getInternNames = asyncHandler(async (req,res)=>{

// })

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
  getListByIntern,
};
