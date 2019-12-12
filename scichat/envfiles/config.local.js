'use strict';

module.exports = {
  synapse: {
    name: process.env.SYNAPSE_NAME || 'ess',
    host: process.env.SYNAPSE_SERVER || 'scitest.esss.lu.se',
    port: process.env.SYNAPSE_PORT || null,
    bot: {
      name: process.env.SYNAPSE_BOT_NAME || 'scicatbot',
      password: process.env.SYNAPSE_BOT_PASSWORD || 'insertpasshere',
    },
  },
  rabbitmq: {
    host: process.env.RABBITMQ_SERVER || 'localhost',
    port: process.env.RABBITMQ_PORT || null,
    queue: process.env.RABBITMQ_QUEUE || 'proposal_events',
  },
};
