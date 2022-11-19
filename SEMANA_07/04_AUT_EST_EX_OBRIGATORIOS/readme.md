# Lista de exercícios obrigatórios - SEMANA 7

Implemente os exercícios a seguir usando um arquivo html para cada, e um único javascript para todos.

## Exercício 1 - Tabuada
Desenvolva um script que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas observe que a tabuada não deve necessariamente iniciar em 1 e terminar em 10.

O valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:

ENTRADA DE DADOS PELO FORMULÁRIO
Montar a tabuada de: 5
Começar por: 4
Terminar em: 7
SAÍDA
Tabuada do 5 começando em 4 e terminando em 7:
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35

## Exercício 2 - Palíndromo
Um número é considerado palíndromo quando lido da esquerda para a direita ou da direita para a esquerda representa sempre o mesmo valor, como por exemplo: 434, 6446 e 82328. Sabendo-se disso construa um script que verifique se um número fornecido pelo usuário é ou não palíndromo.

## Exercício 3 - Um, dois, três, PI
Um, dois, três, PI é uma brincadeira antiga de criança, e na verdade consiste em reconhecer os múltiplos do número 3.

Sabendo-se disso, desenvolver um script gere na tela, quando o usuário escolher o limite do número 10:

1 - 2 - 3
PI
4 - 5 - 6
PI
7 - 8 - 9
PI

## Exercício 4 - Reforma
Você foi contratado(a) para fazer um pequeno script que calcule o número total de azulejos necessários para determinada parede de uma sala, pedindo-se que sejam inseridas as dimensões de cada azulejo, e a altura e largura da parede que se deseja reformar, contando com uma sobra de 5% de azulejos.
Para calcular a quantidade de azulejos necessários, é preciso ter as dimensões da área que pretende revestir. Ao resultado obtido deve sempre adicionar 5% do total para sobras, inevitáveis, como por exemplo, no corte de azulejos para acertos nas bordas ou nos cantos.

Exemplificando temos a seguinte situação real: 
Suponhamos que você pretende revestir com azulejos de 15 cm x 15 cm —- medida mais corrente no Brasil — uma parede com 4,5 m de comprimento e 3 m de altura.
Neste caso, necessitará de 30 azulejos no sentido do comprimento (450 cm = 15 cm X 30) e 20 no sentido da altura (300 cm = 15 cm X 20). Logo, o total de azulejos será:
Para revestir a superfície: 30 X 20 = 600.
Para sobras: 5% de 600 = 30.
Total de azulejos: 630 unidades

Obs: para trabalhar com arredondamentos para cima, utilize a função nativa do Javascript: Math.ceil(numero)


