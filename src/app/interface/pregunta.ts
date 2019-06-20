/*
    En este archivo .ts se encontrara los 
    datos que contendra la pregunta, como es el id,
    textquestion y el examen_id donde se asignara cada 
    pregunta
*/

export interface Pregunta{
    id?:number;
    textquestion:string;
    examen_id:number;
    created_at?:string;
    updated_at?:string; 
}