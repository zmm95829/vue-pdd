let express = require("express");
const conn = require("./../db.js");
const app = express();
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
/**
 * 查询所有数据
 */
app.get("/api/getInfoList", function (req, res) {
    let sqlStr = "select * from vue_practice_crud";
    conn.query(sqlStr, (err, result) => {
        if (err) {
            return res.json({
                err_code: 1,
                message: "获取数据失败"
            });
        } else {
            return res.json({ succuss_code: 200, message: result });
        }
    })
});
/**
 * 插入数据
 */
app.post("/api/addInfo", function (req, res) {
    let sqlStr = "insert vue_practice_crud(name, gender, telphone) values(?, ?, ?)";
    const arr = [];
    Object.keys(req.body).forEach(v => {
        arr.push(req.body[v]);
    });
    conn.query(sqlStr, arr, (err, result) => {
        if (err) {
            return res.json({
                err_code: 1,
                message: "获取数据失败"
            });
        } else {
            return res.json({ succuss_code: 200, message: result });
        }
    })
});
/**
 * 编辑数据
 */
app.post("/api/updateInfo", function (req, res) {
    let sqlStr = `update vue_practice_crud set name = '${req.body.name}', gender = '${req.body.gender}', telphone = '${req.body.telphone}' where id = ${req.body.id} `;
    console.log(sqlStr);
    conn.query(sqlStr, (err, result) => {
        if (err) {
            return res.json({
                err_code: 1,
                message: "获取数据失败"
            });
        } else {
            return res.json({ succuss_code: 200, message: result });
        }
    })
});
/**
 * 删除数据
 */
app.post("/api/deleteInfo", function (req, res) {
    let sqlStr = `delete from vue_practice_crud where id = ${req.body.id}`;
    conn.query(sqlStr, (err, result) => {
        if (err) {
            return res.json({
                err_code: 1,
                message: "获取数据失败"
            });
        } else {
            return res.json({ succuss_code: 200, message: result });
        }
    })
});