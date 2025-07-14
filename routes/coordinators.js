const express = require('express');
const Coordinator = require('../models/Coordinator');
const router = express.Router();

// GET /api/coordinators - Get all coordinators with optional search
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } }
        ]
      };
    }
    
    const coordinators = await Coordinator.find(query).sort({ createdAt: -1 });
    res.json(coordinators);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/coordinators/:id - Get specific coordinator
router.get('/:id', async (req, res) => {
  try {
    const coordinator = await Coordinator.findById(req.params.id);
    if (!coordinator) {
      return res.status(404).json({ message: 'Coordinator not found' });
    }
    res.json(coordinator);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;