const connection = require("../database/connection");
module.export = {
  async index(request, response) {
    const ongs_id = request.headers.authorization;
    const incidents = await connection("incidents")
      .where("ongs", ongs_id)
      .select("*");
    return response.json(incidents);
  }
};
