
import path from 'path'
import express from 'express'
const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html'),
    HTML_ABOUT = path.join(DIST_DIR, 'about.html')

app.use(express.static(DIST_DIR))
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})
app.get('/about', (req, res) => {
    res.sendFile(HTML_ABOUT)
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})