const button = document.createElement('button');
button.type = 'button';
button.innerText('Haz click!')
document.body.appendChild(button);

const express = require('express'),
  multer = require('multer'),
  storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './archivos')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
  }),
  upload = multer({ storage }), app = express();

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
})

app.post('/subir', upload.single('archivo'), (req, res) => {
  console.log(req.file)
  res.send('EN LA NUBE B)!!',button)
})

app.post('/multiple', upload.array('archivo'),
  function(req, res, next) {
    console.log(req.file)
    res.send('EN LA NUBE B)!!',button)
  })

app.post('/multiple', upload.array('archivo', 3), (req, res) => {
  console.log(req.file)
  res.send('EN LA NUBE B)!!',button)
})


let dobleinput = upload.fields([{ name: 'archivo', maxCount: 2 }, { name: 'fichero' }])
app.post('/doble-input', dobleinput, (req, res) => {
  console.log(req.file)
  res.send('EN LA NUBE B)!!',button)
})
app.listen(3000, () => console.log('SERVIDOR FUNCIONANDO'))