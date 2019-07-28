let express = require("express");
let router = express.Router();
const conn = require("./../db.js");
// 监听端口
const app = express();
app.listen(3000)
console.log('success listen at port:3000......')

router.get("/api/getInfoList", (req, res) => {
    let sqlStr = "select * from vue_practice_crud";
    conn.query(sqlStr, (err, result) => {
        if(err) {
            return res.json({
                err_code: 1,
                message: "获取数据失败"
            });
        } else {
            return res.json({succuss_code: 200, message: result});
        }
    })
})