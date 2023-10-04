module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      // Define model attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      }
    },
    {
      // Other model options
      modelName: "Comment", // Declare the model name
    }
  );

  // Associations /  Relationships
  Comment.associate = (models) => {
    Comment.belongsTo(models.Article, {
      foreignKey: "articleId",
      as: "article",
    });

    Comment.belongsTo(models.User, {
      foreignKey: "authorId",
      as: "author",
    });
  };

  console.log("================== Inside Comment Model || DebugCode: 1009");
  return Comment;
};
