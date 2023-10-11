/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- MidtermTodo
2023-10-04
*/

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        "Todo",
        {
            // Define model attributes
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ownerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKeyConstraint: true,
            },
            task: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            dueDate: {
                type: DataTypes.DATE,
                allowNull: false,
            }, 
            isDone: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            // Other model options
            modelName: "Todo", // Declare the model name}
        }
    );

    // Associations /  Relationships
  Todo.associate = (models) => {
      Todo.belongsTo(models.User, {
          foreignKey: "ownerId",
          as: "owner",
      });
  };

    // the defined model is the class itself
    console.log("===== End of Todo model. || DebugCode: 1007 =====");
    return Todo;
};
