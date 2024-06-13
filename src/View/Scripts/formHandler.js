class FormHandler {
    constructor(formId, outputId) {
        this.form = document.getElementById(formId)
        this.output = document.getElementById(outputId)
        this.generateButton = document.getElementById("generateBtn")
        this.generateButton.addEventListener('click', this.handleGenerate.bind(this))
    }

    async handleGenerate(event) {
        event.preventDefault()
        let inputData = this.generateServerInputData()
        await this.sendDataToServer(inputData)

        let generatedOutputs = this.generateOutputs()
        return this.displayGeneratedOutputs(generatedOutputs)
    }

    async sendDataToServer(formData) {
        return await fetch('/cadCase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .catch(error => {
                console.error('Erro:', error)
                throw error
            })
    }

    generateServerInputData() {
        let inputaData = {
            'datePublicationNews': document.getElementById("datePublicationNews").value,
            'describeCaseFewWords': document.getElementById("describeCaseFewWords").value,
            'contextAdditionalInformation': document.getElementById("contextAdditionalInformation").value,
            'partySource': document.getElementById("partySource").value,
            'caseImportance': document.getElementById("caseImportance").value,
            'caseLink': this.getCaseLink()
        }
        return inputaData
    }

    generateOutputs() {
        let outputs = {
            'Data da publicação': document.getElementById("datePublicationNews").value,
            'Descrição do caso': document.getElementById("describeCaseFewWords").value,
            'Contexto e informações': document.getElementById("contextAdditionalInformation").value,
            'Parte ou Fonte': document.getElementById("partySource").value,
            'Importância do caso': document.getElementById("caseImportance").value,
            'Link': this.getCaseLink()
        }
        return outputs
    }

    displayGeneratedOutputs(outputs) {
        let outputText = ''

        for (let [key, value] of Object.entries(outputs)) {
            outputText += `${key}: ${value}\n`
        }

        this.output.innerText = outputText
    }
    getCaseLink() {
        const url = document.getElementById("caseLink").value
        if (url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
            let match = url.match(regExp)
            if (match && match[2].length == 11) {
                return url
            }
            else {
                alert("Insira um link válido do YouTube.")
                return
            }
        }
    }
}

let formHandler = new FormHandler("Form", "generatedOutputs")