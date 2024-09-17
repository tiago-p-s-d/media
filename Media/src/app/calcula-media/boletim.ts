export class Boletim{
  private nota1: number | undefined = undefined;
  private nota2: number | undefined = undefined;
  private nota3: number | undefined = undefined;
  private nota4: number | undefined = undefined;
  private provafinal: number | undefined= undefined;

  private mp: number | undefined= undefined;

  private mf: number | undefined= undefined;

  private situacao: string | undefined = undefined



  constructor(){}



  getsituacao(){
      return this.situacao
  }
  getPF(){
    return this.provafinal
  }

  setNota(bimestre:number, nota: number): boolean{
      if(bimestre == 1){
          this.nota1 = nota
          return true
      }
      else if (bimestre == 2){
          this.nota2 = nota
          return true
      }
      else if (bimestre == 3){
          this.nota3 = nota
          return true
      }
      else if (bimestre == 4){
          this.nota4 = nota
          return true
      }
      else {
          return false
      }
  }

  calcMF(){
      if(this.provafinal != undefined){
        if(this.mp){
          this.mf = this.mp + this.provafinal

          this.calcMP()

          return true
        }
        else {
          return false
        }
      }
      else{
          return false
      }
  }
  setProvaFinal(notaprovafinal: number){
      this.provafinal = notaprovafinal

      this.calcMF()
  }
  getMF(){
      return this.mf
  }


  calcMP(){
      if(this.nota1 != undefined && this.nota2 != undefined && this.nota3 != undefined && this.nota4 != undefined ){
          this.mp = (this.nota1 * 2 + this.nota2 * 2 + this.nota3 * 3 + this.nota4 * 3) / 10
              if(this.mp>=60){
                  this.situacao = 'aprovado'
              }
              else if (this.mp >=10 && this.mp < 60){
                  this.situacao = 'avaliacao final'
                    if(this.mf){

                      if(this.mf >60){
                          this.situacao = 'aprovado com prova final'
                      }
                    }
              }
              else if (this.mp < 10){
                  this.situacao = 'reprovado'
              }
      }
      else {
          this.situacao = 'cursando'
      }
  }


}




