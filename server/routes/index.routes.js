import Routes from 'express'

const routes = Routes()

routes.get('/',(req, res) => {
    return res.json({
        name: "Mss Gambito",
        position: "Queen"
    })
})

export default routes;