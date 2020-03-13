const express = require("express");
const db = require("../data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: "The action information could not be retrieved."
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.get(id)
    .then(action => {
      if (!action) {
        res.status(404).json({
          error: "Invalid id"
        });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The action could not be retrieved."
      });
    });
});

router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;

  if (!project_id || !description || !notes) {
    res.status(400).json({
      error: "Please provide project_id, description, and notes for the post."
    });
  }

  db.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the action to the database"
      });
    });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(action => {
      if (action) {
        res.status(204).end();
      } else {
        res.status(404).json({
          error: "The action with the specified id does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The action could not be removed."
      });
    });
});

router.put("/:id", (req, res) => {
  const { project_id, description, notes } = req.body;

  if (!project_id || !description || !notes) {
    res.status(400).json({
      error: "Please provide project_id, description, and notes for the post."
    });
  }

  db.update(req.params.id, req.body)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          error: "The action with specified id does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The action informaton could not be modified."
      });
    });
});

module.exports = router;
