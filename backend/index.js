// const express=require('express')
// const app=express()
// const mongoose=require('mongoose')
// const dotenv=require('dotenv')
// const cors=require('cors')
// const multer=require('multer')
// const path=require("path")
// const cookieParser=require('cookie-parser')
// const authRoute=require('./routes/auth')
// const userRoute=require('./routes/users')
// const postRoute=require('./routes/posts')
// const commentRoute=require('./routes/comments')
// const likeRoute = require('./routes/likes')
// //database
// const connectDB=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("database is connected successfully!")

//     }
//     catch(err){
//         console.log(err)
//     }
// }



// //middlewares
// dotenv.config()
// app.use(express.json())
// // app.use("/images",express.static(path.join(__dirname,"/images")))
// app.use(cors({origin:"http://localhost:5173",credentials:true}))
// app.use(cookieParser())

// app.use("/api/auth",authRoute)
// app.use("/api/users",userRoute)
// app.use("/api/posts",postRoute)
// app.use("/api/comments",commentRoute)
// app.use("/api/likes",likeRoute)

// //image upload
// const storage=multer.diskStorage({
//     destination:(req,file,fn)=>{
//         fn(null,"images")
//     },
//     filename:(req,file,fn)=>{
//         fn(null,req.body.img)
       
//     }
// })

// const upload=multer({storage:storage})
// app.post("/api/upload",upload.single("file"),(req,res)=>{
//     // console.log(req.body)
//     res.status(200).json("Image has been uploaded successfully!")
// })


// app.listen(process.env.PORT,()=>{
//     connectDB()
//     console.log("app is running on port "+process.env.PORT)
// })

const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const multer=require('multer')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')
const likeRoute = require('./routes/likes')
//database
const contactRoutes=require('./routes/contactRoutes')
app.use(cors({
    origin: ["https://deploy.mern.lwhq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}



//middlewares
dotenv.config()
app.use(express.json())
// app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)
app.use("/api/likes",likeRoute)
app.use("/api/contact", contactRoutes);
//image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Image upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl: `http://localhost:${process.env.PORT}/images/${req.file.filename}` });
});





app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})
