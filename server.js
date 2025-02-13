require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
