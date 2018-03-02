/**
 * Created by Administrator on 2016/10/14 0014.
 */

//科目数据


var mysqlOP = require('./MysqlOp');
var q = require('./../node_modules/q');
var mysql = require('./../node_modules/mysql');

//按照ID查询
var selectByID = function (id) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `subject` where id=?', [id], function (err, rows, fields) {
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
    connection.query('select  *  from  `sys_user`', function (err, rows, fields) {
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
var selectByAllUser = function (pagenew,pagesize) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select id, pay_type_id, pay_type, pay_type_color, image, description, description_color,status, sort, user_name, user_id, create_date from t_pay_type_log ORDER BY create_date desc LIMIT '+(pagenew-1)*pagesize+','+pagesize,[pagenew,pagesize],
        function (err, rows, fields) {
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
var selectByAllUserSum = function () {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('SELECT  count(1) as sum FROM t_pay_type_log',
        function (err, rows, fields) {
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
//暴露接口
exports.selectByAll = selectByAll;
//暴露接口
exports.selectById = selectByID;

exports.selectByIdUser = selectByAllUser;

exports.selectByAllUserSum = selectByAllUserSum;