const express = require('express');
const config = require('config')
const axios = require('axios');
const app = express();
const port = 3000;
const url_user = config.get('url_user')
const url_users = config.get('url_users')
const url_repos = config.get('url_repos')
const myAccept = config.get('headers.Accept')


require("dotenv").config()
const myToken = process.env.TOKEN


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

// get user info
app.get('/api/get-user', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get user info from github
    axios.get(url_user, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

//get users 
app.get('/api/get-users', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get users from github
    axios.get(url_users, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            // console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            // console.log(error);
            res.send(error);
        });
    }
);

// get specific user info
app.get('/api/get-user-info', (req, res) => {
    const token = req.headers.authorization;
    const user = req.query.user;
    console.log(token);
    // get user info from github
    axios.get(`${url_users}/${user}`, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

// get user followers
app.get('/api/get-followers', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get followers from github
    axios.get(`${url_user}/followers`, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);


// get user projects
app.get('/api/get-projects', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get projects from github
    axios.get('https://api.github.com/user/repos', {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.get('/api/get-issues', (req, res) => {
    const token = req.headers.authorization;
    const project = req.query.project;
    console.log(token);
    // get projects from github
    axios.get(`${url_repos}/${project}/issues`, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.get('/api/get-issues-comments', (req, res) => {
    const token = req.headers.authorization;
    const project = req.query.project;
    const issue = req.query.issue;
    console.log(token);
    // get projects from github
    axios.get(`${url_repos}/${project}/issues/${issue}/comments`, {
        headers: {
            Accept: myAccept,
            Authorization: myToken
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
