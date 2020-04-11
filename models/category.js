
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Category.associate = function(models){
    Category.hasMany(models.Item);
  };

  return Category;
};
