# Lista de exercícios obrigatórios - SEMANA 9

## Exercício 1 - VALOR PRESENTE E VALOR FUTURO 

    Na fórmula M = P (1 + i)*n , o principal P é também conhecido como Valor Presente (PV = present value) e o montante M é também conhecido como Valor Futuro (FV = future value). 

    Então essa fórmula pode ser escrita como:
    FV = PV (1 + i)*n 

    Isolando PV na fórmula temos:
    PV = FV / (1+i)*n

    Com esta mesma fórmula podemos calcular o valor futuro a partir do valor presente.
Exemplo:
    Quanto teremos daqui a 12 meses se aplicarmos R$1.500,00 a uma taxa de 2% ao mês?
    Solução: FV = 1500 * (1 + 0,02)*12 = R$ 1.902,36

  Desenvolva um script em Javascript que calcule o valor presente ou o valor futuro dependendo de qual opção o usuário escolher.


## Exercício 2 - JUROS SIMPLES
Utilize Javascript para resolver o problema a seguir, fazendo com que sejam calculados a montante (M) e o Juros (J), sendo dados pelo usuário o período (n), o capital (P) e a taxa de juros (i). Observe e utilize os exemplos abaixo para testar.
O regime de juros será simples quando o percentual de juros incidir apenas sobre o valor principal. Sobre os juros gerados a cada período não incidirão novos juros. Valor Principal ou simplesmente principal é o valor inicial emprestado ou aplicado, antes de somarmos os juros. Transformando em fórmula temos:
 
J = P * i * n
 
Onde:
J = juros
P = principal (capital)
i = taxa de juros
n = número de períodos

Exemplo: Temos uma dívida de R$ 1000,00 que deve ser paga com juros de 8% a.m. pelo regime de juros simples e devemos pagá-la em 2 meses. Os juros que pagarei serão:
  J = 1000 x 0.08 x 2 = R$ 160
  Ao somarmos os juros ao valor principal temos o montante.
  Montante = Principal + Juros
  M = P *( 1 + ( i * n ) )
  Montante = Principal + ( Principal x Taxa de juros x Número de períodos )
 
  
Exemplo: Calcule o montante resultante da aplicação de R$70.000,00 à taxa de 10,5% a.a. durante 145 dias.
   SOLUÇÃO:
 M = P * ( 1 + (i*n) )
 M = 70000 [1 + (10,5/100).(145/360)] = R$72.960,42
Observe que expressamos a taxa i e o período n, na mesma unidade de tempo, ou seja, anos. Daí ter dividido 145 dias por 360, para obter o valor equivalente em anos, já que um ano comercial possui 360 dias.
Fonte: http://www.somatematica.com.br/emedio/finan2.php


## Exercício 3 - IMPRESSÃO MALUCA
Desenvolva um script que faça a impressão de um caracter por linha da frase que for digitada pelo usuário, de acordo com o exemplo abaixo.


ENTRADA: I love JS

SAÍDA:
I
 
  l
   o
    v
     e
      
       J
        S



## Exercício 4 - CONVERSÃO DECIMAL-BINÁRIO

Utilizando o algoritmo a seguir, desenvolva um script em Javascript que converta um número natural (decimal) inserido pelo usuário, na base dois (binário).
Obs: considerar um número no máximo de 8 bits, isto é, até 255 (base decimal). 

<img src="decimal-binario.png">
