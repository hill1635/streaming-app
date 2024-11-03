const db = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
  get: function (req, res) {
    console.log("req.session.userId:", req.session.userId);
    if (!req.session.userId) {
      return;
    }
  
    db.findById({ _id: req.session.userId })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        console.error('Error getting user:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the user' });
      });
  },
  create: function (req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        console.log('req.body:', req.body);
        db.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => {
                console.error('Error creating user:', err); // Log the error details
                res.status(422).json({ error: err.message || err });
            });
    } catch (err) {
        console.error('Unexpected error:', err); // Log unexpected errors
        res.status(500).json({ error: 'Internal server error' });
    }
  },
  update: function (req, res) {
    console.log("req.session.userId:", req.session);
    db.findByIdAndUpdate({ _id: req.session.userId }, req.body)
      .then((dbModel) => res.json(dbModel))
      .then((dbModel) => console.log('User updated:', dbModel))
      .catch((err) => {
        console.error('Error updating user:', err);
        res.status(422).json({ error: err.message || err });
      });
  },
  remove: function (req, res) {
      db.findById({ _id: req.session.userId })
          .then((dbModel) => dbModel.remove())
          .then((dbModel) => res.json(dbModel))
          .catch((err) => {
              console.error('Error removing user:', err); // Log the error details
              res.status(422).json({ error: err.message || err });
          });
  },
	login: function (req, res) {
		db
			.find({ email: req.body.email })
			.then((dbModel) => {
				if (!dbModel) {
					res.status(400);
					return res.status(400).send({ message: 'Email is incorrect.' });
				}
				if (!bcrypt.compareSync(req.body.password, dbModel[0].password)) {
					return res.status(400).send({ message: 'Password is invalid.' });
				}
				req.session.save(() => {
					req.session.loggedIn = true;
					req.session.userId = dbModel[0]._id;
					res.status(200).json({ user: req.body.email, id: dbModel[0]._id });
				});
			})
			.catch((err) => res.status(500).json(err));
	},
	logout: function (req, res) {
		if (req.session.loggedIn) {
			req.session.destroy(() => {
				res.status(204).end();
			});
		} else {
			res.status(404).end();
		}
	},
};
