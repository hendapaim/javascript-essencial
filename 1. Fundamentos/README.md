# Função

Cadeira: javascript
Date: January 6, 2022 → January 6, 2022
Status: Dane
Tags: Post

# **Introdução**

Funções são blocos de código, que pode ser reutilizado. 

A função pode ter opcionalmente parâmetros e valores de retorno.

A função deve ser invocada para ser executada.

Além disso, as funções em javaScript são chamada de função de primeira classe porque pode ser passada como valor ou parâmetros.

# Sintaxe

---

- **Função regular**

```jsx
function nomeDaFuntion(parametros)
{
	// Instrução;
}
```

- **Expressão de função**

As funções podem ser usadas como valor das variáveis.

```jsx
const nomeDaFuncao = function(){
	// Instrução;
}
```

- **Função de seta**

As funções de seta é útil para funções inline.

```jsx
const nomeDaFuncao = () => {
	// Instruções;
}
```

# Parâmetros

---

As funções podem ter vários parâmetros.

```jsx
function funcaoComParametros(parametro){
	// Instruções;
}
```

- **Vários parâmetros**

```jsx
function funcaoComParametros(a, b, c, ...){
	// Instruções;
}
```

- **Funções com valor padrão**

```jsx
function funcaoComParametros(a=1, b="Ola"){
	// Instruções;
}
```

# Valores de retorno

---

Cada função retorna um valor, que por padrão é undefined.

A função termina quando é encontrado a palavra-chave return.

```jsx
function funcaoComParametros(parametro){
	// Instruções;
	return result;
}
```

# Função alinhada

---

As funções podem ser declarada uma dentro da outra.

A função externa é o escopo da função interna.

```jsx
function funcaoAlinhada(){
	// Instruções;
	function funcao2(){
		// Instrução2
	}
	funcao2();
}
```

# Função auto executada (**IIFE)**

---

As funções que são executadas imediatamente a sua declaração:

```jsx
(function funcaoInvocada(){
	// Instruções;
})()
```

# Função **Hoisting**

---

Todas funções são movidas para o topo do escopo.
por esse motivo podemos invocar a função antes de declarar, dessa forma: 

```jsx
funcaoHoisting();
function funcaoHoisting(){
	// Instruções;
}
```

## Fonte

[JavaScript Functions](https://flaviocopes.com/javascript-functions/#introduction)