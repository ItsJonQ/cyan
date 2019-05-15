const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

module.exports = {
  '/': {
    get: (req, res) => {
      const { file } = req.query
      const filename = file || 'index.html'
      const filepath = path.join(process.cwd(), '/node_modules/.cyan', filename)

      fs.readFile(path.join(filepath), 'utf-8', (err, data) => {
        if (err) {
          return res.end(`${filepath} is invalid`)
        }

        const $ = cheerio.load(data)

        $('body').append(`
          <script src="/socket.io/socket.io.js"></script>
          <script>
            var socket = io();
          </script>
        `)

        return res.end($.html())
      })
    },
  },
}
