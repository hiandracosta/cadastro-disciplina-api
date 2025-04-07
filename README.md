# API de Registros Escolares

Uma API simples para guardar informações de alunos. Você pode adicionar, ver e apagar registros.

## Como Usar

### Adicionar Registro
Envie um POST para `http://localhost:3000/registros` com:
```json
{
    "matricula": "12345",
    "curso": "Engenharia",
    "semestre": "2023.2",
    "disciplina": "Cálculo"
}
```

### Ver Registros
Acesse `http://localhost:3000/registros` para ver todos os registros.

### Apagar Registros
Envie um DELETE para `http://localhost:3000/registros` para apagar todos os registros.

## Como Rodar

1. Instale o Node.js
2. Abra o terminal na pasta do projeto
3. Digite `npm install`
4. Digite `npm start`

Pronto! A API estará rodando em `http://localhost:3000` 

## Desenvolvido pelo grupo :

- LUIS CARLOS RODRIGUES SILVA  
- IGOR GABRIEL SOARES 
- HIANDRA ALVES COSTA
- MARCOS AURELIO SEGUNDO
- MARCOS GABRIEL
- CRISTIAN VIEIRA SILVA LINS
