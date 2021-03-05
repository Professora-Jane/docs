---
title: Tabela de features
---

## Temas

|Tema|Descrição|Épicos|
|--|--|---|
|T1 - Agenda|Engloba funcionalidades relacionadas à funcionalidade de agenda|> Horarios|
|T2 - Sala de aula|Engloba funcionalidades relacionadas à sala de aula|> Quadro <br>> WebRTC/Peer <br>> Aula <br>> Compartilhamento de anexos|
|T3 - Notas (anotações)|Relacionado à anotações (notas) de aulas, alunos, etc|> Anotações|
|T4 - Cadastro & autenticação|Engloba funcionalidades de login, cadastro e tipos de perfis|> Cadastro, autenticação & roles <br>> Perfil de usuário|
|T5 - Comunicação e notificações|Funcionalidades de comunicação entre usuários, server-client & notificações em geral|> Chat entre professor e aluno <br>> Sistema de notificações|
|T6 - Atividades & avaliações|Engloba funcionalidades relacionadas ao CRUD de atividades e avaliações|> Atividades & avaliações <br>> Progresso do aluno|
|T7 - Arquivos|Engloba funcionalidades relacionadas ao compartilhamento de arquivos|> Arquivos|

### Horários

<Feature 
    id="US01"
    parteInteressada="Professor"
    feature="cadastrar de um horário de aula"
    descricao="adicionar alunos à agenda"
    status="ANDAMENTO"
    criterios="> O backend deve validar horas e datas > Deve criar um log de registro da ação"  />
<Feature 
    id="US02"
    parteInteressada="Professor"
    feature="remover um horário de aula"
    descricao="remover alunos da agenda"
    status="ANDAMENTO"
    criterios="> A exclusão deve ser física, porém deve ser criado um log de registro da ação"  />
<Feature 
    id="US03"
    parteInteressada="Desenvolvedor"
    feature="Retornar aulas por dia de semana, por aluno"
    descricao="permitir que o front trabalhe melhor com os horários"
    status="OK"
    criterios="> Uma aula deve ser retornada por dia por aluno, no formato de um timestamp"  />
<Feature 
    id="US04"
    parteInteressada="Professor"
    feature="Visualizar todas as minhas aulas no formato de agenda"
    descricao="gerenciar meus alunos e aulas"
    status="OK"
    criterios="> Deve haver, no front, um calendário semanal que permita a visualização de todas as aulas de todos os alunos"  />