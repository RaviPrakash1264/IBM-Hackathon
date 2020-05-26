const PORT = process.env.PORT || 5006 ;
const express = require('express');
const app = express();
const bodyParser = require('body-parser') ;
const {Client}= require('pg');
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/students',(request,response)=>{
    response.render('forstudents');
})
app.get('/teachers',(request,response)=>{
    response.render('forteachers');
});
app.get('/students/Subject-Selection',(request,response)=>{
    response.render('Subject Selection');
})
app.get('/students/Subject-Selection/Physics',(request,response)=>{
    response.render('Physics');
})
app.get('/students/Subject-Selection/Chemistry',(request,response)=>{
    response.render('Chemistry');
})
app.get('/students/Subject-Selection/Maths',(request,response)=>{
    response.render('Maths');
})
app.get('/students/Subject-Selection/English',(request,response)=>{
    response.render('English');
})
app.get('/teachers/add-question',(request,response)=>{
    response.render('foraddingques');
});
app.get('/thanks',(request,response)=>{
    response.render('thanks for submission');
})
app.get('/thanks2',(request,response)=>{
    response.render('thanks for submission2');
})
app.post('/students/add',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  submission(name,email,phone_number) VALUES ($1, $2, $3)'
        const params = [request.body.name,request.body.email,request.body.phone_number];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/students/Subject-Selection')
    });
    
   

});
app.post('/teachers/add',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  submission2(name,email,phone_number,subject) VALUES ($1, $2, $3, $4)'
        const params = [request.body.name,request.body.email,request.body.phone_number,request.body.subject];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/teachers/add-question')
    });
    
   

});
app.post('/teachers/addque',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }

    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  addque(que1,que2,que3,que4,que5,que6,que7,que8,que9,que10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const params = [request.body.que1,request.body.que2,request.body.que3,request.body.que4,request.body.que5,request.body.que6,request.body.que7,request.body.que8,request.body.que9,request.body.que10];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks2')
    });
    
   

});
app.post('/students/physics',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  physicsquiz(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const params = [request.body.opt1,request.body.opt2,request.body.opt3,request.body.opt4,request.body.opt5,request.body.opt6,request.body.opt7,request.body.opt8,request.body.opt9,request.body.opt10];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks')
    });
    
   

});
app.post('/students/chemistry',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
              rejectUnauthorized: false
            }
    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  chemistryquiz(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const params =[request.body.opt1,request.body.opt2,request.body.opt3,request.body.opt4,request.body.opt5,request.body.opt6,request.body.opt7,request.body.opt8,request.body.opt9,request.body.opt10];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks')
    });
    
   

});
app.post('/students/maths',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }

    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  mathsquiz(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const params = [request.body.opt1,request.body.opt2,request.body.opt3,request.body.opt4,request.body.opt5,request.body.opt6,request.body.opt7,request.body.opt8,request.body.opt9,request.body.opt10];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks')
    });
    
   

});
app.post('/students/english',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    });
    client.connect()
    .then(()=>{
        console.log('Connection Complete');
        const sql= 'INSERT INTO  englishquiz(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const params = [request.body.opt1,request.body.opt2,request.body.opt3,request.body.opt4,request.body.opt5,request.body.opt6,request.body.opt7,request.body.opt8,request.body.opt9,request.body.opt10];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks')
    });
    
   

});
app.listen(PORT,()=>{
    console.log('Listening to the server')
})