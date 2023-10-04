module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // Define model attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(320),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(320),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "enduser"),
        allowNull: false,
        defaultValue: "enduser",
      },
    }, {
    // Other model options
    modelName: 'User' // Declare the model name}
  });
    
  // the defined model is the class itself
  console.log("TEST User: model === class || DebugCode: 1004");
  return User;
}


