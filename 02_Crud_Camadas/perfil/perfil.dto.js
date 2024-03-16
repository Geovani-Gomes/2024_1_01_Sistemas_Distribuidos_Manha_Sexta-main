class PerfilDTO{
    constructor({IDpais, cidade, endereco}){
        this.endereco = endereco;
        this.cidade = cidade;
        this.IDpais = IDpais;
    }
}
module.exports = PerfilDTO;