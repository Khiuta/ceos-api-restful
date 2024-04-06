import Sequelize, { Model } from 'sequelize';

export default class Employee extends Model
{
  static init(sequelize)
  {
	  super.init
    ({
      name:
      {
        type: Sequelize.TEXT,
        validate:
    	  {
          notEmpty:
          {
            msg: 'Coloque o nome do funcionário.'
          },
        },
      },
      age:
      {
        type: Sequelize.INTEGER,
        validate:
        {
          notEmpty:
          {
            msg: 'Coloque a idade do funcionário.'
          },
        },
      },
      salary:
    	{
        type: Sequelize.FLOAT,
        validate: 
        {
          notEmpty:
          {
            msg: 'Coloque o salário do funcionário.'
          },
      	},
      },
      time_employed:
      {
        type: Sequelize.STRING,
        validate:
        {
          notEmpty:
          {
            msg: 'Coloque há quanto tempo o funcionário está empregado.'
          },
        },
      },
      occupation:
      {
        type: Sequelize.STRING,
        validate:
        {
          notEmpty:
          {
            msg: 'Coloque o cargo do funcionário.'
          },
        },
      },
    }, 
    {
      sequelize,
  	});
    return this;
    }
}