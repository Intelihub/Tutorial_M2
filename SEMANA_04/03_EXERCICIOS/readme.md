<b>
+++++++++++++++++++++++++++++++++++++++++OBRIGATÓRIOS+++++++++++++++++++++++++++++++++++++++
</b>
<BR>
<BR>
1. LANÇAMENTO VERTICAL 

Um arremesso de um corpo, com velocidade inicial na direção vertical, recebe o nome de Lançamento Vertical. Sua trajetória é retilínea e vertical, e, devido à gravidade, o movimento classifica-se com Uniformemente Variado.

Sabendo-se que hmax é a altura máxima que um objeto consegue atingir, e que V0 é a velocidade inicial do lançamento, **construa um formulário em HTML para receber o valor da velocidade inicial e um script em Javascript que calcule a altura máxima (em metros) e o tempo total de subida do objeto (em segundos)**, considerando a aceleração da gravidade g = 10 m/s2, e de acordo com a velocidade inicial inserida pelo usuário.
 
Seguem as fórmulas para o cálculo:

<img src="https://render.githubusercontent.com/render/math?math=t_s=\frac{V_0}{g}"/>
<img src="https://render.githubusercontent.com/render/math?math=h_{max}=\frac{V_0^2}{2g}"/>

2. PONTO DE MÁXIMO/MÍNIMO

Desenvolva um script que encontre o ponto máximo ou mínimo de uma função do 2º grau, isto é, que calcule na prática o Xv e Yv. Observar que os valores de a, b e c devem ser passados pelo usuário. Acompanhe a explicação e exemplo a seguir.
Toda expressão na forma y = ax² + bx + c ou f(x) = ax² + bx + c com a, b e c números reais, sendo a ≠ 0, é denominada função do 2º grau. A representação gráfica de uma função do 2º grau é dada através de uma parábola, que pode ter a concavidade voltada para cima ou para baixo. Veja:

<img src="https://s1.static.brasilescola.uol.com.br/be/e/Untitled-10(10).jpg" alt="Ponto de Máximo / Mínimo"/>

Para determinarmos o ponto máximo e o ponto mínimo de uma função do 2º grau basta calcular o vértice da parábola utilizando as seguintes expressões matemáticas: 

<img src="https://s1.static.brasilescola.uol.com.br/be/e/Untitled-11(7).jpg" alt="Fórmulas">

O ponto máximo e o ponto mínimo podem ser atribuídos a várias situações presentes em outras ciências, como Física, Biologia, Administração, Contabilidade entre outras. 

Fonte: http://www.brasilescola.com/matematica/maximo-minimo.htm

3. TEMPERATURA

Desenvolva um script que faça a conversão de Celsius para Fahrenheit e vice-versa, de acordo com a escolha do usuário (isso quer dizer que o usuário digita um valor e escolhe para qual escala ele quer converter): Celsius para Fahrenheit, Fahrenheit para Celsius

<img src="https://www.infoescola.com/wp-content/uploads/2010/01/escalas-termometricas1.jpg" alt="escalas de temperatura">


Observando a figura vemos que a diferença entre os pontos de fusão e de ebulição da água representam a mesma variação de temperatura. 

Logo:
(C- 0) / (100 - 0)  =  (F - 32) / (212 - 32)
<br/>
(C / 100) =  (F - 32)/180

Simplificando, temos:
<br/>
 C / 5 = (F - 32) / 9

Exemplo de teste: Converter 37°C para a escala Farenheit.
<br/>
C/ 5 = (F - 32) / 9
<br/>
C = 37°C
<br/>
37 / 5= (F - 32) / 9
<br/>
7.4 = (F - 32) / 9
<br/>
9  *  7.4 =  F - 32
<br/>
F - 32 = 66.,6
<br/>
F = 66.6 + 32
<br/>
F = 98.6°F

Fonte: http://www.infoescola.com/fisica/conversao-de-escalas-termometricas/

4. CONSUMO DE ENERGIA 

Deseja-se calcular a conta de consumo de energia elétrica de uma casa. Para isso, elabore um formulário em HTML que leia a quantidade de Kwh consumidos e o valor unitário do Kwh. 
Escreva uma função em JavaScript que faça o cálculo (valor = quantidade x valor unitário) e, caso a quantidade de Kwh ultrapasse 100, o valor do Kwh deve ser acrescido em 25%. Caso ultrapasse 200, o mesmo valor deve ser acrescido em 50%.

**Caso não tenha conseguido conseguido executar algum ponto conforme aqui indicado, tire suas dúvidas com o instrutor de programação :)**

Entrega: cada exercício deve ter o seu respectivo html, e deve ser usado o mesmo arquivo javascript para todos. Faça a entrega usando a sua Git Page.
<BR><BR>
<b>
+++++++++++++++++++++++++++++++++++++++++OPCIONAIS+++++++++++++++++++++++++++++++++++++++
</b>
<BR><BR>

1. DESCONTO / ACRÉSCIMO 

Construa um script que receba dados através de um formulário HTML contendo um valor numérico e opções disponíveis através de uma caixa de seleção, informe o resultado desejado de acordo com as seguintes opções: (1) 30% do valor, (2) valor com acréscimo de 30% ou (3) valor com desconto de 30%.  

2.	INSS 
Construa um script que receba dados através de um formulário HTML contendo o valor da hora de trabalho, o número de horas trabalhadas no mês e informe o salário líquido de um funcionário, de acordo com o percentual de desconto do INSS.

SALÁRIO DE CONTRIBUIÇÃO (R$)	ALÍQUOTA INSS
<br/>
até 1.317,07	                8%
<br/>
de 1.317,08 até 2.195,12	    9%
<br/>
Acima de  2.195,13 	            11%
<br/>


3.	CALCULADORA FLEX 

Para carros Flex é preciso ter cautela ao escolher que forma abastecer. A principal diferença de preços e vantagens entre os dois combustíveis está na proporção preço X desempenho. Para o álcool ser mais vantajoso do que a gasolina, o preço do litro tem que custar até 70% do litro da gasolina.
Com o objetivo de melhorar a calculadora, informe ao usuário o quanto ele gastaria por mês usando álcool e gasolina, mas para isso é preciso pedir para que ele insira também o consumo de combustível por litro (Km/litro) e quantos quilômetros ele percorre com o carro (por mês).
Sabendo-se de tais fatos, construa um script em Jvascript que indique qual a melhor opção (Álcool ou Gasolina), o gasto com cada combustível por mês após a inserção dos valores dos preços do litro , consumo por combustível (Km/Litro) e distância percorrida também por mês.


Entrega: cada exercício deve ter o seu respectivo html, e deve ser usado o mesmo arquivo javascript para todos. Faça a entrega usando a sua Git Page.
