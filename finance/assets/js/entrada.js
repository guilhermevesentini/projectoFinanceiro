
function entradaViewModel() {
    var self = this;
    
    self.entradas = ko.observableArray();
    self.entradaInputName = ko.observable();
    self.entradaInputNameInputVencimento = ko.observable();
    self.entradaInputNameInputValor = ko.observable();
    self.addEntrada = ko.observable();

    
    self.addEntrada = function() {

        var nome = $('.nome').val();
        var recebimento = $('.recebimento').val();
        var valor = $('.valor').val();
        var listaEntradas = [nome, recebimento, valor];

        self.entrada.push({
            nome: nome,
            recebimento: recebimento,
            valor: valor
        });
        localStorage.setItem('nome', JSON.stringify(nome));  
        localStorage.setItem('vencimento', JSON.stringify(recebimento));
        localStorage.setItem('valor', JSON.stringify(valor));      
    };
    self.removeEntrada = function(entradas) {
        self.entradas.remove(entradas);
    };
    
    
};

ko.applyBindings(new entradaViewModel());