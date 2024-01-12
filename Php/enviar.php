<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $telefone = addcslashes($_POST['telefone']);

    $para = "pedrodamiao26061998@gmail.com";
    $assunto = "Coletas De Dados";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n";

    $cabeca = "From: pedroluzzz28@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado Com sucesso!!");
    }else{
        echo("E-mail não enviado!!");
    }

?>