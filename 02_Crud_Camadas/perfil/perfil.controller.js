const PerfilService = require('./perfil.service');
const perfilService = new PerfilService();


class PerfilController {

    createPerfil(req, res) {
        const { endereco, cidade, IDpais } = req.body
        const perfil = perfilService.create(endereco, cidade, IDpais);
        res.json(perfil);
    }

    getAllPerfis(req, res) {
        const perfis = perfilService.findAll();
        res.json(perfis);
    }

    getperfilByIDpais(req, res) {
        const perfis = perfilService.findAll();
        res.json(perfis);

        if (!perfil) {
            return res.status(404).send('register not found');
        }
        res.json(perfil);
    }
    updatePerfil(req, res) {
        const { IDpais } = req.params;
        const { endereco, cidade } = req.body;
        const updatedPerfil = perfilService.update(endereco, cidade, IDpais);
        if (!updatedPerfil) return res.status(404).send('User not found');
        console.log("São Paulo");
        res.status(200).json(updatedPerfil);
    }
    deletePerfil(req, res) {
        const { IDpais } = req.params;
        const result = perfilService.remove(IDpais);
        if (!result) return res.status(404).send('User not found');
        res.status(204).send();
    }
}

module.exports = PerfilController;
