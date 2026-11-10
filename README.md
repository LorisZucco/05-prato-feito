# Prato Feito

Planejador de refeições da semana. O app já vem pronto: telas, estilos e dados. Nas três noites da Semana 05 do Módulo 2 (React Avançado, parte 1) você escreve a lógica: Context API, hooks customizados, `useMemo`, `useCallback` e `memo`.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173 no Chrome e ligue o Modo Dispositivo (`F12`, depois `Ctrl+Shift+M`; no Mac, `Cmd+Shift+M`) com a largura de 390 px.

## O que tem aqui

```
src/
  components/   uma pasta por componente: index.jsx e o CSS dele
  data/         recipes.js (12 receitas) e days.js (os sete dias)
  utils/        funções prontas: formatar, somar a lista de compras
  index.css     variáveis de cor, tema claro e escuro, base
  App.jsx       monta a página
```

Hoje a tela abre vazia e nada reage ao clique. É de propósito: a lógica é o que vamos escrever em aula.
