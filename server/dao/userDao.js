/**
 * Created by leijiwen on 8/8/16.
 */

// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var sql = require('./userSqlMapping');
var utils = require('../utils/utils');
var mysqlConf = require('../conf/mysqldb');
// 使用连接池，提升性能
var pool  = mysql.createPool(utils.extend({}, mysqlConf.mysql));
var moment = require("moment");
var cryptoUtil = require('../utils/cryptoUtil');

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            //var param = req.query || req.params;
            var param = req.body;
            console.log(param);
            // 建立连接，向表中插入值
            var password = cryptoUtil.encrypt(param.password,"blxd");
            var regiterTime = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log(password);
            var sss = cryptoUtil.decrypt(password,"blxd");
            console.log("解密之后的密码",sss);
            connection.query(sql.queryByPhone, [param.phone], function(err, users) {
                console.log(users);
                console.log(users.length);
                if(users.length == 0){
                    // insert into user(id, name, phone, password, email,regiterTime) VALUES(0,?,?,?,?,?),
                    connection.query(sql.insert, [param.name, param.phone, password, param.email,param.portrait ,regiterTime], function(err, result) {
                        console.log(err);
                        if(result) {
                            result = {
                                code: 200,
                                msg:'增加成功'
                            };
                        }
                        // 以json形式，把操作结果返回给前台页面
                        res.redirect('/success');

                    });
                }else{
                    var failResult = {
                        code: 200,
                        msg:'用户已存在，注册失败'
                    };
                    jsonWrite(res, failResult);
                }
                // 释放连接
                connection.release();
            });
        });
    },
    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.query.id;
            connection.query(sql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.body;
        if(param.name == null || param.age == null || param.id == null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            connection.query(sql.update, [param.name, param.age, +param.id], function(err, result) {
                // 使用页面进行跳转提示
                if(result.affectedRows > 0) {
                    res.render('suc', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                } else {
                    res.render('fail',  {
                        result: result
                    });
                }

                connection.release();
            });
        });

    },
    queryById: function (req, res, next) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryById, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },

    queryByPhone: function (req, res, next) {
        var phone = +req.query.phone; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryByPhone, phone, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};