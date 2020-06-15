const nome = "Silvana";
const sexo = "M";
const idade = 48;
const contribuicao = 23;

if ((sexo === "M" && contribuicao < 35) || (sexo === "F" && contribuicao < 30)) {

    if ((sexo === "M" && contribuicao + idade >= 95) || (sexo === "F" && contribuicao + idade >= 85)) {

        console.log(`${nome}, Você pode se aposentar`);
    } else {
        console.log(`${nome}, Você ainda não pode se aposentar`);
    }



} else {
    console.log(`${nome}, Você pode se aposentar`);

}