function  verificaEmailBanco(emailVerif, setEmailOk, setMsg){
  /*
  200 - ja existe email cadastrado
  204 - nao existe email cadastrado
  501 - algum erro
  */
  let e = fetch("http://localhost:3000/clientes/verificaEmail", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: emailVerif})
      }).then((res) => {
        if(res.status == 204){
          setMsg(["O E-mail está disponível.", "#192"]);
          return setEmailOk(true);
        }else{
          setMsg(["O E-mail já está sendo utilizado.", "#a22"]);
          return setEmailOk(false);
        }
      });
}

// !!nota!! -> trocar por alguma api que faça verificaçao de email
export default async function verificaEmail(emailVerif, setEmailOk, setMsg){
    if(emailVerif.includes("@") && !emailVerif.includes(" ")){
        let arb = emailVerif.split("@");
        if(arb.length == 2 && arb[0].length > 2){
                if(arb[1].includes(".")){
                    let ponto = arb[1].split(".");
                    if(ponto[0].length >= 2 && ponto[1].length >= 2){   
                        return verificaEmailBanco(emailVerif, setEmailOk, setMsg);
                    }
            }
        }
    }
    setMsg(["Formato de E-mail inválido.", "#f30"]);
    setEmailOk(false);
  }