/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- MidtermTodo
2023-10-04
*/

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
            email: {
                type: DataTypes.STRING(360),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        },
        {
            // Other model options
            modelName: "User" // Declare the model name}
        }
    );

    // Associations /  Relationships
  User.associate = (models) => {

      User.hasMany(models.Todo, {
          foreignKey: "todoOwner",
          as: "todos"
      });
  };
    // the defined model is the class itself
    console.log("===== End of User model. || DebugCode: 1004 =====");
    return User;
};
