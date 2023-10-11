module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      // Define model attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKeyConstraint: true
      },
      title: {
        type: DataTypes.STRING(320),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
    },
    {
      // Other model options
      modelName: "Article", // Declare the model name
    }
  );

  // Associations /  Relationships
  Article.associate = (models) => {
    Article.belongsTo(models.User, {
      foreignKey: "authorId",
      as: "author",
    });

    Article.hasMany(models.Comment, {
      foreignKey: "articleId",
      as: "comments",
    });
  };

  // TEST
  console.log("Inside Article Model || DebugCode: 1003");

  return Article;
};
