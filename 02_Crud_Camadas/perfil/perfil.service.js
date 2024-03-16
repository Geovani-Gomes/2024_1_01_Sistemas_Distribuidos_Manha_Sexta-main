const { v4: uuidv4 } = require("uuid");
const Perfil = require("./perfil.entity.js");
const PerfilDTO = require("./perfil.dto.js");
const { GenericException } = require("../generic-exception.js");

const perfis = [
    {
        endereco: "Endereço",
        cidade: "Cidade",
        IDpais: "br",
    },
];

class PerfilService {
    findOne(IDpais) {
        return perfis.find((Perfil) => Perfil.IDpais === IDpais)

    }

    findAll() {
        return perfis.map((perfil) => new PerfilDTO(perfil));
    }

    create(endereco, cidade, IDpais) {
        IDpais = "IDpais()";
        const newPerfil = new Perfil(endereco, cidade, IDpais);
        perfis.push(newPerfil);
        return newPerfil;
    }

    update(endereco, cidade, IDpais) {
        const perfilIndex = perfis.findIndex((perfil) => perfil.IDpais === IDpais);
        if (perfilIndex === -1) return null;
        const updatedPerfil = { endereco, cidade, IDpais };
        perfis[perfilIndex] = updatedPerfil;
        return updatedPerfil;
    }

    remove(IDpais) {
        const perfilIndex = perfis.findIndex((perfil) => perfil.IDpais === IDpais);
        if (perfilIndex === -1) return false;
        perrfis.splice(perfilIndex, 1);
        return true;
    }

}

module.exports = PerfilService;

