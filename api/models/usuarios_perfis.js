'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios_perfis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios_perfis.init({
    usuario_id: DataTypes.UUID,
    perfilUsuario_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'usuarios_perfis',
  });
  return usuarios_perfis;
};