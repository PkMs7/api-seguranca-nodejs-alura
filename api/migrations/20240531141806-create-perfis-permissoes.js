'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfis_permissoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perfil_id: {
        type: Sequelize.UUID,
        references: {
          model: 'perfisUsuarios',
          key: id
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      permissao_id: {
        type: Sequelize.UUID,
        references: {
          model: 'permissoes',
          key: id
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perfis_permissoes');
  }
};