import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { jsPDF } from "jspdf";
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-prova',
  templateUrl: './curso-prova.component.html',
  styleUrls: ['./curso-prova.component.scss']
})
export class CursoProvaComponent implements OnInit, OnDestroy {

  @ViewChild('scroll') scroll: ElementRef;

  QuestaoSelecionada = new FormControl(0);
  QuestoesSubscription: Subscription;

  QuestaoIndex = 0;
  timer;
  Segundos = 40;
  NumeroDeQuestoesCertas = 0;

  IsApto = false;
  IsTesteTerminado = false;

  options: AnimationOptions = {
    path: '/assets/json/parabens.json',
  };

  options2: AnimationOptions = {
    path: '/assets/json/sad.json',
  };

  Lista = [
    {
      Pergunta: 'O que é o unity?', 
      Respostas: [
        {respostas: 'O entendimento de que a prática educativa, pautada no multiculturalismo, deve desenvolver asensibilidade.', certo: true},
        {respostas: 'A compreensão de que homens e mulheres produzem sua condição humana como seres histórico sociais', certo: false},
        {respostas: 'O desenvolvimento de um projeto pedagógico coletivo e assegurador do acesso às formas mais elaboradas', certo: false}
      ]
    },
    {
      Pergunta: 'Qual o principal objectivo do unity?', 
      Respostas: [
        {respostas: 'O entendimento de que a prática educativa, pautada no multiculturalismo, deve desenvolver asensibilidade.', certo: true},
        {respostas: 'A compreensão de que homens e mulheres produzem sua condição humana como seres histórico sociais', certo: false},
        {respostas: 'O desenvolvimento de um projeto pedagógico coletivo e assegurador do acesso às formas mais elaboradas', certo: false}
      ]
    },
    {
      Pergunta: 'Qual a missão do unity?', 
      Respostas: [
        {respostas: 'O entendimento de que a prática educativa, pautada no multiculturalismo, deve desenvolver asensibilidade.', certo: true},
        {respostas: 'A compreensão de que homens e mulheres produzem sua condição humana como seres histórico sociais', certo: false},
        {respostas: 'O desenvolvimento de um projeto pedagógico coletivo e assegurador do acesso às formas mais elaboradas', certo: false}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  }

  ProximaQuestao(isQuestaoSelecionada = true){
    const index = this.QuestaoSelecionada.value;
    const isCorrect = this.Lista[this.QuestaoIndex].Respostas[index].certo;

    if(isCorrect && isQuestaoSelecionada){
      this.NumeroDeQuestoesCertas += 1;
    }

    //alert(this.NumeroDeQuestoesCertas)

    if(this.IsFinal()){
      this.TerminarTeste();
    }
    else{
      this.QuestaoIndex += 1;

      this.scroll.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }

  TerminarTeste(){
    this.IsApto = this.NumeroDeQuestoesCertas >= Math.round(this.Lista.length/2);
    this.IsTesteTerminado = true;
  }

  IsFinal(): boolean{
    return this.QuestaoIndex === this.Lista.length - 1;
  }

  GerarPDF(){
    var doc = new jsPDF('p', 'pt', 'A4');
    let name='Alfredo Vidinhas';
    let image='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';
    let course='programação da 1000tube';
    let imgFundo = new Image();
    let date = new Date();
    imgFundo.src = 'assets/images/fundo_certificado.jpg';
    let datestr = ("0" + date.getDate()).slice(-2) +"/"+("0" + (date.getMonth() + 1)).slice(-2)+"/" + date.getFullYear();
        
    doc.setFontSize(12)
    doc.text(datestr, 510, 40);

    doc.addImage(imgFundo, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

    doc.addImage(image,20, 30, 140, 0);

    doc.setFontSize(60);
    doc.setFont(undefined, 'bold');
    doc.text('Certificado', 135, 215);
    doc.setFont(undefined, 'normal');
    doc.setLineWidth(1)
    doc.line(200,245, 375,245);
    doc.setFontSize(16)
    doc.setTextColor('#7D641E');
    doc.text('Este certificado é orgulhosamente apresentado a', 120, 320)
    doc.setTextColor('#000');
    doc.setFontSize(40)
    doc.text(name, 155, 390)
    doc.setLineWidth(1)
    doc.line(100,420, 500,420);
    var splitTitle = doc.splitTextToSize('por completar com sucesso as 60 horas de curso de '+course, 1160);
    doc.setFontSize(14)
    doc.text(splitTitle, 300, 460, {align: "center"})


    doc.setLineWidth(0.1)
    doc.line(380,770,520,770)
    doc.text('Director Geral', 410, 790)

    doc.save('Certificado.pdf');
  }

  Repeat(){
    this.timer = setTimeout(() => {
      this.Segundos -= 1;
      if(this.Segundos == 0){
        clearTimeout(this.timer);
        this.Segundos = 40;

        if(this.IsFinal()){
          //this.TerminarTeste()
        }
        else{
          //this.ProximaQuestao(false);
        }
      }
      this.Repeat();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.QuestoesSubscription.unsubscribe();
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
