const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Comment extends Model {}

Comment.init({
    // Define model attributes
    id: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKeyConstraint: true,
        references: {
            model: 'Article',
            key: 'id'
        }
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKeyConstraint: true,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    body: {
        type: DataTypes.STRING(5000),
        allowNull: false
    }
}, {
  // Other model options
  sequelize, // We need to pass the connection instance
  modelName: 'Comment' // Declare the model name
});

// the defined model is the class itself
console.log("TEST Comment: model === class || DebugCode: 1006");
console.log(Comment === sequelize.models.Comment); // true