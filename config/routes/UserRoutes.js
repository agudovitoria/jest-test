const BASE_URL = '/user';

const getRandomResponseTime = () => parseInt((Math.random() * 5 * 1000).toFixed(0), 10);

const getAllResolve = (req, res) => {
  const response = res.json({ message: `GET ALL USERS!` });

  return new Promise(() => setTimeout(() => Promise.resolve(response), getRandomResponseTime()));
};

const getOneResolve = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = res.json({ message: `GET USER ${id} USER!` });

  return new Promise(() => setTimeout(() => Promise.resolve(response), getRandomResponseTime()));
};

const postResolve = (req, res) => {
  const name = req.body.name;
  const response = res.json({ message: `USER ${name} CREATED!` });

  return new Promise(() => setTimeout(() => Promise.resolve(response), getRandomResponseTime()));
};

const putResolve = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const response = res.json({ message: `USER ${id} UPDATED!` });

  return new Promise(() => setTimeout(() => Promise.resolve(response), getRandomResponseTime()));
};

const deleteResolve = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = res.json({ message: `USER [${id}] DELETED!` });

  return new Promise(() => setTimeout(() => Promise.resolve(response), getRandomResponseTime()));
};

class UserRoutes {
  static addRoutes(router) {
    router.route(BASE_URL).get((req, res) => getAllResolve(req, res));
    router.route(`${BASE_URL}/:id`).get((req, res) => getOneResolve(req, res));
    router.route(BASE_URL).post((req, res) => postResolve(req, res));
    router.route(BASE_URL).put((req, res) => putResolve(req, res));
    router.route(`${BASE_URL}/:id`).delete((req, res) => deleteResolve(req, res));
  }
}

module.exports = UserRoutes;