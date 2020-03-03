const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { title, message } = req.body;
  notifySend(title, message)
    .then(() => {
      res.send({
        "status": 200,
        "message": "ok"
      });
    })
    .catch((e) => res.send('error: ' + e));
});

app.get('/issureList', (req, res) => {
  getProjectIssureList(9021519)
    .then(data => {
      const result = data.map(item => {
        const { title, labels, author, web_url, due_date } = item;
        return {
          title, labels, author, web_url, due_date
        };
      });
      res.send(result)
    })
    .catch(() => {
      res.send('error');
    });
});

function notifySend(title, message) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer PEesZXSF3GXA47vGCI0xHQ0ZJFlah9JDoIl2Rf3qd5B',
      'Content-Type': 'application/json'
    },
    params: { message: `\n${title}\n${message}` },
    url: 'https://notify-api.line.me/api/notify',
  };
  return axios(options);
}

function getProjectIssureList(projectId) {
  const options = {
    method: 'GET',
    headers: {
      'PRIVATE-TOKEN': 'xSydsx1_B_eZbnUBpqsF'
    },
    url: `https://gitlab.com/api/v4/projects/${projectId}/issues`,
  };
  return axios(options).then(res => res.data);
}

app.listen(PORT, () => console.log(`Port ${PORT} is work !`));
