import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/foo/base', function(req, res) {
    res.end();
});

app.get('/memory', (req, res) => res.end());
app.get('/memory/not', (req, res) => res.end());

app.get('/things', (req, res) => res.end());
app.get('/things/more', (req, res) => res.end());
app.get('/things/stuff', (req, res) => res.end());
const post = (...args: any[]) => {

};

post('/foo/base', function(req, res) {
    res.end();
});

app.listen(8093, function() {
});

const otherApp = {
    post(...args) {
        return null;
    },
    get(...args) {
        return null;
    },
    unrelatedMethod(...args) {
        return null;
    }
};

function example30() {
    // sempgrep r2c-ci rule violation. ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign({ password: 123 }, 'secret', { some: 'params' })
  }

otherApp.post('/foo/base/:param1/{param2}/:param3?/bar', (req, res) => {
    example30();
});

otherApp.post('/foo/base/:param1Id/{param2}/:param3?/bar', (req, res) => {
    example30();
});

otherApp.post('/foo/base/:param1/{param2}/:param3?', (req, res) => {
    example30();
});
otherApp.unrelatedMethod("with", "some args");

const client = {
    get: (...args) => null,
    post: (...args) => null
};

client.get("/some/path", (data => console.log(data)));

const UsersController = {
    listUsers: (req: express.Request, res: express.Response): void => {
        res.end();
    },
    createHandler(handler) {
        return handler;
    }
};

const namedHandlersApp: express.Express = express();
namedHandlersApp.get('/users/list', UsersController.listUsers);
namedHandlersApp.post('/unknown/handler', UsersController.createHandler("this is a string but the typechecker doesn't know"));
