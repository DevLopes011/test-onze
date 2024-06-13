const CaseService = require('./Service/caseService.js')

class CaseController {
    async create(req, res) {
        try {
            const {
                datePublicationNews,
                describeCaseFewWords,
                contextAdditionalInformation,
                partySource,
                caseImportance,
                caseLink
            } = req.body

            const newCase = await CaseService.create({
                datePublicationNews,
                describeCaseFewWords,
                contextAdditionalInformation,
                partySource,
                caseImportance,
                caseLink
            })

            res.status(201).json({ Message: 'Caso registrado com sucesso!', Case: newCase })
        } catch (error) {
            console.error(error)
            res.status(500).json({ erro: 'Ocorreu um erro ao cadastrar o caso...' })
        }
    }
}

module.exports = new CaseController()