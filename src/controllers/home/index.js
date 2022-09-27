import ProductosContainer from "../daos/productos.js"

let container = new ProductosContainer()

const getHome = async (req, res) => {
    res.render("index", { productos: await container.getAll(), nombre: req.user.nombre })
}

const postHome = async (req, res) => {
    await container.save(req.body)
    res.redirect("/")
}

export { getHome, postHome }