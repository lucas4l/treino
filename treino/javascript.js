function confirmar(){

    var txtNome = window.document.getElementById("txtNome").value;
    var txtSobrenome = window.document.getElementById("txtSobrenome").value;
    var txtIdade = window.document.getElementById("txtIdade").value;
    var masculino = window.document.getElementById("masculino").value;
    var feminino = window.document.getElementById("feminino").value;

    if(txtNome == "") {
        alert("Campo Nome não pode ficar vazio")
        document.getElementById("txtNome").focus();
        return false;

    }
    if(txtNome.length < 5){
        alert("Nome não pode ser menor do que 4 letras")
        document.getElementById("txtNome").focus();
        return false;
    }
    if(txtSobrenome == ""){
        alert("O campo sobroenome nao pode ficar vazio")
        document.getElementById("txtSobrenome").focus();
        return false; 
    }
    if(txtSobrenome == txtNome){
        alert("sobrenome nao pode ser igual ao nome")
        document.getElementById("txtSobrenome").focus();
        return false;
    }
    if(txtIdade ==""){
        alert("Idade nao pode ficar vazia")
        document.getElementById("txtIdade").focus();
        return false;
    }
    if(txtIdade <18){
        alert("Idade nao pode ser menor do que 18")
        document.getElementById("txtIdade").focus();
        return false;
    }
    if(masculino == ""){
        alert("Escolha um genero")
        document.getElementById("masculino");
    }else if(masculino){
        
        res.style.background = 'red'

    }
    if(feminino == ""){
        alert("Esolha um genero")
        document.getElementById("feminino");
       
    }else{
        
        res.style.background = 'blue'
       
    }
     
    

     alert(" cadastro completo")
     res.innerHTML = `Parabens pelo cadastro ${txtNome} ${txtSobrenome} sua idade é  ${txtIdade}`

  

    }