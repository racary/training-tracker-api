// import { createCareerPathService } from '../services';

const getAllNamelyUsers = (req, res, next) => {
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

  try {
    return res.send(allUsers);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { getAllNamelyUsers };
