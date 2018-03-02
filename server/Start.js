/**
 * Created by Administrator on 2016/10/14 0014.
 */


var q = require('./../node_modules/q');
var subjectData = require('./SubjectData');
var topictypeData = require('./TopictypeData');
var topicData = require('./TopicData');
var topicAnswerData = require('./TopicAnswerData');
var topicRecognizedData = require('./TopicRecognizedData');
var topicSpaceData = require('./TopicSpaceData');
var bodyParser = require('./../node_modules/body-parser');


var express = require('./../node_modules/express');
var app = express();
// app.use(bodyParser.json({id: '20'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
//科目全部
app.get('/subject', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    subjectData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

/**
 * 根据id获取用户
 * @param id
 */
app.post('/user', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    subjectData.selectByAllUserSum().then(function (sum) {
        subjectData.selectByIdUser(req.body.id,req.body.status).then(function (data) {
            res.send({success: true, data: data, sum: sum[0].sum});
        }, function (err) {
            res.send(err);
        });
    }, function (err) {
        res.send(err);
    });

});




//科目id
app.get('/subject/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    subjectData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


//题型
app.get('/topictype', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    topictypeData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

//题型id
app.get('/topictype/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    topictypeData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


//题型
app.get('/space', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    topicSpaceData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

//题型id
app.get('/space/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    topicSpaceData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

//题目
app.get('/topic', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    topicData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

//题目id
app.get('/topic/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    topicData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

//选择题选项 全部
app.get('/itemss', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var qQuerer = [];
    var tempData = [];
    topicData.f1().then(function (data) {
        for (var i = 0; i < data.length; i++) {
            qQuerer.push(topicData.f2(data[i], data[i].id));
        }
        q.all(qQuerer).spread(function () {
            for (var i = 0; i < data.length; i++) {
                tempData.push(arguments[i]);
            }
            res.send(tempData);
        });
    });
});

app.get('/topic/:id/:topicId', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    var topicId = req.params['topicId'];
    var qQuerer = [];
    var tempData = [];
    topicData.selectById(id,topicId).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            qQuerer.push(topicData.f2(data[i], data[i].id));
        }
        q.all(qQuerer).spread(function () {
            for (var i = 0; i < data.length; i++) {
                tempData.push(arguments[i]);
            }
            res.send(tempData);
        });
    }, function (err) {
        res.send(err);
    });
});
//问答题答案
app.get('/topicanswer', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    topicAnswerData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


app.get('/topicanswer/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    topicAnswerData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});




app.get('/topicrecognized', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    topicRecognizedData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


app.get('/topicrecognized/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var id = req.params['id'];
    topicRecognizedData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


//开始监听
var PORT = process.env.PORT || 8888;
var server = app.listen(PORT);
