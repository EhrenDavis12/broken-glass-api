module.exports = function (sequelize, DataTypes) {

	var JobType = sequelize.define("JobType", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			
		},
		JobTypeDescription: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},

	}, {
			freezeTableName: true
		});

		JobType.associate = function(models){
			JobType.hasMany (models.Review, {
				as: "JobTypeId"
			});
		};


	return JobType;
};
