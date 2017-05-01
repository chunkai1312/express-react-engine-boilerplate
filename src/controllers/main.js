export default {

  index: (req, res) => {
    res.render(req.url, { title: 'Home' })
  },

  about: (req, res) => {
    res.render(req.url, { title: 'About' })
  },

  notFound: (req, res) => {
    res.render(req.url)
  }

}
