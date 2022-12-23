const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
app.set('view engine','ejs');
app.use(express.static("public"));
const methodOverride = require('method-override')
app.use(methodOverride('_method'))



const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://minji:0219@cluster0.lyybb93.mongodb.net/?retryWrites=true&w=majority',(에러,client)=>{
    
    db=client.db('blog');
    app.listen(3000,()=>{
        console.log('listening on 3000')
    });
})

app.get('/',(req,res)=>{
    db.collection('post').find().toArray((에러, 결과1)=>{
        db.collection('counter').findOne({name:'게시물갯수'},(에러,결과2)=>{
            var count = 결과2.totalPost;
        res.render('home.ejs',{ posts : 결과1 , count : count});
        })
})
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/post',(req,res)=>{
    res.render('post.ejs')
})

app.post('/add',(req,res)=>{
    db.collection('counter').findOne({name:'게시물갯수'},(에러,결과)=>{
        var count = 결과.totalPost;

    db.collection('post').insertOne({_id : count +1,제목: req.body.title, 내용: req.body.write},(에러,결과)=>{
        console.log(req.body);
        db.collection('counter').updateOne({name :'게시물갯수'},{ $inc :{totalPost:1}})
        //중간 글 삭제되면 글번호 당겨지게 하고 싶다...어케 하지?
    })
    })
    res.redirect('/')
})

app.get('/list',(req,res)=>{
    db.collection('post').find().toArray((에러, 결과1)=>{
        db.collection('counter').findOne({name:'게시물갯수'},(에러,결과2)=>{
            var count = 결과2.totalPost;
                 res.render('list.ejs',{ posts : 결과1, count: count });
    })
    
})
})

app.delete('/delete',(req,res)=>{
    req.body._id = parseInt(req.body._id);
    db.collection('post').deleteOne(req.body,(에러,결과)=>{
        console.log("삭제했어요");
        res.status(200).send({message:"성공"});
    })

})

app.post('/comentadd',(req,res)=>{
    db.collection('coment').insertOne({number : parseInt(req.body.addd), 댓글: req.body.coment},(에러,결과)=>{
        console.log(req.body);
        res.redirect('/list');
        //새로고침 하게 하고 싶어요
        })
       
    })

app.get('/detail/:id',(req,res)=>{
    db.collection('post').findOne({_id : parseInt(req.params.id)},(에러,결과1)=>{
        db.collection('coment').find({number : parseInt(req.params.id)}).toArray((에러,결과2)=>{  
            res.render('detail.ejs',{data : 결과1 ,coments : 결과2}); })
            
        })
    })
  

app.get('/edit/:id',(req,res)=>{
    db.collection('post').findOne({_id : parseInt(req.params.id)},(에러,결과)=>{
        res.render('edit.ejs', {data : 결과});
        console.log(결과)
    })
    
})

app.put('/edit',(req,res)=>{
    db.collection('post').updateOne({_id : parseInt(req.body.id)},{$set : {제목: req.body.title, 내용: req.body.write}},(에러,결과)=>{
        res.redirect('/list')
    })
})

