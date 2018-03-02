/**
 * Created by Administrator on 2016/10/14 0014.
 */

//所有判断题数据
var mysqlOP = require('./MysqlOp');
var q = require('q');
var mysql = require('mysql');
//按照ID查询
var selectByID = function (id) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `topic_recognized_view` where id=?', [id], function (err, rows, fields) {
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
    connection.query('select  *  from   `topic_recognized_view` ', function (err, rows, fields) {
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
exports.selectByAll = selectByAll;
exports.selectById = selectByID;