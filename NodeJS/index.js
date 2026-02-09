// const http=require('http');
// const myserver=http.createServer((req,res)=>{
// //    console.log('server1');
// //    res.end('Hii This is my first server');
//     if(req.url=='/'){
//         res.end(`<h1>ABES ENGINEERING COLLEGE</h1>
            // <img src="https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1520209759809-a9bcb6cb3241%3Ffm%3Djpg%26q%3D60%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&docid=f3riLA-4-1potM&tbnid=Q27zvRreTbvmtM&vet=12ahUKEwjO1anV4suSAxWn-TgGHVwkBjsQnPAOegQIHBAB..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjO1anV4suSAxWn-TgGHVwkBjsQnPAOegQIHBAB"></img>
            // `)}          
//     else if(req.url=='/about'){

//         res.end("<h1>I am a student of B.tech</h1>")
//     }
//     else if(req.url=='/contact'){
//         res.end("<h1>Phone number: 8960870084</h1>")
//     }
//     else{
//         res.end("404 page is not found")
//     }
// });
// myserver.listen(8000,()=>console.log('server is running'))


//   Sync
// const fs=require('fs');
// // fs.writeFileSync("./it-a.txt","I am student of It")
// // fs.writeFileSync("./abes.txt","This is abes engineering college")
// const result=fs.readFileSync("./it-a.txt","utf-8")
// console.log(result)


// Async
// const fs=require('fs');
// // fs.writeFile("./ad.txt","code is very good time pass",()=>{});
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })


//    Append(Sync)
const fs=require('fs');
fs.appendFileSync("./ad.txt",'and i am happy ');
fs.appendFile("./ad.txt",'and i am happy',()=>{});

    // fs.unlinkSync("./ad.txt");                         use to delete the file
