const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Article extends Model {}

Article.init({
    // Define model attributes
    id: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    title: {
        type: DataTypes.STRING(320),
        allowNull: false
    },
    body: {
        type: DataTypes.STRING(5000),
        allowNull: false
    }
}, {
  // Other model options
  sequelize, // We need to pass the connection instance
  modelName: 'Article' // Declare the model name
});

// the defined model is the class itself
console.log("TEST Article: model === class || DebugCode: 1003");
console.log(Article === sequelize.models.Article); // true