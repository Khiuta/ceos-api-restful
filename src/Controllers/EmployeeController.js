import Employee from "../Models/Employee.js";

class EmployeeController
{
  async store(req, res)
  {
		try
		{
			const
    	{
				name,
				age,
				salary,
				time_employed,
				occupation,
    	} = req.body;

			Employee.create
			({ 
				name,
				age,
				salary,
				time_employed,
				occupation,
			});

			return res.status(201).json("Funcionário adicionado.");
		}
		catch(e)
		{
			return res.status(400).json(e);
		}	
  }

  async show(req, res)
  {
		try
		{
			const { id } = req.params;

			const funcionario = await Employee.findOne
			({
				where:
				{
					id,
				}
			});

			return res.status(200).json(funcionario);
		}
		catch(e)
		{
			return res.status(404).json(e);
		}
  }

	async index(req, res)
	{
		try
		{
			const funcionarios = await Employee.findAll();

			return res.status(200).json(funcionarios);
		}
		catch(e)
		{
			return res.status(404).json(e);
		}
	}
}

export default new EmployeeController();