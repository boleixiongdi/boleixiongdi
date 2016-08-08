/**
 * Created by leijiwen on 11/22/15.
 */

var user = {
    insert:'insert into user(id, name, phone, password, email, portrait, regiterTime) VALUES(0,?,?,?,?,?,?)',
    update:'update user set name=?, phone=?, password=?, email=?, portrait=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
    queryByPhone:'select * from user where phone=?'
};

module.exports = user;