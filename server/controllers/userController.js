class UserController {
  async registration(request, response) {

  }

  async login(request, response) {

  }

  async check(request, response) {
    const query = request.query
    response.json(query)
  }
}

module.exports = new UserController()