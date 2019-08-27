// Burger models
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt:{
      allowNull:true,
      type: DataTypes.DATE
    },
    updatedAt:{
      allowNull:true,
      type: DataTypes.DATE
    }
  },

  );
  return Burger;
};
