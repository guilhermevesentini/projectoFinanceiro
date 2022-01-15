
function despesaViewModel() {
    var self = this;
    
    self.despesas = ko.observableArray();
    self.despesaInputName = ko.observable();
    self.despesaInputVencimento = ko.observable();
    self.despesaInputValor = ko.observable();
    self.addDespesa = ko.observable();

    

    //self.uploadDespesas = function(){
    //    var storageNome = localStorage.getItem('nome');
    //    var storagevencimento = localStorage.getItem('vencimento');
    //   var storagevalor = localStorage.getItem('valor');

    //    self.despesas.push({
    //       storageNome: localStorage.getItem('nome'),
    //       storagevencimento: localStorage.getItem('vencimento'),
    //        storagevalor: localStorage.getItem('valor')
    //   });
    //   console.log(storageNome,storagevencimento,storagevalor);
    //}
    
    self.addDespesa = function() {

        var nome = $('.nome').val();
        var vencimento = $('.vencimento').val();
        var valor = $('.valor').val();
        var listaDespesa = [nome, vencimento, valor];

        self.despesas.push({
            nome: nome,
            vencimento: vencimento,
            valor: valor
        });
        localStorage.setItem('nome', JSON.stringify(nome));  
        localStorage.setItem('vencimento', JSON.stringify(vencimento));
        localStorage.setItem('valor', JSON.stringify(valor));      
    };
    self.removeDespesa = function(despesas) {
        self.despesas.remove(despesas);
    };
    
    
};

ko.applyBindings(new despesaViewModel());