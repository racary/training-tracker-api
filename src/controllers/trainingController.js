const allTrainings = [
  {
    enrollment_id: 1425526,
    content_type: 'Uploaded Policy',
    module_name: 'Acceptable Use Policy',
    user: {
      id: 796742,
      first_name: 'Ian',
      last_name: 'Woods',
      email: 'ian.woods@oliveai.com',
    },
    campaign_name: 'OWASP Top 10',
    enrollment_date: '2019-04-02T15:02:38.000Z',
    start_date: '2019-04-02T15:02:38.000Z',
    completion_date: '',
    status: 'Passed',
    time_spent: 2340,
    policy_acknowledged: false,
  },
  {
    enrollment_id: 1425526,
    content_type: 'Uploaded Policy',
    module_name: 'Acceptable Use Policy',
    user: {
      id: 796742,
      first_name: 'Ian',
      last_name: 'Woods',
      email: 'ian.woods@oliveai.com',
    },
    campaign_name: 'Internet Security When You Work From Home',
    enrollment_date: '2019-04-02T15:02:38.000Z',
    start_date: '2019-04-02T15:02:38.000Z',
    completion_date: '',
    status: 'Passed',
    time_spent: 2340,
    policy_acknowledged: false,
  },
  {
    enrollment_id: 1425526,
    content_type: 'Uploaded Policy',
    module_name: 'Acceptable Use Policy',
    user: {
      id: 796742,
      first_name: 'Ian',
      last_name: 'Woods',
      email: 'ian.woods@oliveai.com',
  },
    campaign_name: 'New Employee Policies',
    enrollment_date: '2019-04-02T15:02:38.000Z',
    start_date: '2019-04-02T15:02:38.000Z',
    completion_date: '',
    status: 'Passed',
    time_spent: 2340,
    policy_acknowledged: false,
  },
  {
    enrollment_id: 1425526,
    content_type: 'Uploaded Policy',
    module_name: 'Acceptable Use Policy',
    user: {
      id: 796742,
      first_name: 'Ian',
      last_name: 'Woods',
      email: 'ian.woods@oliveai.com',
    },
    campaign_name: 'Preventing Workplace Harassment for Employees',
    enrollment_date: '2019-04-02T15:02:38.000Z',
    start_date: '2019-04-02T15:02:38.000Z',
    completion_date: '2019-04-02T15:02:38.000Z',
    status: 'Passed',
    time_spent: 2340,
    policy_acknowledged: false,
  },
  {
    enrollment_id: 1425526,
    content_type: 'Uploaded Policy',
    module_name: 'Acceptable Use Policy',
    user: {
      id: 796742,
      first_name: 'Ian',
      last_name: 'Woods',
      email: 'ian.woods@oliveai.com',
  },
    campaign_name: 'HIPAA: Privacy and Security Basics',
    enrollment_date: '2019-04-02T15:02:38.000Z',
    start_date: '2019-04-02T15:02:38.000Z',
    completion_date: '2019-04-02T15:02:38.000Z',
    status: 'Passed',
    time_spent: 2340,
    policy_acknowledged: false,
  },
];

const getAllTrainingEnrollmentsForOneUser = (req, res, next) => {
    try {
      // const email = req.params;
      // const results = allTrainings.filter(training => user.email === email);
      return res.send(allTrainings);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };
  
  export { getAllTrainingEnrollmentsForOneUser };
  