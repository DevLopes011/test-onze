const Case = require('../../Model/caseModel')

class CaseService {

  async create(options)  {

      const newCase = await Case.create(options)
      return newCase
    }
}

module.exports = new CaseService()