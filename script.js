const avanca = Document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar');

avanca.array.forEach(button=>{
    button.addEventListener('click',function(){
      const atual= document.querySelection('.ativo');
      const poximoPasso ='passo-'+this.getAttribute('data-proximo');
      
     atual.classlist.remove('ativo');
     const proximoElemento=document.getElementById(poximoPasso);

     if (proximoElemento){
        proximoElemento.classlist.add('ativo');
     }else{
     console.error(`elemento com ID "${poximoPasso}" não encontrado.`);
     }
    });
});
