module.exports = function(sequelize, DataTypes) {
        var Post = sequelize.define("Post", {
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1, 160]
                    }
                },
                body: {
                    type: DataTypes.TEXT,
                    allowNull: false,


                    validate: {
                        len: [1]

                    }
                }
            },  {
            classMethods: {
                associate:  function(models) {
                    Post.belongsTo(models.Author, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }   
        }
    );
 
    return Post;
}