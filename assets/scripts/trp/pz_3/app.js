const app = require('express')();
const fs = require('fs');
const bp = require('body-parser');

const client_json = __dirname + '/assets/json/client.json';
const test_json = __dirname + '/assets/json/test.json';

const client = {name: '',  lastname: '', total: 0, result: 0, answers: []};

app.set('view engine', 'ejs');

app.use(bp.urlencoded({extended: false}));
app.use(require('express').static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.render(__dirname + '/assets/views/index', {login: true , obj: null});
});
app.post('/', (req, res) => {
    if (req.body.name !== undefined) {
        client.name = req.body.name;
        client.lastname = req.body.lastname;
        fs.readFile(test_json, 'utf-8', (err, date) => {
            if (date) {
                let arr = JSON.parse(date);
              return res.render(__dirname + '/assets/views/index', {login: false, obj: arr[client.total++]});
            }
        });
    }
    else {
        fs.readFile(test_json, 'utf-8', (err, date) => {
            let arr = JSON.parse(date);
            if (date && arr.length !== client.total) {
                client.answers[client.total-1] = req.body.answer;
                client.result += arr[client.total].correct === req.body.answer ? 1 : 0;
                return res.render(__dirname + '/assets/views/index', {login: false, obj: arr[client.total++]});
            }
            else {
                client.answers[client.total-1] = req.body.answer;
                fs.readFile(client_json, 'utf-8', (err, date) => {
                    if (date) {
                        let arr = JSON.parse(date);
                        arr.push({
                            name: client.name,
                            lastname: client.lastname,
                            result: client.result,
                            total: client.total
                        });
                        fs.writeFile(client_json, JSON.stringify(arr),console.log)
                    }
                });
                return res.render(__dirname + '/assets/views/index', {login: false, finish: true, arr: arr, clien: client, obj:null});
            }
        });
    }
})

app.listen(8080, () => console.log('Server is working!'));
