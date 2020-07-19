'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' })
    Post.belongsTo(models.City, { foreignKey: 'cityId' })
  };
  return Post;
};