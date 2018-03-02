/**
 * Created by Administrator on 2016/10/14 0014.
 */
//题目数据
var mysqlOP = require('./MysqlOp');
var q = require('q');
var mysql = require('mysql');
//按照ID查询
var selectByID = function (id,topicId) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `topic_view` where subject_id=? and topicType_id=?', [id,topicId], function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        }
        else {
            defer.resolve(rows);
        }
    });
    connection.end();
    return defer.promise;
};
//查询全部
var selectByAll = function () {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `topic_view`', function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        }
        else {
            defer.resolve(rows);
        }
    });
    connection.end();
    return defer.promise;
};

var f1=function () {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select * from topic where topicType_id in(1,2)', function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(rows);
        }
    });
    connection.end();
    return defer.promise;
}

var f2=function (data, id) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select * from item where topic_id=?;', [id], function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        }
        else {
            data.item = rows;
            defer.resolve(data);
        }
    });
    connection.end();
    return defer.promise;
}


exports.selectByAll = selectByAll;
exports.selectById = selectByID;
exports.f1=f1;
exports.f2=f2;
