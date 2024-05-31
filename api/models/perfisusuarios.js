'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfisUsuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      perfisUsuarios.belongsToMany(models.usuarios, {
        through: models.usuarios_perfis,
        as: 'perfis_do_usuario',
        foreignKey: 'perfilUsuario_id'
      })
      perfisUsuarios.belongsToMany(models.permissoes, {
        through: models.perfis_permissoes,
        as: 'perfil_permissoes',
        foreignKey: 'perfilUsuario_id'        
      })
    }
  }
  perfisUsuarios.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfisUsuarios',
  });
  return perfisUsuarios;
};