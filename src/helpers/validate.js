export default {
    validateFields(fields, mediaType) {
        let errs = [];

        function updateNullGrades() {
            let nullGradesSum = 0;
            fields.map(field => {
                if(field.nota === '' || field.nota === undefined || field.nota === null || field.isResponse === true) {
                    nullGradesSum += 1;
                }
                return null;
            });
        
            if(nullGradesSum === 0) {
                let errorsFiltered = errs.filter(error => error.message !== "Deve ter no mínimo 1 nota sem valor");
                errs = [ ...errorsFiltered, { message: "Deve ter no mínimo 1 nota sem valor"} ];
            } else {
                let errorsFiltered = errs.filter(error => error.message !== "Deve ter no mínimo 1 nota sem valor");
                errs = [ ...errorsFiltered ];
            }
        }
        
        function updateWeightSum() {
            let sum = 0;
        
            fields.map(field => {
                if(!isNaN(field.peso)) {
                    sum += Number(field.peso);
                }
                return null;
            })
        
            if(sum !== 10 && mediaType === "Com Pesos") {
                let novoArray = errs.filter(error => error.message !== "A soma dos pesos deve ser 10");
                errs = [
                    ...novoArray,
                    { message: "A soma dos pesos deve ser 10"}
                ];
              
            } else {
                let novoArray = errs.filter(error => error.message !== "A soma dos pesos deve ser 10");
                errs = [ ...novoArray ];
            }
        }
        
        function allFieldsHaveWeight() {
            if(mediaType === "Com Pesos" && fields.filter(field => field.peso === "").length > 0) {
                let errorsFiltered = errs.filter(error => error.message !== "Todos os campos devem ter peso");
                errs = [
                    ...errorsFiltered, 
                    { message: "Todos os campos devem ter peso"}
                ];
              
            } else {
                let errorsFiltered = errs.filter(error => error.message !== "Todos os campos devem ter peso");
                errs = [ ...errorsFiltered ];
            }
        }
        
        function gradesNotBetween0And10() {
            fields.map(field => {
                if(!field.isResponse) {
                    if(Number(field.nota) > 10) {
                        let errorsFiltered = errs.filter(error => error.message !== "As notas devem ser menores do que 10");
                        errs = [
                            ...errorsFiltered, 
                            { message: "As notas devem ser menores do que 10"}
                        ];
                    } else if(Number(field.nota) < 0) {
                        let errorsFiltered = errs.filter(error => error.message !== "As notas devem ser maiores do que 0");
                        errs = [
                            ...errorsFiltered, 
                            { message: "As notas devem ser maiores do que 0"}
                        ];
                    }
                }
                return null;
            })
        }

        updateNullGrades();
        updateWeightSum();
        allFieldsHaveWeight();
        gradesNotBetween0And10();

        return errs;
    }
}