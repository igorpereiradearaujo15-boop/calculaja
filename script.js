function moeda(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});}
function numero(id){return Number(document.getElementById(id).value);}
function mostrar(id,html,tipo="success"){const el=document.getElementById(id);el.innerHTML=html;el.className="result show "+tipo;}

function calcularPorcentagem(){
 const p=numero("pct"),v=numero("pctValor");
 if(!Number.isFinite(p)||!Number.isFinite(v)||p<0||v<0)return mostrar("pctResult","Informe valores válidos.","error");
 const r=v*p/100;
 mostrar("pctResult",`${p}% de ${moeda(v)} = <strong>${moeda(r)}</strong><small>Cálculo: ${v} × ${p} ÷ 100.</small>`);
}
function calcularJuros(){
 const c=numero("capital"),t=numero("taxa"),n=numero("tempo");
 if(!Number.isFinite(c)||!Number.isFinite(t)||!Number.isFinite(n)||c<0||t<0||n<0)return mostrar("jurosResult","Informe valores válidos.","error");
 const j=c*(t/100)*n,m=c+j;
 mostrar("jurosResult",`Juros: <strong>${moeda(j)}</strong><br>Montante: <strong>${moeda(m)}</strong><small>Fórmula: J = C × i × t.</small>`);
}
function calcularIdade(){
 const value=document.getElementById("nascimento").value;
 if(!value)return mostrar("idadeResult","Informe sua data de nascimento.","error");
 const nasc=new Date(value+"T00:00:00"),hoje=new Date();
 if(nasc>hoje)return mostrar("idadeResult","A data de nascimento não pode estar no futuro.","error");
 let anos=hoje.getFullYear()-nasc.getFullYear(),meses=hoje.getMonth()-nasc.getMonth(),dias=hoje.getDate()-nasc.getDate();
 if(dias<0){meses--;const ultimo=new Date(hoje.getFullYear(),hoje.getMonth(),0).getDate();dias+=ultimo;}
 if(meses<0){anos--;meses+=12;}
 mostrar("idadeResult",`Você tem <strong>${anos} anos, ${meses} meses e ${dias} dias.</strong>`);
}
function calcularIMC(){
 const p=numero("peso"),a=numero("altura");
 if(!Number.isFinite(p)||!Number.isFinite(a)||p<=0||a<=0)return mostrar("imcResult","Informe peso e altura válidos.","error");
 const imc=p/(a*a);let faixa;
 if(imc<18.5)faixa="abaixo do peso";else if(imc<25)faixa="faixa considerada adequada";else if(imc<30)faixa="sobrepeso";else faixa="obesidade";
 mostrar("imcResult",`IMC: <strong>${imc.toFixed(2).replace(".",",")}</strong><small>Classificação de referência: ${faixa}.</small>`);
}
function calcularCombustivel(){
 const d=numero("distancia"),c=numero("consumo"),p=numero("preco"),f=numero("idaVolta");
 if(!Number.isFinite(d)||!Number.isFinite(c)||!Number.isFinite(p)||d<0||c<=0||p<0)return mostrar("combustivelResult","Informe valores válidos.","error");
 const distanciaTotal=d*f,litros=distanciaTotal/c,custo=litros*p;
 mostrar("combustivelResult",`Distância total: <strong>${distanciaTotal.toFixed(1).replace(".",",")} km</strong><br>Combustível: <strong>${litros.toFixed(2).replace(".",",")} L</strong><br>Custo estimado: <strong>${moeda(custo)}</strong>`);
}
document.getElementById("ano").textContent=new Date().getFullYear();
