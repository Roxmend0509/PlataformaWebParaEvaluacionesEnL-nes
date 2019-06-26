export class Detalles{
    id:"number";
    email:"string";
    role:"string";
"make":[{
        id:"number";
        examen_id:"number";
        complete:"string";
}]
"exams":[{
        id:"number";
        name:"string";
        description:"string";
        key:"string";
}]
"calificaciones":[{
    id:"number";
    calificacion:"string";
    aprobation:"string";
    user_id:"number";
    examen_id:"number";

}]
}