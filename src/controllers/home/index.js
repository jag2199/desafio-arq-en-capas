import ProductosContainer from "../daos/productos.js"

let container = new ProductosContainer()

const getHome = (req, res) => {
    res.render("index", { productos: container.getAll(), nombre: req.user.nombre })
}

const postHome = (req, res) => {
    container.save(req.body)
    res.redirect("/")
}

export { getHome, postHome }