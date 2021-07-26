let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ sucess: true,data: people})
}

const createPerson =(req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400)
        .json({ sucess: false,msg:'please provide name value'})
    }
    res.status(201).send({ sucess: true, person: name})
}