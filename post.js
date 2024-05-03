
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tag: {
    type: DataTypes.STRING
  },
  imageUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Post;
