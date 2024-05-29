const { Worker } = require("bullmq");
const IORedis = require("ioredis");

// Redis connection configuration
const connection = new IORedis({
  host: '127.0.0.1', // Your Redis server host
  port: 6379,        // Your Redis server port
  maxRetriesPerRequest: null, // Required for BullMQ compatibility
  enableReadyCheck: false     // Required for BullMQ compatibility
});


const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5000));

const worker = new Worker("email-queue", async (job) => {
  console.log(`Message received with id ${job.id}`)
  console.log(`${job.data}`);
  await sendEmail();
  console.log("Email sent");
}, { connection });

console.log("running");