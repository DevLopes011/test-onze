class FormHandler {
    constructor(formId, outputId) {
        this.form = document.getElementById(formId)
        this.output = document.getElementById(outputId)
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
        this.generateButton = document.getElementById("generateBtn")
        this.generateButton.addEventListener('click', this.handleGenerate.bind(this))
    }

    handleSubmit(event) {
        event.preventDefault()
        var formData = this.captureValues()
        this.displayOutputs(formData)
    }

    handleGenerate(event) {
        var generatedOutputs = this.generateOutputs()
        this.displayGeneratedOutputs(generatedOutputs)
    }

    captureValues() {
        var formData = new FormData(this.form)
        return formData
    }

    generateOutputs() {
        var outputs = {
            'Data da publicação': document.getElementById("datePublicationNews").value,
            'Descrição do caso': document.getElementById("describeCaseFewWords").value,
            'Contexto e informações': document.getElementById("contextAdditionalInformation").value,
            'Parte ou Fonte': document.getElementById("partySource").value,
            'Importância do caso': document.getElementById("caseImportance").value,
            'Link': document.getElementById("caseLink").value
        }
        return outputs
    }

    displayOutputs(formData) {
        var outputText = ''

        for (var pair of formData.entries()) {
            outputText += pair[0] + ': ' + pair[1] + '\n'
        }

        this.output.innerText = outputText
    }

    displayGeneratedOutputs(outputs) {
        var outputText = ''

        for (var key in outputs) {
            outputText += key + ': ' + outputs[key] + '\n'
        }

        this.output.innerText = outputText
    }
}

var formHandler = new FormHandler("Form", "generatedOutputs")
