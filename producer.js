const { Queue } = require("bullmq")

const notificationQueue = new Queue('email-queue');

async function init() {
  const res = await notificationQueue.add('email to hardik',
    {
      email: "jainhardik120@gmail.com",
      subject: "Hello sub",
      body: "Message body"
    });
  console.log("Job added to queue", res.id);
}

init();