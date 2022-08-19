-- Comandos Git --

  git branch  (mostra as branch no repo local)
  git checkout -b nome-da-branch
  git add .  (adiciona todos os arquivos ao stage)
  git commit -m ''
  git commit -am '' (realiza o add . e commit)
  git reset HEAD~ (desfaz o ultimo commit local)
  git reset --hard origin/nome-da-branch  (reseta o repositório local para que ele fique igual ao remoto)
  git push -u origin nome-da-branch-mãe (faz o push da branch local como filha da branch remota)
  git push
  git pull
  git branch -d nome-da-branch (exclui a branch local)
  git merge nome-da-branch-filha (faz o merge da mãe com a branch filha)
 
-- Nome das Branches --

master
    /main-group-18
        /main-group-18-release  ok
            /main-group-18-req1-5  ok
            /main-group-18-req6-7