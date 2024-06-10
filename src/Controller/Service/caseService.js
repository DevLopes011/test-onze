const Case = require('../../Model/caseModel')

class CaseService {

  async create(datePublicationNews, describeCaseFewWords, contextAdditionalInformation, partySource, caseImportance, caseLink)  {

      const newCase = await Case.create({
        datePublicationNews,
        describeCaseFewWords,
        contextAdditionalInformation,
        partySource,
        caseImportance,
        caseLink
      })
      return newCase
    }
}

module.exports = new CaseService()