/*
    En este archivo .ts se encontrara los 
    datos que contendra la respuesta, como es el id,
    textanswer y el question_id donde se asignara cada 
    respuesta
*/

export interface Respuesta{
    id?:number;
    textanswer:string;
    question_id:number;
    created_at?:string;
    updated_at?:string;
    AnswerCorrect:string; 
}