// import { createCareerPathService } from '../services';

const allUsers = [
  {
    firstName: "Ryan",
    lastName: "Cary",
    email: "ryan.cary@oliveai.com",
    reportsTo: {
      firstName: "Terry",
      lastName: "MacGregor",
      email: "terry.macgregor@oliveai.com",
    },
  },
  {
    firstName: "Ian",
    lastName: "Woods",
    email: "ian.woods@oliveai.com",
    reportsTo: {
      firstName: "Terry",
      lastName: "MacGregor",
      email: "terry.macgregor@oliveai.com",
    },
  },
  {
    firstName: "Seong",
    lastName: "Lee",
    email: "seong.lee@oliveai.com",
    reportsTo: {
      firstName: "Terry",
      lastName: "MacGregor",
      email: "terry.macgregor@oliveai.com",
    },
  },
];

const getAllNamelyUsers = (req, res, next) => {

  try {
    return res.send(allUsers);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getNamelyUserByName = (req, res) => {
  const { name } = req.params;
  try {
    const user = allUsers.find((u) => `${u.firstName} ${u.lastName}`.toLowerCase() === name.toLowerCase()) || {};
    res.send(user)
  } catch (err) {
    res.sendStatus(500)
  }
}

export { getAllNamelyUsers, getNamelyUserByName };
